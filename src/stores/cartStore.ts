import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import {
  CartItem,
  storefrontApiRequest,
  CART_QUERY,
  createShopifyCart,
  addLineToShopifyCart,
  updateShopifyCartLine,
  removeLineFromShopifyCart,
  updateCartBuyerIdentity,
} from '@/lib/shopify';

export type { CartItem } from '@/lib/shopify';

interface CartStore {
  items: CartItem[];
  totalPrice: { amount: string; currencyCode: string };
  cartId: string | null;
  checkoutUrl: string | null;
  isLoading: boolean;
  isSyncing: boolean;
  isDrawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
  addItem: (item: Omit<CartItem, 'lineId'>, country?: string) => Promise<void>;
  updateQuantity: (variantId: string, quantity: number) => Promise<void>;
  removeItem: (variantId: string) => Promise<void>;
  clearCart: () => void;
  syncCart: () => Promise<void>;
  getCheckoutUrl: () => string | null;
  updateLocale: (country: string) => Promise<void>;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      cartId: null,
      checkoutUrl: null,
      isLoading: false,
      totalPrice: { amount: "0.00", currencyCode: "USD" },
      isSyncing: false,
      isDrawerOpen: false,
      setDrawerOpen: (open) => set({ isDrawerOpen: open }),

      updateLocale: async (country: string) => {
        const { cartId } = get();

        set({ isLoading: true });
        try {
          const result = await updateCartBuyerIdentity(cartId, country);

          if (result.success && result.cost) {
            set({
              totalPrice: {
                amount: result.cost?.totalAmount.amount,
                currencyCode: result.cost?.totalAmount.currencyCode
              }
            });
          }

          return;
        }
        catch (e) {
          console.error("Failed to update cart buyer identity.");
          return;
        }
        finally {
          set({ isLoading: false });
        }
      },

      addItem: async (item, country) => {
        const { items, cartId, clearCart } = get();
        const existingItem = items.find(i => i.variantId === item.variantId);

        set({ isLoading: true });
        try {
          if (!cartId) {
            const result = await createShopifyCart({ ...item, lineId: null }, country);
            if (result) {
              set({
                cartId: result.cartId,
                checkoutUrl: result.checkoutUrl,
                totalPrice: {
                  amount: result.cost.totalAmount.amount,
                  currencyCode: result.cost.totalAmount.currencyCode
                },
                items: [{ ...item, lineId: result.lineId }],
              });
            }
          } else if (existingItem) {
            const newQuantity = existingItem.quantity + item.quantity;
            if (!existingItem.lineId) return;
            const result = await updateShopifyCartLine(cartId, existingItem.lineId, newQuantity);
            if (result.success) {
              set({
                items: get().items.map(i => i.variantId === item.variantId ? { ...i, quantity: newQuantity } : i),
                ...(result.cost && {
                  totalPrice: {
                    amount: result.cost?.totalAmount.amount,
                    currencyCode: result.cost?.totalAmount.currencyCode
                  }
                })
              });
            } else if (result.cartNotFound) {
              clearCart();
            }
          } else {
            const result = await addLineToShopifyCart(cartId, { ...item, lineId: null });
            if (result.success) {
              set({
                items: [...get().items, { ...item, lineId: result.lineId ?? null }],
                ...(result.cost && {
                  totalPrice: {
                    amount: result.cost?.totalAmount.amount,
                    currencyCode: result.cost?.totalAmount.currencyCode
                  }
                })
              });
            } else if (result.cartNotFound) {
              clearCart();
            }
          }
        } catch (error) {
          console.error('Failed to add item:', error);
        } finally {
          set({ isLoading: false });
        }
      },

      updateQuantity: async (variantId, quantity) => {
        if (quantity <= 0) {
          await get().removeItem(variantId);
          return;
        }

        const { items, cartId, clearCart } = get();
        const item = items.find(i => i.variantId === variantId);
        if (!item?.lineId || !cartId) return;

        set({ isLoading: true });
        try {
          const result = await updateShopifyCartLine(cartId, item.lineId, quantity);
          if (result.success) {
            set({
              items: get().items.map(i => i.variantId === variantId ? { ...i, quantity } : i),
              ...(result.cost && {
                totalPrice: {
                  amount: result.cost?.totalAmount.amount,
                  currencyCode: result.cost?.totalAmount.currencyCode
                }
              })
            });
          } else if (result.cartNotFound) {
            clearCart();
          }
        } catch (error) {
          console.error('Failed to update quantity:', error);
        } finally {
          set({ isLoading: false });
        }
      },

      removeItem: async (variantId) => {
        const { items, cartId, clearCart } = get();
        const item = items.find(i => i.variantId === variantId);
        if (!item?.lineId || !cartId) return;

        set({ isLoading: true });
        try {
          const result = await removeLineFromShopifyCart(cartId, item.lineId);
          if (result.success) {
            const newItems = get().items.filter(i => i.variantId !== variantId);
            newItems.length === 0 ? clearCart() : set({
              items: newItems,
              ...(result.cost && {
                totalPrice: {
                  amount: result.cost?.totalAmount.amount,
                  currencyCode: result.cost?.totalAmount.currencyCode
                }
              })
            });
          } else if (result.cartNotFound) {
            clearCart();
          }
        } catch (error) {
          console.error('Failed to remove item:', error);
        } finally {
          set({ isLoading: false });
        }
      },

      clearCart: () => set({ items: [], cartId: null, checkoutUrl: null, totalPrice: { amount: "0.00", currencyCode: "USD" } }),
      getCheckoutUrl: () => get().checkoutUrl,

      syncCart: async () => {
        const { cartId, isSyncing, clearCart } = get();
        if (!cartId || isSyncing) return;

        set({ isSyncing: true });
        try {
          const data = await storefrontApiRequest(CART_QUERY, { id: cartId });
          if (!data) return;
          const cart = data?.data?.cart;
          if (!cart || cart.totalQuantity === 0) clearCart();
        } catch (error) {
          console.error('Failed to sync cart:', error);
        } finally {
          set({ isSyncing: false });
        }
      },
    }),
    {
      name: 'shopify-cart',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ items: state.items, cartId: state.cartId, checkoutUrl: state.checkoutUrl, totalPrice: state.totalPrice }),
    }
  )
);
