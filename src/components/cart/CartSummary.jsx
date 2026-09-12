import { formatINR } from "../../utils/formatters";

export default function CartSummary({ subtotal, shipping, total, amountToFreeShipping, children }) {
  return (
    <div className="flex flex-col gap-4">
      {amountToFreeShipping > 0 ? (
        <p className="text-xs text-amla-200 bg-amla/10 rounded-sm px-3 py-2">
          Add {formatINR(amountToFreeShipping)} more to get free shipping.
        </p>
      ) : (
        <p className="text-xs text-forest bg-forest/5 rounded-sm px-3 py-2">
          You've unlocked free shipping.
        </p>
      )}

      <div className="flex flex-col gap-2 text-sm">
        <div className="flex items-center justify-between text-brown/70">
          <span>Subtotal</span>
          <span className="text-brown font-medium">{formatINR(subtotal)}</span>
        </div>
        <div className="flex items-center justify-between text-brown/70">
          <span>Shipping</span>
          <span className="text-brown font-medium">
            {shipping === 0 ? "Free" : formatINR(shipping)}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-brown/10">
        <span className="font-serif text-lg text-brown">Total</span>
        <span className="font-serif text-lg text-brown">{formatINR(total)}</span>
      </div>

      {children}
    </div>
  );
}
