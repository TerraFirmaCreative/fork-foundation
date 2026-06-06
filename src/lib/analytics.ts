declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackAddToCart(params: {
  itemId: string;
  itemName: string;
  price: number;
  currency: string;
  quantity: number;
}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "add_to_cart", {
    currency: params.currency,
    value: params.price * params.quantity,
    items: [
      {
        item_id: params.itemId,
        item_name: params.itemName,
        price: params.price,
        quantity: params.quantity,
      },
    ],
  });
}
