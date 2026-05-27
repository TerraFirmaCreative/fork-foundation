import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Hr, Html, Preview, Section, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface ContactNotificationProps {
  name?: string
  email?: string
  message?: string
  submittedAt?: string
}

const ContactNotificationEmail = ({ name, email, message, submittedAt }: ContactNotificationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>{name ? `New message from ${name}` : 'New contact form submission'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={label}>New contact form submission</Text>
        <Heading style={h1}>{name || 'Anonymous'}</Heading>
        <Section style={metaRow}>
          <Text style={metaLabel}>From</Text>
          <Text style={metaValue}>{email || 'unknown'}</Text>
        </Section>
        {submittedAt ? (
          <Section style={metaRow}>
            <Text style={metaLabel}>Submitted</Text>
            <Text style={metaValue}>{submittedAt}</Text>
          </Section>
        ) : null}
        <Hr style={hr} />
        <Text style={messageLabel}>Message</Text>
        <Section style={messageBox}>
          <Text style={messageText}>{message || '(no message)'}</Text>
        </Section>
        <Hr style={hr} />
        <Text style={replyHint}>
          Reply directly to this email to respond to {name || 'the sender'} — replies will go to {email || 'their address'}.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactNotificationEmail,
  subject: (data) => `New contact form: ${data?.name || 'submission'}`,
  displayName: 'Contact form notification (admin)',
  to: 'hello@cosmicigloo.com',
  previewData: {
    name: 'Jane Doe',
    email: 'jane@example.com',
    message: 'Hi! Do you ship to Canada?',
    submittedAt: '27 May 2026, 14:23 UTC',
  },
} satisfies TemplateEntry

const main = {
  backgroundColor: '#ffffff',
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  margin: 0,
  padding: 0,
}
const container = { maxWidth: '560px', margin: '0 auto', padding: '40px 28px' }
const label = {
  fontSize: '11px',
  letterSpacing: '0.28em',
  textTransform: 'uppercase' as const,
  color: '#6b5b8a',
  margin: '0 0 8px',
  fontWeight: 500 as const,
}
const h1 = {
  fontSize: '22px',
  fontWeight: 500 as const,
  color: '#1a1a1a',
  margin: '0 0 24px',
}
const metaRow = { margin: '0 0 8px' }
const metaLabel = {
  fontSize: '11px',
  letterSpacing: '0.18em',
  textTransform: 'uppercase' as const,
  color: '#999',
  margin: '0 0 2px',
}
const metaValue = {
  fontSize: '14px',
  color: '#1a1a1a',
  margin: 0,
}
const hr = { borderColor: '#eee', margin: '24px 0' }
const messageLabel = {
  fontSize: '11px',
  letterSpacing: '0.18em',
  textTransform: 'uppercase' as const,
  color: '#999',
  margin: '0 0 8px',
}
const messageBox = {
  borderLeft: '2px solid #c9a84c',
  padding: '12px 16px',
  backgroundColor: '#faf8f3',
  margin: '0 0 24px',
}
const messageText = {
  fontSize: '14px',
  color: '#333',
  lineHeight: 1.6,
  margin: 0,
  whiteSpace: 'pre-wrap' as const,
}
const replyHint = {
  fontSize: '12px',
  color: '#999',
  fontStyle: 'italic' as const,
  margin: 0,
}
