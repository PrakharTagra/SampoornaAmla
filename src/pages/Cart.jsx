import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import Container from "../components/primitives/Container";
import SectionHeading from "../components/primitives/SectionHeading";
import Breadcrumb from "../components/primitives/Breadcrumb";
import Button from "../components/primitives/Button";
import Divider from "../components/primitives/Divider";
import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { items, subtotal, shipping, total, amountToFreeShipping } = useCart();

  return (
    <>
      <Container className="pt-6 sm:pt-8">
        <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Cart" }]} />
      </Container>

      <section className="py-8 sm:py-12">
        <Container className="flex flex-col gap-8">
          <SectionHeading title="Your Cart" description={
            items.length > 0
              ? `${items.length} item${items.length === 1 ? "" : "s"} in your cart.`
              : undefined
          } />

          {items.length === 0 ? (
            <div className="flex flex-col items-center gap-4 py-20 text-center">
              <ShoppingBag className="text-amla/40" size={40} strokeWidth={1.5} />
              <p className="text-brown/60">Your cart is empty.</p>
              <Button as={Link} to="/products" variant="primary" size="md">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-10 items-start">
              <div className="lg:col-span-2 flex flex-col gap-6">
                {items.map((item, i) => (
                  <div key={`${item.productId}-${item.variantId}`}>
                    <CartItem item={item} />
                    {i < items.length - 1 ? <Divider className="mt-6" /> : null}
                  </div>
                ))}

                <Button
                  as={Link}
                  to="/products"
                  variant="ghost"
                  size="sm"
                  className="w-fit mt-2"
                >
                  Continue Shopping
                </Button>
              </div>

              <div className="lg:sticky lg:top-24 bg-ivory-200/60 rounded-md p-6">
                <CartSummary
                  subtotal={subtotal}
                  shipping={shipping}
                  total={total}
                  amountToFreeShipping={amountToFreeShipping}
                >
                  <Button as={Link} to="/checkout" variant="primary" size="lg" className="w-full mt-1">
                    Proceed to Checkout
                  </Button>
                </CartSummary>
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
