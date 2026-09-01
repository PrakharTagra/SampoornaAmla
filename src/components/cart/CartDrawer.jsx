import { ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Modal from "../primitives/Modal";
import Button from "../primitives/Button";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import { useCart } from "../../context/CartContext";

export default function CartDrawer() {
  const {
    items,
    subtotal,
    shipping,
    total,
    amountToFreeShipping,
    isDrawerOpen,
    closeDrawer,
  } = useCart();
  const navigate = useNavigate();

  const goTo = (path) => {
    closeDrawer();
    navigate(path);
  };

  return (
    <Modal open={isDrawerOpen} onClose={closeDrawer} labelledBy="cart-drawer-title" variant="drawer">
      <div className="flex flex-col h-full">
        <div className="pl-6 pr-14 pt-6 pb-4 border-b border-brown/10">
          <h2 id="cart-drawer-title" className="font-serif text-xl text-brown">
            Your Cart {items.length > 0 ? `(${items.length})` : ""}
          </h2>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6 text-center">
            <ShoppingBag className="text-amla/40" size={36} strokeWidth={1.5} />
            <p className="text-sm text-brown/60">Your cart is empty.</p>
            <Button variant="secondary" size="sm" onClick={() => goTo("/products")}>
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-5 flex flex-col gap-5">
              {items.map((item) => (
                <CartItem key={`${item.productId}-${item.variantId}`} item={item} dense />
              ))}
            </div>

            <div className="px-6 py-5 border-t border-brown/10">
              <CartSummary
                subtotal={subtotal}
                shipping={shipping}
                total={total}
                amountToFreeShipping={amountToFreeShipping}
              >
                <div className="flex flex-col gap-2 pt-1">
                  <Button variant="primary" size="md" onClick={() => goTo("/checkout")}>
                    Proceed to Checkout
                  </Button>
                  <Button variant="secondary" size="md" onClick={() => goTo("/cart")}>
                    View Cart
                  </Button>
                </div>
              </CartSummary>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
}
