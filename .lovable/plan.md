# Why the Shopify changes aren't showing

## What I found (checked live against your store)

The "Home" collection now contains **30 products**, but the homepage gallery is hardcoded to request only the **first 24** and the heading text is hardcoded to say "24 unique designs". So the last products in your collection — including recent additions — are simply never fetched.

Live order returned by Shopify for the Home collection (positions 22-24): Breath of Freedom, Prana Fest, Cosmic Igloo. "Fractal Reverie" (formerly Mandelbrot Dreams) sits at position 16 in the live data, even though your admin screenshot shows it at 23 with the old name — that admin list is showing a stale/differently-sorted view, not what the storefront serves.

So there is no caching bug and nothing failed to save: the site is faithfully showing the first 24 of 30, in the store's own order.

## Proposed fix

1. Fetch the whole collection instead of a fixed 24 (request up to 50 and render everything returned).
2. Make the heading count dynamic — it reads the actual number of products instead of the hardcoded "24", so it stays correct whenever you add or remove mats in Shopify.
3. Keep the existing lazy-mount behaviour (first row eager, the rest deferred) so performance doesn't regress with more tiles.
4. Match the loading skeleton count to the real product count so the layout doesn't jump.

## Technical detail

- `src/components/DesignGallery.tsx`: change `fetchCollectionProducts("featured-home", 24, country)` to a higher limit, replace the literal `24` in the `<h2>` with `products.length`, and use a stable skeleton count while loading.
- No Shopify-side changes needed; the Storefront query already returns the products correctly.

If the position of "Fractal Reverie" in the grid still looks wrong to you after this, that's a collection sort-order question in Shopify (the collection's manual order is what the site follows) and I can look at that separately.
