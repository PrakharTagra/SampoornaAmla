import { useMemo, useState } from "react";
import { Sparkles, ShieldCheck } from "lucide-react";
import Container from "../components/primitives/Container";
import SectionHeading from "../components/primitives/SectionHeading";
import Breadcrumb from "../components/primitives/Breadcrumb";
import ProductGrid from "../components/product/ProductGrid";
import ProductQuickView from "../components/product/ProductQuickView";
import PageTransition from "../animations/PageTransition";
import FadeIn from "../animations/FadeIn";
import { products, CATEGORY_LABELS } from "../data/products";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const categories = useMemo(() => {
    const present = [...new Set(products.map((p) => p.category))];
    return [
      { id: "all", label: "All Products", count: products.length },
      ...present.map((id) => ({
        id,
        label: CATEGORY_LABELS[id] || id,
        count: products.filter((p) => p.category === id).length,
      })),
    ];
  }, []);

  const filteredProducts =
    activeCategory === "all" ? products : products.filter((p) => p.category === activeCategory);

  return (
    <PageTransition>
      <Container className="pt-6 sm:pt-8">
        <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Products" }]} />
      </Container>

      <section className="py-8 sm:py-12">
        <Container className="flex flex-col gap-8">
          <FadeIn direction="up">
            <SectionHeading
              eyebrow="Direct From Pratapgarh"
              title="Our Complete Amla Collection"
              description="Authentic, whole and minimally processed products straight from certified local groves."
            />
          </FadeIn>

          {/* Category Tabs */}
          <nav aria-label="Filter by category" className="flex flex-wrap gap-2.5 border-b border-brown/10 pb-6">
            {categories.map((category) => {
              const isActive = category.id === activeCategory;
              return (
                <button
                  key={category.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveCategory(category.id)}
                  className={`rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200 border flex items-center gap-2 ${
                    isActive
                      ? "bg-forest text-ivory border-forest shadow-sm"
                      : "bg-ivory text-brown/75 border-brown/20 hover:border-brown/40 hover:text-brown"
                  }`}
                >
                  <span>{category.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? "bg-ivory/20 text-ivory" : "bg-brown/10 text-brown/60"
                    }`}
                  >
                    {category.count}
                  </span>
                </button>
              );
            })}
          </nav>

          <div className="flex items-center justify-between text-xs text-brown/60">
            <p>
              Showing <strong className="text-brown">{filteredProducts.length}</strong> of {products.length} items
            </p>
            <span className="hidden sm:flex items-center gap-1.5 text-amla-200 font-medium">
              <Sparkles size={13} /> 100% Chemical-Free
            </span>
          </div>

          {filteredProducts.length > 0 ? (
            <div key={activeCategory} className="animate-fade-in">
              <ProductGrid products={filteredProducts} onQuickView={setQuickViewProduct} />
            </div>
          ) : (
            <p className="text-sm text-brown/60 py-16 text-center">
              No products found in this category yet.
            </p>
          )}

          {/* Guarantee strip */}
          <div className="mt-8 p-5 rounded-lg bg-ivory-50 border border-brown/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brown/70">
            <div className="flex items-center gap-3">
              <ShieldCheck size={20} className="text-forest shrink-0" />
              <span>
                <strong>Fresh Harvest Guarantee:</strong> All orders are dispatched within 24 hours of batch packing to ensure peak nutrient density.
              </span>
            </div>
          </div>
        </Container>
      </section>

      <ProductQuickView
        product={quickViewProduct}
        open={Boolean(quickViewProduct)}
        onClose={() => setQuickViewProduct(null)}
      />
    </PageTransition>
  );
}
