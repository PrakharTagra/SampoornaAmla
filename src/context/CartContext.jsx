import { useCallback, useEffect, useState } from "react";
import { products } from "../data/sitedata";
import { CartContext } from "./cart-context";

const STORAGE_KEY = "pratapgarh-amla-cart";

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

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
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
