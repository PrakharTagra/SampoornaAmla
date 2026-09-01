import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import Button from "../primitives/Button";
import { formatINR } from "../primitives/Price";

// Phase 6: this is a MOCK confirmation. No order is transmitted or stored
// anywhere — `orderId` is generated client-side and the cart is cleared
// locally. There is no order-lookup/tracking system behind this screen
// (flagged again in this phase's Known Issues).
export default function OrderConfirmation({ orderId, email, total }) {
  return (
    <div className="flex flex-col items-center gap-5 text-center py-16 max-w-lg mx-auto">
      <CheckCircle2 className="text-forest" size={48} strokeWidth={1.5} />
      <div className="flex flex-col gap-2">
        <h2 className="font-serif text-3xl text-brown">Order placed</h2>
        <p className="text-sm text-brown/65 leading-relaxed">
          Thank you — your order has been placed. A confirmation has been sent to{" "}
          <span className="text-brown">{email}</span>.
        </p>
      </div>

      <div className="flex flex-col gap-1.5 rounded-sm bg-ivory-200/60 px-6 py-4">
        <span className="text-xs tracking-[0.1em] text-brown/50 uppercase">Order number</span>
        <span className="font-serif text-xl text-brown">{orderId}</span>
        <span className="text-xs text-brown/50 mt-1">Order total: {formatINR(total)}</span>
      </div>

      <p className="text-xs text-brown/50">Estimated delivery in 4–6 business days.</p>

      <div className="flex flex-col xs:flex-row gap-3 mt-2">
        <Button as={Link} to="/products" variant="primary" size="md">
          Continue Shopping
        </Button>
        <Button as={Link} to="/" variant="ghost" size="md">
          Back to Home
        </Button>
      </div>
    </div>
  );
}
