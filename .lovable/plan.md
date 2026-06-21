## Goal

Make Cosmic Igloo show up better in AI search (ChatGPT, Perplexity, Claude, Google AI Overviews) by publishing a proper `llms.txt` index and a comprehensive `llms-full.txt` knowledge document, both served from the site root.

## What gets created

Two files in `public/` (served at `/llms.txt` and `/llms-full.txt`):

### 1. `public/llms.txt` (rewrite existing)

Short, curated markdown index following the [llms.txt](https://llmstxt.org) spec. Adds:
- A tightened one-paragraph site summary (premium made-to-order yoga mats, sacred-geometry art, US-printed).
- Primary navigation pages (Home, About, How it works, FAQs, Shipping, Refund/Returns, Contact, Blog).
- A new **Products** section linking each of the 47 mat product pages with a one-line description (name + style/theme).
- Pointer to `/llms-full.txt` for full content.
- Pointer to `/sitemap.xml`.

### 2. `public/llms-full.txt` (new)

Long-form single markdown doc containing the full text of every important page so an LLM can answer without crawling:
- Brand summary + value props
- About / Our Story
- How it works (order → print → ship)
- Materials & care
- FAQs (full Q&A)
- Shipping & delivery details
- Refund & returns policy
- Contact info
- Blog post(s)
- Product catalog: each mat with name, URL, and short description

## How content is sourced

Fresh scrape of the live site (cosmicigloo.com) using a Playwright script:

1. Read `public/sitemap.xml` to get the full URL list (static pages + all 47 product pages + blog posts).
2. Visit each URL, extract `<title>`, `<meta name="description">`, and main visible text.
3. For product pages, also pull the product name and short description from the product detail template.
4. Format everything into the two markdown files.

The scrape runs once at plan-execution time; the resulting files are static and committed to `public/`. No runtime scraping, no Firecrawl/connector needed.

## Discoverability

- Add a `<link rel="alternate" type="text/markdown" href="/llms.txt" title="llms.txt">` to `index.html` `<head>` so AI crawlers that look for it find it explicitly. (Optional but cheap.)
- `public/robots.txt`: ensure `/llms.txt` and `/llms-full.txt` are not disallowed (they shouldn't be — current robots allows them, will verify).
- No change to `sitemap.xml` (llms files are conventionally excluded from sitemaps).

## Out of scope

- No new pages, routes, or UI.
- No backend/edge functions.
- No changes to SEO `<meta>` tags on existing pages (separate concern; can do after if you want).
- No automated regeneration pipeline — if products change significantly, re-run the same scrape.

## Files touched

- `public/llms.txt` — rewritten
- `public/llms-full.txt` — new
- `index.html` — one `<link rel="alternate">` tag added to `<head>`
- `public/robots.txt` — verified only, edited only if it currently blocks the files
