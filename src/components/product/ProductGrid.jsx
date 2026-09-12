import ProductCard from "./ProductCard";
import StaggerContainer from "../../animations/StaggerContainer";

export default function ProductGrid({ products, onQuickView, className = "" }) {
  return (
    <StaggerContainer
      staggerDelay={100}
      className={`grid grid-cols-1 items-stretch sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 ${className}`}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onQuickView={onQuickView} />
      ))}
    </StaggerContainer>
  );
}
