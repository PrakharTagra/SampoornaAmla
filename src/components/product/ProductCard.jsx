import { Link } from "react-router-dom";
import { Eye, Star } from "lucide-react";
import ProductImage from "../primitives/ProductImage";
import Price from "../primitives/Price";
import Button from "../primitives/Button";

export default function ProductCard({ product, onQuickView }) {
  return (
    <div className="group flex h-full min-w-0 flex-col rounded-lg bg-ivory-50/50 p-3.5 border border-brown/10 hover:border-forest/30 hover:shadow-soft hover:-translate-y-1 transition-all duration-300">
      <div className="relative overflow-hidden rounded-md bg-ivory-100">
        <button
          type="button"
          className="block w-full text-left focus:outline-none"
          onClick={() => onQuickView(product)}
        >
          <ProductImage
            src={product.thumbnail}
            alt={product.name}
            className="rounded-md transition-transform duration-500 group-hover:scale-105"
            zoom={false}
          />
        </button>

        {/* Quick View overlay button */}
        <button
          type="button"
          onClick={() => onQuickView(product)}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-ivory/95 hover:bg-ivory text-brown text-xs font-medium py-1.5 px-3 rounded-full shadow-soft backdrop-blur-sm flex items-center gap-1.5 focus:opacity-100 focus:translate-y-0"
        >
          <Eye size={13} />
          Quick View
        </button>
      </div>

      <div className="pt-4 flex-1 flex flex-col gap-1.5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] font-medium uppercase tracking-wider text-amla-200">
            Pratapgarh Sourced
          </span>
          <div className="flex items-center gap-1 text-xs text-gold-200 font-medium">
            <Star size={12} fill="currentColor" strokeWidth={0} />
            <span className="text-brown/80">{product.rating}</span>
          </div>
        </div>

        <button type="button" className="text-left group-hover:text-forest transition-colors" onClick={() => onQuickView(product)}>
          <h3 className="font-serif text-lg font-semibold text-brown leading-snug">
            {product.name}
          </h3>
        </button>

        <p className="text-xs text-brown/65 leading-relaxed line-clamp-2">
          {product.shortDescription}
        </p>

        <div className="mt-auto flex flex-col gap-2 pt-3 border-t border-brown/10">
          <div className="flex items-center justify-between">
            <span className="text-xs text-brown/50">From</span>
            <Price amount={product.variants[0].price} compareAt={product.variants[0].compareAtPrice} size="sm" />
          </div>
          <div className="flex gap-2">
            <Button
              as={Link}
              to={`/products/${product.slug}`}
              variant="primary"
              size="sm"
              className="flex-1 text-xs"
            >
              View Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
