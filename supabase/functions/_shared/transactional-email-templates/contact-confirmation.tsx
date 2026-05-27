import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Section, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'Cosmic Igloo'

interface ContactConfirmationProps {
  name?: string
  message?: string
}

const ContactConfirmationEmail = ({ name, message }: ContactConfirmationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Thanks for reaching out to {SITE_NAME}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={brand}>COSMIC IGLOO</Heading>
        <Heading style={h1}>
          {name ? `Thank you, ${name}.` : 'Thank you for reaching out.'}
        </Heading>
        <Text style={text}>
          We've received your message and will get back to you within 1–2 business days.
          If your question is urgent, just reply to this email and we'll prioritise it.
        </Text>
        {message ? (
          <Section style={quoteBox}>
            <Text style={quoteLabel}>Your message</Text>
            <Text style={quoteText}>{message}</Text>
          </Section>
        ) : null}
        <Text style={text}>
          In the meantime, feel free to explore our latest designs and stories.
        </Text>
        <Text style={signoff}>With warmth,<br />The {SITE_NAME} team</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactConfirmationEmail,
  subject: 'We received your message — Cosmic Igloo',
  displayName: 'Contact form confirmation',
  previewData: {
    name: 'Jane',
    message: 'Hi! I love the new collection. Do you ship to Canada?',
  },
} satisfies TemplateEntry

const main = {
  backgroundColor: '#ffffff',
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  margin: 0,
  padding: 0,
}
const container = { maxWidth: '560px', margin: '0 auto', padding: '40px 28px' }
const brand = {
  fontSize: '12px',
  letterSpacing: '0.32em',
  fontWeight: 500 as const,
  color: '#6b5b8a',
  margin: '0 0 32px',
  textAlign: 'center' as const,
}
const h1 = {
  fontSize: '24px',
  fontWeight: 500 as const,
  color: '#1a1a1a',
  margin: '0 0 20px',
  lineHeight: 1.3,
}
const text = {
  fontSize: '15px',
  color: '#4a4a4a',
  lineHeight: 1.6,
  margin: '0 0 18px',
}
const quoteBox = {
  borderLeft: '2px solid #c9a84c',
  padding: '12px 16px',
  margin: '24px 0',
  backgroundColor: '#faf8f3',
}
const quoteLabel = {
  fontSize: '11px',
  letterSpacing: '0.2em',
  textTransform: 'uppercase' as const,
  color: '#999',
  margin: '0 0 6px',
}
const quoteText = {
  fontSize: '14px',
  color: '#333',
  lineHeight: 1.5,
  margin: 0,
  whiteSpace: 'pre-wrap' as const,
}
const signoff = {
  fontSize: '14px',
  color: '#4a4a4a',
  lineHeight: 1.6,
  margin: '32px 0 0',
}
