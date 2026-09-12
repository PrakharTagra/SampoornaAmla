import { ShoppingBag, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Modal from "../primitives/Modal";
import Button from "../primitives/Button";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import { useCart } from "../../hooks/useCart";

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

  const freeShippingTarget = 499;
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingTarget) * 100));

  return (
    <Modal open={isDrawerOpen} onClose={closeDrawer} labelledBy="cart-drawer-title" variant="drawer">
      <div className="flex flex-col h-full bg-ivory">
        <div className="pl-6 pr-14 pt-6 pb-4 border-b border-brown/10">
          <div className="flex items-center gap-2">
            <h2 id="cart-drawer-title" className="font-serif text-2xl text-brown font-semibold">
              Your Bag
            </h2>
            {items.length > 0 ? (
              <span className="text-xs bg-forest text-ivory px-2 py-0.5 rounded-full font-medium">
                {items.reduce((s, i) => s + i.quantity, 0)}
              </span>
            ) : null}
          </div>

          {/* Free Shipping Progress bar */}
          {items.length > 0 ? (
            <div className="mt-3.5 pt-2">
              <div className="flex items-center justify-between text-xs text-brown/70 mb-1.5 font-medium">
                {amountToFreeShipping > 0 ? (
                  <span>Add <strong className="text-forest">₹{amountToFreeShipping}</strong> for Free Delivery</span>
                ) : (
                  <span className="text-forest flex items-center gap-1 font-semibold">
                    <Sparkles size={13} /> You unlocked Free Pan-India Delivery!
                  </span>
                )}
                <span>{progressPercent}%</span>
              </div>
              <div className="w-full h-1.5 bg-brown/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-forest rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          ) : null}
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6 text-center animate-fade-in">
            <div className="p-4 rounded-full bg-forest/5 text-forest animate-pulse-subtle">
              <ShoppingBag size={42} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col gap-1 max-w-xs">
              <h3 className="font-serif text-lg font-medium text-brown">Your bag is empty</h3>
              <p className="text-xs text-brown/60 leading-relaxed">
                Discover the pure taste and health benefits of Pratapgarh Amla products.
              </p>
            </div>
            <Button variant="primary" size="md" onClick={() => goTo("/products")}>
              Explore Collection
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-5 flex flex-col gap-4 divide-y divide-brown/10">
              {items.map((item) => (
                <div key={`${item.productId}-${item.variantId}`} className="pt-4 first:pt-0 animate-fade-in">
                  <CartItem item={item} dense />
                </div>
              ))}
            </div>

            <div className="px-6 py-5 border-t border-brown/10 bg-ivory-50">
              <CartSummary
                subtotal={subtotal}
                shipping={shipping}
                total={total}
                amountToFreeShipping={amountToFreeShipping}
              >
                <div className="flex flex-col gap-2.5 pt-2">
                  <Button variant="primary" size="lg" className="w-full shadow-sm" onClick={() => goTo("/checkout")}>
                    Proceed to Checkout
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full" onClick={() => goTo("/cart")}>
                    View Detailed Cart
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
