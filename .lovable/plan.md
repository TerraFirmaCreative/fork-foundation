## Goal
Fire the GA4 `add_to_cart` event whenever a user adds a product to the cart, using dynamic product data.

## Where to add it
Two add-to-cart entry points exist:
- `src/pages/ProductDetail.tsx` → `handleAddToCart` (line ~58)
- `src/pages/BlogPost-Hudson.tsx` → `handleAddToCart` (line ~62)

Both already have access to the selected variant, product title, price, currency, and quantity. We'll fire the event in each handler immediately after a successful `addItem(...)` call (once per click).

## Implementation

1. Add a tiny helper `src/lib/analytics.ts`:
   ```ts
   export function trackAddToCart(params: {
     itemId: string;
     itemName: string;
     price: number;
     currency: string;
     quantity: number;
   }) {
     const w = window as any;
     if (typeof w.gtag !== 'function') return;
     w.gtag('event', 'add_to_cart', {
       currency: params.currency,
       value: params.price * params.quantity,
       items: [{
         item_id: params.itemId,
         item_name: params.itemName,
         price: params.price,
         quantity: params.quantity,
       }],
     });
   }
   ```

2. In `ProductDetail.tsx` `handleAddToCart`: after the `await addItem(...)` succeeds, call `trackAddToCart` using:
   - `itemId`: selected variant id (Shopify variant GID — acts as SKU/ID)
   - `itemName`: product title
   - `price`: `parseFloat(selectedVariant.price.amount)`
   - `currency`: `selectedVariant.price.currencyCode`
   - `quantity`: current quantity state

3. Same change in `BlogPost-Hudson.tsx` `handleAddToCart`.

## Notes
- Uses the existing global `gtag` (GA4 already installed via index.html). No new scripts, no SDK, no other tracking touched.
- Guarded so it silently no-ops if `gtag` isn't loaded (e.g., ad blockers).
- Fires exactly once per click, after the cart add resolves.
