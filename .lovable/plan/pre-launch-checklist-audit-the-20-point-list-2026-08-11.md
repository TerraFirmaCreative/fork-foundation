# Pre-launch checklist audit (the 20-point list)

## Already done (13)

- CTA above the fold — "Find your mat" in the hero
- Internal links — header, footer, product links throughout
- Thank you page — subscribe/thank-you exists
- Breadcrumbs — BreadcrumbList structured data on product pages
- 5 FAQs — dedicated FAQs page with FAQPage schema
- Robots.txt — present, with sitemap reference
- Unique page titles — per-route and per-product
- Meta descriptions — per-route and per-product
- Social share image — og:image sitewide plus per-product images
- Real reviews — four named customer reviews on the homepage
- Alt text on images — present across gallery, hero and product images
- Privacy policy page — plus Terms, Refunds, Shipping and a Trust page
- Google Analytics — GA4 installed and add_to_cart tracking live

## Missing or weak (7)

1. Custom 404 page — exists but is the generic grey default, off-brand, no navigation back into the shop
2. Sticky mobile CTA — no persistent "Add to cart" bar on mobile product pages
3. Response time promise — Contact page has hours but no stated reply window
4. Team photo — About page has no real photo of the people behind the brand
5. Local schema — only Organization schema; no address, phone or contact point
6. Maps + directions — not applicable in the usual sense (no retail storefront); best handled as a clear "where we are / where we ship from" statement
7. Case studies — no in-depth story pages; the Hudson blog post is the closest thing

## What to do, easiest to hardest

1. Response time promise — add "We reply within 1 business day" to the Contact page and contact form confirmation
2. Local schema — extend the Organization JSON-LD with address, email, and a contactPoint block
3. Where we ship from — a short origin/shipping-location line on Contact and About instead of an irrelevant map
4. Custom 404 — rebuild in Cosmic Igloo styling: cosmic background, gold heading, links to the mat gallery, About and Contact
5. Sticky mobile CTA — persistent bottom bar on product pages showing price and Add to cart, appearing once the main button scrolls out of view
6. Team photo — needs a real photo from you; then placed in an About page founder section (a generated image would undercut the trust point)
7. Case studies — one or two "yogi story" pages in the style of the Hudson post, each with photos and a link to the mat used

## Technical notes

- 404 restyle: `src/pages/NotFound.tsx`, reusing existing background and gradient text tokens.
- Sticky CTA: local scroll-position state in `src/pages/ProductDetail.tsx`, hidden at `md` and above, respecting safe-area insets.
- Local schema: extend the JSON-LD block in `index.html` and/or `src/components/SEO.tsx`.
- Case studies: new routes alongside `blog/hudson-in-margaret-river`, added to the sitemap generator.

Items 6 and 7 need content from you (photo, story, permission); the rest I can build straight away.
