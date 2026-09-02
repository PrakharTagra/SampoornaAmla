import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import ProductImage from "../primitives/ProductImage";
import Price from "../primitives/Price";
import QuantitySelector from "../primitives/QuantitySelector";
import { useCart } from "../../context/CartContext";
import { products } from "../../data/products";

function getVariantStock(productId, variantId) {
  const product = products.find((p) => p.id === productId);
  const variant = product?.variants.find((v) => v.id === variantId);
  return variant?.stock ?? 20;
}

export default function CartItem({ item, dense = false }) {
  const { updateQuantity, removeItem } = useCart();
  const lineTotal = item.price * item.quantity;
  const maxQty = getVariantStock(item.productId, item.variantId);

  return (
    <div className={`flex gap-3 ${dense ? "" : "sm:gap-4"}`}>
      <Link
        to={`/products/${item.productSlug}`}
        className={`shrink-0 ${dense ? "w-16" : "w-20 sm:w-24"}`}
      >
        <ProductImage src={item.thumbnail} alt={item.productName} className="rounded-sm" />
      </Link>

      <div className="flex flex-1 flex-col gap-1.5 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <Link
              to={`/products/${item.productSlug}`}
              className="font-serif text-brown hover:text-forest transition-colors duration-200 truncate block"
            >
              {item.productName}
            </Link>
            <span className="text-xs text-brown/50">{item.variantName}</span>
          </div>
          <button
            type="button"
            aria-label={`Remove ${item.productName} (${item.variantName}) from cart`}
            onClick={() => removeItem(item.productId, item.variantId)}
            className="shrink-0 h-8 w-8 flex items-center justify-center rounded-sm text-brown/40 hover:text-brown hover:bg-brown/5 active:scale-[0.9] motion-reduce:active:scale-100 transition-[color,background-color,transform] duration-200"
          >
            <Trash2 size={15} />
          </button>
        </div>

        <div className="flex items-center justify-between gap-3 mt-auto">
          <QuantitySelector
            value={item.quantity}
            max={maxQty}
            onChange={(qty) => updateQuantity(item.productId, item.variantId, qty)}
          />
          <Price amount={lineTotal} size={dense ? "sm" : "md"} />
        </div>
      </div>
    </div>
  );
}
