import * as React from 'npm:react@18.3.1'
import {
  Body, Button, Container, Head, Heading, Html, Preview, Section, Text,
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
        
        <Heading style={h1}>
          {name ? `Thank you, ${name}.` : 'Thank you for reaching out.'}
        </Heading>
        <Text style={text}>
          We've received your message and we'll get back to you as soon as we can.
          If it's urgent, just reply to this email and we'll prioritise it.
        </Text>
        {message ? (
          <Section style={quoteBox}>
            <Text style={quoteLabel}>Your message</Text>
            <Text style={quoteText}>{message}</Text>
          </Section>
        ) : null}
        <Text style={text}>
          In the meantime, feel free to have a look through the collection.
        </Text>
        <Section style={buttonWrap}>
          <Button href="https://cosmicigloo.com/#design-gallery" style={button}>
            EXPLORE THE COLLECTION
          </Button>
        </Section>
        <Text style={signoff}>Charly<br />{SITE_NAME}</Text>
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
  borderLeft: '2px solid #cccccc',
  padding: '12px 16px',
  margin: '24px 0',
  backgroundColor: '#f5f5f5',
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
const buttonWrap = { margin: '28px 0 8px' }
const button = {
  backgroundColor: '#1990C6',
  color: '#ffffff',
  fontSize: '13px',
  fontWeight: 600 as const,
  letterSpacing: '0.12em',
  textDecoration: 'none',
  padding: '14px 28px',
  borderRadius: '4px',
  display: 'inline-block',
}
const signoff = {
  fontSize: '14px',
  color: '#4a4a4a',
  lineHeight: 1.6,
  margin: '32px 0 0',
}
