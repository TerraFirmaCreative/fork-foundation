declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackAddToCart(params: {
  itemId: string;
  itemName: string;
  itemVariant?: string;
  price: number;
  currency: string;
  quantity: number;
}) {
  try {
    if (typeof window === "undefined" || typeof window.gtag !== "function") return;
    const item: Record<string, unknown> = {
      item_id: params.itemId,
      item_name: params.itemName,
      price: params.price,
      quantity: params.quantity,
    };
    if (params.itemVariant) item.item_variant = params.itemVariant;
    window.gtag("event", "add_to_cart", {
      currency: params.currency,
      value: Number((params.price * params.quantity).toFixed(2)),
      items: [item],
    });
  } catch {
    // fail silently — never break the add-to-cart flow
  }
}
