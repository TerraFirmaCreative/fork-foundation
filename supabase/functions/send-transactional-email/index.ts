import * as React from 'npm:react@18.3.1'
import { renderAsync } from 'npm:@react-email/components@0.0.22'
import { createClient } from 'npm:@supabase/supabase-js@2'
import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'
import { TEMPLATES } from '../_shared/transactional-email-templates/registry.ts'

// Configuration baked in at scaffold time — do NOT change these manually.
// To update, re-run the email domain setup flow.
const SITE_NAME = "cosmicigloo"
// SENDER_DOMAIN is the verified sender subdomain FQDN (e.g., "notify.example.com").
// It MUST match the subdomain delegated to Lovable's nameservers — never the root domain.
// The email API looks up this exact domain; a mismatch causes "No email domain record found".
const SENDER_DOMAIN = "notify.cosmicigloo.com"
// FROM_DOMAIN is the domain shown in the From: header (e.g., "example.com").
// When display_from_root is enabled, this can be the root domain for cleaner branding,
// even though actual sending uses the subdomain above.
const FROM_DOMAIN = "cosmicigloo.com"

// Generate a cryptographically random 32-byte hex token
function generateToken(): string {
  const bytes = new Uint8Array(32)
  crypto.getRandomValues(bytes)
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

// Auth: verify_jwt = true in config.toml — Supabase's gateway validates the
// caller's JWT before this code runs. We additionally inspect the JWT role
// below: service_role (server-to-server callers like handle-email-unsubscribe
// or future internal flows) can send anything; anon/authenticated callers can
// only invoke a small allowlist of templates AND must reference a verified
// DB row, so the recipient cannot be chosen by the attacker.

// Templates that may be invoked by anon/authenticated callers (i.e. the
// public website). For each, we resolve the recipient from a DB row that the
// user just created — we never trust `recipientEmail` from the request body.
const ANON_ALLOWED_TEMPLATES = new Set([
  'contact-confirmation',
  'contact-notification',
  'newsletter-welcome',
])

// Hardcoded admin recipient for internal alerts. Never trust the client.
const ADMIN_NOTIFICATION_EMAIL = 'hello@cosmicigloo.com'

// Anon-callable rows must be recent (replay protection).
const ANON_ROW_MAX_AGE_MS = 10 * 60 * 1000 // 10 minutes

function decodeJwtRole(authHeader: string | null): string | null {
  if (!authHeader?.startsWith('Bearer ')) return null
  const token = authHeader.slice(7)
  const parts = token.split('.')
  if (parts.length !== 3) return null
  try {
    const payload = JSON.parse(
      atob(parts[1].replace(/-/g, '+').replace(/_/g, '/'))
    )
    return typeof payload.role === 'string' ? payload.role : null
  } catch {
    return null
  }
}


Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL')
  const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')

  if (!supabaseUrl || !supabaseServiceKey) {
    console.error('Missing required environment variables')
    return new Response(
      JSON.stringify({ error: 'Server configuration error' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }

  // Parse request body
  let templateName: string
  let recipientEmail: string
  let idempotencyKey: string
  let messageId: string
  let templateData: Record<string, any> = {}
  try {
    const body = await req.json()
    templateName = body.templateName || body.template_name
    recipientEmail = body.recipientEmail || body.recipient_email
    messageId = crypto.randomUUID()
    idempotencyKey = body.idempotencyKey || body.idempotency_key || messageId
    if (body.templateData && typeof body.templateData === 'object') {
      templateData = body.templateData
    }
  } catch {
    return new Response(
      JSON.stringify({ error: 'Invalid JSON in request body' }),
      {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }

  if (!templateName) {
    return new Response(
      JSON.stringify({ error: 'templateName is required' }),
      {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }

  // 1. Look up template from registry (early — needed to resolve recipient)
  const template = TEMPLATES[templateName]

  if (!template) {
    console.error('Template not found in registry', { templateName })
    return new Response(
      JSON.stringify({
        error: `Template '${templateName}' not found. Available: ${Object.keys(TEMPLATES).join(', ')}`,
      }),
      {
        status: 404,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }

  // Create Supabase client with service role (bypasses RLS) — needed below
  // to verify the recipient against trusted DB rows.
  const supabase = createClient(supabaseUrl, supabaseServiceKey)

  // === Anti-abuse: recipient verification for public (anon) callers ===
  // The anon key is intentionally public, so any visitor can call this
  // function with a valid JWT. Without this guard, an attacker could send
  // branded emails to arbitrary addresses. For non-service_role callers, we
  // ignore `recipientEmail` from the request body and resolve the address
  // from a recently created DB row that the user must reference.
  const callerRole = decodeJwtRole(req.headers.get('Authorization'))
  const isTrustedCaller = callerRole === 'service_role'

  let effectiveRecipient: string | undefined = template.to || recipientEmail

  if (!isTrustedCaller) {
    if (!ANON_ALLOWED_TEMPLATES.has(templateName)) {
      console.warn('Anon caller attempted disallowed template', { templateName, callerRole })
      return new Response(
        JSON.stringify({ error: 'Template not allowed for this caller' }),
        { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const cutoffIso = new Date(Date.now() - ANON_ROW_MAX_AGE_MS).toISOString()

    if (templateName === 'contact-confirmation' || templateName === 'contact-notification') {
      const submissionId = templateData?.submissionId ?? templateData?.submission_id
      if (typeof submissionId !== 'string' || submissionId.length === 0) {
        return new Response(
          JSON.stringify({ error: 'templateData.submissionId is required' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
      }
      const { data: row, error: rowError } = await supabase
        .from('contact_submissions')
        .select('email, name, message, created_at')
        .eq('id', submissionId)
        .gte('created_at', cutoffIso)
        .maybeSingle()

      if (rowError || !row) {
        console.warn('Contact submission not found or too old', { submissionId, rowError })
        return new Response(
          JSON.stringify({ error: 'Submission not found' }),
          { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
      }

      // Force trusted values; ignore anything the client sent.
      if (templateName === 'contact-confirmation') {
        effectiveRecipient = row.email
        templateData = { name: row.name, message: row.message }
      } else {
        // contact-notification → site owner only.
        effectiveRecipient = ADMIN_NOTIFICATION_EMAIL
        templateData = {
          name: row.name,
          email: row.email,
          message: row.message,
          submittedAt: new Date(row.created_at as string).toISOString(),
        }
      }
    } else if (templateName === 'newsletter-welcome') {
      const subscriberId = templateData?.subscriberId ?? templateData?.subscriber_id
      if (typeof subscriberId !== 'string' || subscriberId.length === 0) {
        return new Response(
          JSON.stringify({ error: 'templateData.subscriberId is required' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
      }
      const { data: row, error: rowError } = await supabase
        .from('newsletter_subscribers')
        .select('email, created_at')
        .eq('id', subscriberId)
        .gte('created_at', cutoffIso)
        .maybeSingle()

      if (rowError || !row) {
        console.warn('Newsletter subscriber not found or too old', { subscriberId, rowError })
        return new Response(
          JSON.stringify({ error: 'Subscriber not found' }),
          { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )
      }
      effectiveRecipient = row.email
      templateData = {}
    }
  }

  if (!effectiveRecipient) {
    return new Response(
      JSON.stringify({
        error: 'recipientEmail is required (unless the template defines a fixed recipient)',
      }),
      {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }



  // 2. Check suppression list (fail-closed: if we can't verify, don't send)
  // Skip suppression check for admin notification templates (those with a
  // fixed `to` address baked into the template). These are internal alerts
  // to the site owner, not user-facing marketing — they should always send
  // even if the admin address previously appeared on the suppression list.
  const isAdminNotification = Boolean(template.to)

  if (!isAdminNotification) {
    const { data: suppressed, error: suppressionError } = await supabase
      .from('suppressed_emails')
      .select('id')
      .eq('email', effectiveRecipient.toLowerCase())
      .maybeSingle()

    if (suppressionError) {
      console.error('Suppression check failed — refusing to send', {
        error: suppressionError,
        effectiveRecipient,
      })
      return new Response(
        JSON.stringify({ error: 'Failed to verify suppression status' }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    }

    if (suppressed) {
      // Log the suppressed attempt
      await supabase.from('email_send_log').insert({
        message_id: messageId,
        template_name: templateName,
        recipient_email: effectiveRecipient,
        status: 'suppressed',
      })

      console.log('Email suppressed', { effectiveRecipient, templateName })
      return new Response(
        JSON.stringify({ success: false, reason: 'email_suppressed' }),
        {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    }
  }


  // 3. Get or create unsubscribe token (one token per email address).
   // Templates flagged `skipUnsubscribe` (admin alerts, unsubscribe-confirmation)
   // bypass this entirely — a working unsubscribe link isn't meaningful for
   // them, and the customer's token will already be marked used by the time
   // the confirmation email is queued, which would otherwise block the send.
  const normalizedEmail = effectiveRecipient.toLowerCase()
  let unsubscribeToken: string

  if (template.skipUnsubscribe) {
    // Throwaway token; not persisted. If clicked, it simply won't validate.
    unsubscribeToken = generateToken()
  } else {


  // Check for existing token for this email
  const { data: existingToken, error: tokenLookupError } = await supabase
    .from('email_unsubscribe_tokens')
    .select('token, used_at')
    .eq('email', normalizedEmail)
    .maybeSingle()

  if (tokenLookupError) {
    console.error('Token lookup failed', {
      error: tokenLookupError,
      email: normalizedEmail,
    })
    await supabase.from('email_send_log').insert({
      message_id: messageId,
      template_name: templateName,
      recipient_email: effectiveRecipient,
      status: 'failed',
      error_message: 'Failed to look up unsubscribe token',
    })
    return new Response(
      JSON.stringify({ error: 'Failed to prepare email' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }

  if (existingToken && !existingToken.used_at) {
    // Reuse existing unused token
    unsubscribeToken = existingToken.token
  } else if (!existingToken) {
    // Create new token — upsert handles concurrent inserts gracefully
    unsubscribeToken = generateToken()
    const { error: tokenError } = await supabase
      .from('email_unsubscribe_tokens')
      .upsert(
        { token: unsubscribeToken, email: normalizedEmail },
        { onConflict: 'email', ignoreDuplicates: true }
      )

    if (tokenError) {
      console.error('Failed to create unsubscribe token', {
        error: tokenError,
      })
      await supabase.from('email_send_log').insert({
        message_id: messageId,
        template_name: templateName,
        recipient_email: effectiveRecipient,
        status: 'failed',
        error_message: 'Failed to create unsubscribe token',
      })
      return new Response(
        JSON.stringify({ error: 'Failed to prepare email' }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    }

    // If another request raced us, our upsert was silently ignored.
    // Re-read to get the actual stored token.
    const { data: storedToken, error: reReadError } = await supabase
      .from('email_unsubscribe_tokens')
      .select('token')
      .eq('email', normalizedEmail)
      .maybeSingle()

    if (reReadError || !storedToken) {
      console.error('Failed to read back unsubscribe token after upsert', {
        error: reReadError,
        email: normalizedEmail,
      })
      await supabase.from('email_send_log').insert({
        message_id: messageId,
        template_name: templateName,
        recipient_email: effectiveRecipient,
        status: 'failed',
        error_message: 'Failed to confirm unsubscribe token storage',
      })
      return new Response(
        JSON.stringify({ error: 'Failed to prepare email' }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    }
    unsubscribeToken = storedToken.token
  } else {
    // Token exists but is already used — email should have been caught by suppression check above.
    // This is a safety fallback; log and skip sending.
    console.warn('Unsubscribe token already used but email not suppressed', {
      email: normalizedEmail,
    })
    await supabase.from('email_send_log').insert({
      message_id: messageId,
      template_name: templateName,
      recipient_email: effectiveRecipient,
      status: 'suppressed',
      error_message:
        'Unsubscribe token used but email missing from suppressed list',
    })
    return new Response(
      JSON.stringify({ success: false, reason: 'email_suppressed' }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }
  }


  // 4. Render React Email template to HTML and plain text
  const html = await renderAsync(
    React.createElement(template.component, templateData)
  )
  const plainText = await renderAsync(
    React.createElement(template.component, templateData),
    { plainText: true }
  )

  // Resolve subject — supports static string or dynamic function
  const resolvedSubject =
    typeof template.subject === 'function'
      ? template.subject(templateData)
      : template.subject

  // 5. Enqueue the pre-rendered email for async processing by the dispatcher.
  // The dispatcher (process-email-queue) handles sending, retries, and rate-limit backoff.

  // Log pending BEFORE enqueue so we have a record even if enqueue crashes
  await supabase.from('email_send_log').insert({
    message_id: messageId,
    template_name: templateName,
    recipient_email: effectiveRecipient,
    status: 'pending',
  })

  const { error: enqueueError } = await supabase.rpc('enqueue_email', {
    queue_name: 'transactional_emails',
    payload: {
      message_id: messageId,
      to: effectiveRecipient,
      from: `${SITE_NAME} <noreply@${FROM_DOMAIN}>`,
      sender_domain: SENDER_DOMAIN,
      subject: resolvedSubject,
      html,
      text: plainText,
      purpose: 'transactional',
      label: templateName,
      idempotency_key: idempotencyKey,
      unsubscribe_token: unsubscribeToken,
      queued_at: new Date().toISOString(),
    },
  })

  if (enqueueError) {
    console.error('Failed to enqueue email', {
      error: enqueueError,
      templateName,
      effectiveRecipient,
    })

    await supabase.from('email_send_log').insert({
      message_id: messageId,
      template_name: templateName,
      recipient_email: effectiveRecipient,
      status: 'failed',
      error_message: 'Failed to enqueue email',
    })

    return new Response(JSON.stringify({ error: 'Failed to enqueue email' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }

  console.log('Transactional email enqueued', { templateName, effectiveRecipient })

  return new Response(
    JSON.stringify({ success: true, queued: true }),
    {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    }
  )
})
