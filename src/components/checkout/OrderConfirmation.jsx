import { Link } from "react-router-dom";
import { CheckCircle2, Package, Sparkles } from "lucide-react";
import Button from "../primitives/Button";
import { formatINR } from "../../utils/formatters";
import { checkoutAndCartData } from "../../data/sitedata";

export default function OrderConfirmation({ orderId, email, total }) {
  const conf = checkoutAndCartData.orderConfirmation;

  return (
    <div className="flex flex-col items-center gap-6 text-center py-16 max-w-lg mx-auto animate-fade-in-scale">
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-forest/20 animate-ping opacity-50" />
        <div className="relative p-3 rounded-full bg-forest text-ivory shadow-soft">
          <CheckCircle2 size={44} strokeWidth={2} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="inline-flex items-center justify-center gap-1 text-xs font-semibold uppercase tracking-wider text-amla-200">
          <Sparkles size={13} /> {conf.eyebrow}
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brown">
          {conf.title}
        </h2>
        <p className="text-sm text-brown/70 leading-relaxed max-w-sm mx-auto">
          {conf.description}{" "}
          A confirmation has been sent to <strong className="text-brown">{email}</strong>.
        </p>
      </div>

      <div className="flex flex-col gap-2 rounded-lg bg-ivory-100 border border-brown/10 px-8 py-5 w-full shadow-sm">
        <div className="flex items-center justify-between border-b border-brown/10 pb-3">
          <span className="text-xs tracking-wider uppercase text-brown/50 font-medium">Order Reference</span>
          <span className="font-mono font-bold text-base text-forest">{orderId}</span>
        </div>
        <div className="flex items-center justify-between pt-1">
          <span className="text-xs text-brown/60">Total Paid</span>
          <span className="font-serif text-lg font-bold text-brown">{formatINR(total)}</span>
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs text-brown/60 bg-ivory-50 px-4 py-2 rounded-full border border-brown/10">
        <Package size={14} className="text-forest" />
        <span>{conf.dispatchEstimate}</span>
      </div>

      <div className="flex flex-col xs:flex-row gap-3 mt-2 w-full justify-center">
        <Button as={Link} to="/products" variant="primary" size="md">
          Explore More Products
        </Button>
        <Button as={Link} to="/" variant="secondary" size="md">
          Return to Homepage
        </Button>
      </div>
    </div>
  );
}
