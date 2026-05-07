# Disconnect Shopify → Remix → Reconnect

You're currently in Plan mode (read-only), so I can't run the disconnect action from here. Approve this plan and I'll switch to Build mode and do step 1 immediately.

## Step 1 — I disconnect Shopify from this project
- I run the `shopify--disconnect_store` action.
- This only removes the Lovable ↔ Shopify API link.
- Your Shopify store, products, orders, themes, and the live site at `uniqueyogamats.com` are **not** affected.
- The preview here will temporarily stop loading live products/prices/cart — that's expected.

## Step 2 — You remix the project
Once I confirm Shopify is disconnected:
- Click the project name (top left) → Settings → **Remix this project**, **or**
- From the dashboard, three-dot menu (⋯) on the project card → **Remix**.

The remix becomes your independent design playground. Shopify stays disconnected there — just use it for visual/layout experiments.

## Step 3 — I reconnect Shopify on this (original) project
After you confirm the remix was created, tell me **"reconnect Shopify"** and I will:
- Trigger the Shopify connect flow (`shopify--connect_shopify_account`) — you'll do a quick auth in a popup.
- Verify products, pricing, and cart are loading again on this project.
- Your team and `uniqueyogamats.com` are back to normal — total downtime is just the few minutes between steps 1 and 3.

## Later — porting designs across
When something in the remix looks great, message me here with: *"In my remix, the [section] looks good — bring it across"* and I'll port the code into this project without touching the Shopify wiring.

---

Approve this plan and I'll start with Step 1 (disconnect).
