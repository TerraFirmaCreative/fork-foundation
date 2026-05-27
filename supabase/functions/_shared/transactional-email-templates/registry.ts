/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'

export interface TemplateEntry {
  component: React.ComponentType<any>
  subject: string | ((data: Record<string, any>) => string)
  to?: string
  displayName?: string
  previewData?: Record<string, any>
  /** Skip unsubscribe-token lookup/creation. Use for admin alerts and
   *  unsubscribe-confirmation emails where a working unsubscribe link
   *  is not meaningful and may collide with already-used tokens. */
  skipUnsubscribe?: boolean
}


import { template as contactConfirmation } from './contact-confirmation.tsx'
import { template as contactNotification } from './contact-notification.tsx'
import { template as newsletterWelcome } from './newsletter-welcome.tsx'
import { template as unsubscribeNotification } from './unsubscribe-notification.tsx'
import { template as unsubscribeConfirmation } from './unsubscribe-confirmation.tsx'

export const TEMPLATES: Record<string, TemplateEntry> = {
  'contact-confirmation': contactConfirmation,
  'contact-notification': contactNotification,
  'newsletter-welcome': newsletterWelcome,
  'unsubscribe-notification': unsubscribeNotification,
  'unsubscribe-confirmation': unsubscribeConfirmation,
}

