import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Hr, Html, Preview, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'Cosmic Igloo'

const UnsubscribeConfirmationEmail = () => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>You've been unsubscribed from {SITE_NAME}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={label}>Unsubscribe confirmed</Text>
        <Heading style={h1}>You've been unsubscribed</Heading>
        <Text style={text}>
          We've removed your email address from the {SITE_NAME} mailing list.
          You won't receive any further emails from us at this address.
        </Text>
        <Text style={text}>
          Changed your mind? You can resubscribe anytime from our website.
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          Thanks for being part of the {SITE_NAME} community — sorry to see you go.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: UnsubscribeConfirmationEmail,
  subject: `You've been unsubscribed from ${SITE_NAME}`,
  displayName: 'Unsubscribe confirmation (customer)',
  previewData: {},
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
  fontSize: '24px',
  fontWeight: 500 as const,
  color: '#1a1a1a',
  margin: '0 0 20px',
}
const text = {
  fontSize: '15px',
  color: '#4a4a4a',
  lineHeight: '1.6',
  margin: '0 0 16px',
}
const hr = { borderColor: '#eee', margin: '28px 0 20px' }
const footer = {
  fontSize: '13px',
  color: '#999',
  fontStyle: 'italic' as const,
  margin: 0,
}
