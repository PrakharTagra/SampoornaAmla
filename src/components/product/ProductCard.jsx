import { Link } from "react-router-dom";
import ProductImage from "../primitives/ProductImage";
import Price from "../primitives/Price";
import Button from "../primitives/Button";

export default function ProductCard({ product, onQuickView }) {
  return (
    <div className="group flex flex-col">
      <Link to={`/products/${product.slug}`} className="block">
        <ProductImage src={product.thumbnail} alt={product.name} className="rounded-md" zoom />
      </Link>
      <div className="pt-4 flex flex-col gap-1.5">
        <Link to={`/products/${product.slug}`}>
          <h3 className="font-serif text-lg text-brown group-hover:text-forest transition-colors duration-200">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-brown/65 leading-relaxed">{product.shortDescription}</p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-brown/50">From</span>
          <Price amount={product.variants[0].price} size="sm" />
        </div>
        <Button
          variant="secondary"
          size="sm"
          className="mt-3 w-full"
          onClick={() => onQuickView(product)}
        >
          View Details
        </Button>
      </div>
    </div>
  );
}
