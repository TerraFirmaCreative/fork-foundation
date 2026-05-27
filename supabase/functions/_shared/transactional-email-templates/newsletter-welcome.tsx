import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'Cosmic Igloo'

const NewsletterWelcomeEmail = () => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Welcome to the {SITE_NAME} circle</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={brand}>COSMIC IGLOO</Heading>
        <Heading style={h1}>Welcome to the circle.</Heading>
        <Text style={text}>
          Thank you for subscribing. You're now on the list for early access to
          new designs, community stories, and the occasional dispatch from the studio.
        </Text>
        <Text style={text}>
          We promise to be thoughtful with your inbox — no spam, ever, and you can
          unsubscribe at any time.
        </Text>
        <Text style={signoff}>With warmth,<br />The {SITE_NAME} team</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: NewsletterWelcomeEmail,
  subject: 'Welcome to Cosmic Igloo',
  displayName: 'Newsletter welcome',
  previewData: {},
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
const signoff = {
  fontSize: '14px',
  color: '#4a4a4a',
  lineHeight: 1.6,
  margin: '32px 0 0',
}
