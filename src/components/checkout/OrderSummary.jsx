import ProductImage from "../primitives/ProductImage";
import Divider from "../primitives/Divider";
import { formatINR } from "../primitives/Price";

// A read-only counterpart to CartSummary/CartItem: checkout shouldn't let
// quantities be edited mid-flow (that's what the Cart page is for), so this
// renders the same totals plus a compact, non-interactive line-item list
// rather than reusing CartItem's editable controls.
export default function OrderSummary({ items, subtotal, shipping, total }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-4 max-h-72 overflow-y-auto pr-1">
        {items.map((item) => (
          <div key={`${item.productId}-${item.variantId}`} className="flex gap-3">
            <div className="relative shrink-0 w-14">
              <ProductImage src={item.thumbnail} alt={item.productName} className="rounded-sm" />
              <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-brown text-ivory text-[10px] flex items-center justify-center font-medium">
                {item.quantity}
              </span>
            </div>
            <div className="flex flex-1 flex-col justify-center min-w-0">
              <span className="text-sm text-brown truncate">{item.productName}</span>
              <span className="text-xs text-brown/50">{item.variantName}</span>
            </div>
            <span className="text-sm text-brown font-medium self-center">
              {formatINR(item.price * item.quantity)}
            </span>
          </div>
        ))}
      </div>

      <Divider />

      <div className="flex flex-col gap-2 text-sm">
        <div className="flex items-center justify-between text-brown/70">
          <span>Subtotal</span>
          <span className="text-brown font-medium">{formatINR(subtotal)}</span>
        </div>
        <div className="flex items-center justify-between text-brown/70">
          <span>Shipping</span>
          <span className="text-brown font-medium">{shipping === 0 ? "Free" : formatINR(shipping)}</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-brown/10">
        <span className="font-serif text-lg text-brown">Total</span>
        <span className="font-serif text-lg text-brown">{formatINR(total)}</span>
      </div>
    </div>
  );
}
