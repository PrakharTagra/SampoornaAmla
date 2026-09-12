import { Link } from "react-router-dom";
import { ShoppingBag, ShieldCheck, Truck, Sparkles, ArrowRight } from "lucide-react";
import Container from "../components/primitives/Container";
import SectionHeading from "../components/primitives/SectionHeading";
import Breadcrumb from "../components/primitives/Breadcrumb";
import Button from "../components/primitives/Button";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import PageTransition from "../animations/PageTransition";
import FadeIn from "../animations/FadeIn";
import { useCart } from "../hooks/useCart";

export default function Cart() {
  const { items, subtotal, shipping, total, amountToFreeShipping } = useCart();
  const freeShippingThreshold = 499;
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  return (
    <PageTransition>
      <Container className="pt-6 sm:pt-8">
        <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Shopping Bag" }]} />
      </Container>

      <section className="py-8 sm:py-12">
        <Container className="flex flex-col gap-8">
          <FadeIn direction="up">
            <SectionHeading
              eyebrow="Review Items"
              title="Your Shopping Bag"
              description={
                items.length > 0
                  ? `You have ${items.length} unique item${items.length === 1 ? "" : "s"} ready for dispatch.`
                  : undefined
              }
            />
          </FadeIn>

          {items.length === 0 ? (
            <div className="flex flex-col items-center gap-5 py-24 text-center animate-fade-in bg-ivory-50/50 rounded-xl border border-brown/10 max-w-lg mx-auto w-full">
              <div className="p-4 rounded-full bg-forest/5 text-forest animate-pulse-subtle">
                <ShoppingBag size={48} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-1.5">
                <h3 className="font-serif text-2xl font-semibold text-brown">Your bag is currently empty</h3>
                <p className="text-sm text-brown/65 max-w-xs">
                  Discover our farm-direct collection of fresh Amla fruit, powder, and healthy snacks.
                </p>
              </div>
              <Button as={Link} to="/products" variant="primary" size="lg" className="mt-2 gap-2">
                Explore The Collection <ArrowRight size={16} />
              </Button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-10 items-start">
              <div className="lg:col-span-2 flex flex-col gap-6">
                {/* Free shipping banner */}
                <div className="p-4 rounded-lg bg-ivory-100 border border-brown/10 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-xs font-semibold text-brown/80">
                    {amountToFreeShipping > 0 ? (
                      <span>Add <strong className="text-forest">₹{amountToFreeShipping}</strong> more to unlock Free Delivery</span>
                    ) : (
                      <span className="text-forest flex items-center gap-1.5 font-bold">
                        <Sparkles size={14} /> Congratulations! You have unlocked Free Pan-India Delivery
                      </span>
                    )}
                    <span>{progressPercent}%</span>
                  </div>
                  <div className="w-full h-2 bg-brown/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-forest rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>

                {/* Items */}
                <div className="flex flex-col divide-y divide-brown/10 border border-brown/10 rounded-xl p-6 bg-ivory-50/50">
                  {items.map((item) => (
                    <div key={`${item.productId}-${item.variantId}`} className="py-4 first:pt-0 last:pb-0 animate-fade-in">
                      <CartItem item={item} />
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <Button
                    as={Link}
                    to="/products"
                    variant="ghost"
                    size="sm"
                    className="gap-2"
                  >
                    ← Continue Shopping
                  </Button>
                </div>
              </div>

              <div className="lg:sticky lg:top-28 bg-ivory-50 rounded-xl border border-brown/10 p-6 shadow-card">
                <CartSummary
                  subtotal={subtotal}
                  shipping={shipping}
                  total={total}
                  amountToFreeShipping={amountToFreeShipping}
                >
                  <Button as={Link} to="/checkout" variant="primary" size="lg" className="w-full mt-2 shadow-sm font-semibold">
                    Proceed to Checkout
                  </Button>

                  <div className="flex flex-col gap-2 pt-4 mt-2 border-t border-brown/10 text-xs text-brown/65">
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={16} className="text-forest shrink-0" />
                      <span>100% Secure Checkout with Razorpay / UPI</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck size={16} className="text-forest shrink-0" />
                      <span>Dispatched direct from Pratapgarh</span>
                    </div>
                  </div>
                </CartSummary>
              </div>
            </div>
          )}
        </Container>
      </section>
    </PageTransition>
  );
}
