import { useState } from "react";
import Container from "../components/primitives/Container";
import SectionHeading from "../components/primitives/SectionHeading";
import Hero from "../components/layout/Hero";
import TrustStrip from "../components/layout/TrustStrip";
import HeritageSection from "../components/layout/HeritageSection";
import BrandBanner from "../components/layout/BrandBanner";
import ProductGrid from "../components/product/ProductGrid";
import ProductQuickView from "../components/product/ProductQuickView";
import { products } from "../data/products";

export default function Home() {
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  return (
    <>
      <Hero />
      <TrustStrip />

      <section id="collection" className="py-20 sm:py-24">
        <Container className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Shop"
            title="Our Amla collection"
            description="Naturally grown, carefully processed, and packed for freshness."
            align="center"
          />
          <ProductGrid products={products} onQuickView={setQuickViewProduct} />
        </Container>
      </section>

      <HeritageSection />
      <BrandBanner />

      <ProductQuickView
        product={quickViewProduct}
        open={Boolean(quickViewProduct)}
        onClose={() => setQuickViewProduct(null)}
      />
    </>
  );
}
