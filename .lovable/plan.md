# Apply Policies to Site Pages

Map each section of `cosmicigloo_store_policies (4).md` to its existing page and replace the body content. Keep all current styling (SEO meta, Header/Footer, `font-display` headings, `font-body` text, shaman-colored bullets, `shaman-bg` background).

## Mapping

| Doc section | Target file | Action |
|---|---|---|
| 1. Refund & Returns | `src/pages/RefundPolicy.tsx` | Replace body with full policy incl. warranty, care, sale items, BNPL, ACL |
| 2. Terms & Conditions | `src/pages/TermsAndConditions.tsx` | Replace body with 20-section terms, last updated Feb 2026 |
| 4. Shipping | `src/pages/Shipping.tsx` | Replace body: production, delivery windows, international taxes, lost parcels |
| 5. Contact Information | `src/pages/Contact.tsx` | Add an info block with email, phone, address (only if not already shown) |

## Privacy Policy — needs your call

The doc's section 3 is a **shorter** Privacy Policy. We just replaced `PrivacyPolicy.tsx` with the longer Shopify-auto version (dated June 4, 2026) at your request a few turns ago.

**Pick one:**
- **A.** Keep the current Shopify-auto privacy policy. Skip section 3 of the doc.
- **B.** Replace it with the shorter version from the doc (loses the detailed Shopify/CCPA/EEA language).
- **C.** Keep current, but merge in the doc's Marketing/SMS (Klaviyo) and Targeted Advertising (Meta Pixel, Google Ads) paragraphs since those aren't in the Shopify auto-version.

## Placeholders to fill

The Contact Information section has two placeholders:
- **Phone:** `[add your phone number]` — do you want one listed, or omit the phone line?
- **Address:** I'll use **Level 2/179 St Georges Terrace, Perth WA 6000** (per your earlier instruction).

## Scope
- Only the 4-5 page files above are edited. No routing, header, footer, or component changes.
- Last-updated dates use whatever the doc states (Feb 2026) unless you want them bumped to today.

Approve and let me know:
1. Privacy policy choice (A / B / C)
2. Phone number (or "omit")
3. Bump last-updated dates to **June 4, 2026** on all pages? (Y/N)