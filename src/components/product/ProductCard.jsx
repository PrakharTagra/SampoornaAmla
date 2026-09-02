import { Link } from "react-router-dom";
import ProductImage from "../primitives/ProductImage";
import Price from "../primitives/Price";
import Button from "../primitives/Button";

export default function ProductCard({ product, onQuickView }) {
  return (
    <div className="group h-full flex flex-col">
      <button
        type="button"
        className="block w-full text-left"
        onClick={() => onQuickView(product)}
      >
        <ProductImage src={product.thumbnail} alt={product.name} className="rounded-md" zoom />
      </button>
      <div className="pt-4 flex-1 flex flex-col gap-1.5">
        <button type="button" className="text-left" onClick={() => onQuickView(product)}>
          <h3 className="font-serif text-lg text-brown group-hover:text-forest transition-colors duration-200">
            {product.name}
          </h3>
        </button>
        <p className="text-sm text-brown/65 leading-relaxed">{product.shortDescription}</p>

        <div className="mt-auto flex flex-col gap-1.5 pt-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-brown/50">From</span>
            <Price amount={product.variants[0].price} size="sm" />
          </div>
          <Button
            as={Link}
            to={`/products/${product.slug}`}
            variant="primary"
            size="sm"
            className="mt-1.5 w-full"
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
}
