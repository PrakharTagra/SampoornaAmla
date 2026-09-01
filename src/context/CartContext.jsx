import { createContext, useContext, useState } from "react";

// Phase 0 shell: exposes item count for the header.
// Full cart logic (add/remove/update, persistence) is implemented in Phase 5.
const CartContext = createContext(undefined);

export function CartProvider({ children }) {
  const [items] = useState([]);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const value = { items, itemCount };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
