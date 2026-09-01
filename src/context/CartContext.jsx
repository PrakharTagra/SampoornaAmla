import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { products } from "../data/products";

// Phase 2/5: a cart line is identified by productId + variantId (Section 8
// of implementation.md). Quantity is independent of variant, so "500 g x 2"
// stays two 500 g lines rather than collapsing into a 1 kg line.
const CartContext = createContext(undefined);

const STORAGE_KEY = "pratapgarh-amla-cart";

// Placeholder shipping rule: no real client shipping policy was supplied,
// so a flat fee below a free-shipping threshold is used as a stand-in.
// Update these two constants (or replace with a real shipping calculation)
// once real rates are available — flagged again in this phase's Known Issues.
const FREE_SHIPPING_THRESHOLD = 499;
const SHIPPING_FEE = 49;

function readStoredItems() {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    // Corrupt or unavailable storage should never crash the app — fall
    // back to an empty cart rather than throwing during render.
    return [];
  }
}

function getVariantStock(productId, variantId) {
  const product = products.find((p) => p.id === productId);
  const variant = product?.variants.find((v) => v.id === variantId);
  return variant?.stock ?? 99;
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(readStoredItems);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Persist on every change. Reading happens once, lazily, in useState above
  // so a freshly mounted app doesn't briefly render an empty cart before
  // localStorage is read.
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Storage can fail (private browsing, quota) — the cart still works
      // in-memory for the session, it just won't persist across reloads.
    }
  }, [items]);

  const addItem = useCallback((product, variant, quantity) => {
    setItems((prev) => {
      const existing = prev.find(
        (line) => line.productId === product.id && line.variantId === variant.id
      );

      if (existing) {
        const maxQty = getVariantStock(product.id, variant.id);
        return prev.map((line) =>
          line.productId === product.id && line.variantId === variant.id
            ? { ...line, quantity: Math.min(maxQty, line.quantity + quantity) }
            : line
        );
      }

      return [
        ...prev,
        {
          productId: product.id,
          variantId: variant.id,
          productName: product.name,
          productSlug: product.slug,
          variantName: variant.name,
          price: variant.price,
          thumbnail: product.thumbnail,
          quantity,
        },
      ];
    });
    setIsDrawerOpen(true);
  }, []);

  const removeItem = useCallback((productId, variantId) => {
    setItems((prev) =>
      prev.filter((line) => !(line.productId === productId && line.variantId === variantId))
    );
  }, []);

  const updateQuantity = useCallback((productId, variantId, quantity) => {
    setItems((prev) => {
      if (quantity <= 0) {
        return prev.filter((line) => !(line.productId === productId && line.variantId === variantId));
      }
      const maxQty = getVariantStock(productId, variantId);
      return prev.map((line) =>
        line.productId === productId && line.variantId === variantId
          ? { ...line, quantity: Math.min(maxQty, Math.max(1, quantity)) }
          : line
      );
    });
  }, []);

  const clearCart = useCallback(() => setItems([]), []);
  const openDrawer = useCallback(() => setIsDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
  const total = subtotal + shipping;
  const amountToFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  const value = {
    items,
    itemCount,
    subtotal,
    shipping,
    total,
    freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
    amountToFreeShipping,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    isDrawerOpen,
    openDrawer,
    closeDrawer,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
