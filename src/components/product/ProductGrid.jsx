import ProductCard from "./ProductCard";

export default function ProductGrid({ products, onQuickView, className = "" }) {
  return (
    <div className={`grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 ${className}`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onQuickView={onQuickView} />
      ))}
    </div>
  );
}
