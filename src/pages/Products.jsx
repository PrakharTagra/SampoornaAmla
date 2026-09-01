import { useMemo, useState } from "react";
import Container from "../components/primitives/Container";
import SectionHeading from "../components/primitives/SectionHeading";
import Breadcrumb from "../components/primitives/Breadcrumb";
import ProductGrid from "../components/product/ProductGrid";
import ProductQuickView from "../components/product/ProductQuickView";
import { products, CATEGORY_LABELS } from "../data/products";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Filter categories are derived from whatever categories actually exist in
  // the product data, so a future product with a new category value shows up
  // in the nav automatically rather than requiring a component change.
  const categories = useMemo(() => {
    const present = [...new Set(products.map((p) => p.category))];
    return [
      { id: "all", label: "All" },
      ...present.map((id) => ({ id, label: CATEGORY_LABELS[id] || id })),
    ];
  }, []);

  const filteredProducts =
    activeCategory === "all" ? products : products.filter((p) => p.category === activeCategory);

  return (
    <>
      <Container className="pt-6 sm:pt-8">
        <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Products" }]} />
      </Container>

      <section className="py-8 sm:py-12">
        <Container className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Shop"
            title="Our Amla Collection"
            description="Naturally grown in the orchards of Pratapgarh, carefully processed and packed for freshness."
          />

          <nav aria-label="Filter by category" className="flex flex-wrap gap-2 border-b border-brown/10 pb-6">
            {categories.map((category) => {
              const isActive = category.id === activeCategory;
              return (
                <button
                  key={category.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveCategory(category.id)}
                  className={`rounded-sm px-4 py-2 text-sm font-medium transition-colors duration-200 border ${
                    isActive
                      ? "bg-forest text-ivory border-forest"
                      : "bg-transparent text-brown/70 border-brown/20 hover:border-brown/40"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center justify-between">
            <p className="text-sm text-brown/50">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} onQuickView={setQuickViewProduct} />
          ) : (
            <p className="text-sm text-brown/60 py-16 text-center">
              No products found in this category yet.
            </p>
          )}
        </Container>
      </section>

      <ProductQuickView
        product={quickViewProduct}
        open={Boolean(quickViewProduct)}
        onClose={() => setQuickViewProduct(null)}
      />
    </>
  );
}
