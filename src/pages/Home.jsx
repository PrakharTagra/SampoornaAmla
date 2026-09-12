import { useState } from "react";
import Container from "../components/primitives/Container";
import SectionHeading from "../components/primitives/SectionHeading";
import Hero from "../components/layout/Hero";
import TrustStrip from "../components/layout/TrustStrip";
import StoryHero from "../components/story/StoryHero";
import StoryTimeline from "../components/story/StoryTimeline";
import BrandValues from "../components/story/BrandValues";
import ProductGrid from "../components/product/ProductGrid";
import ProductQuickView from "../components/product/ProductQuickView";
import FadeIn from "../animations/FadeIn";
import PageTransition from "../animations/PageTransition";
import { products } from "../data/sitedata";

export default function Home() {
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  return (
    <PageTransition>
      <div className="flex flex-col">
        <Hero />
        <TrustStrip />
      </div>

      <section id="collection" className="py-20 sm:py-28">
        <Container className="flex flex-col gap-12">
          <FadeIn direction="up">
            <SectionHeading
              eyebrow="Orchard Harvest"
              title="Our Pure Amla Collection"
              description="Each product is crafted without preservatives to bring the purest essence of Pratapgarh to your family."
            />
          </FadeIn>
          <ProductGrid products={products} onQuickView={setQuickViewProduct} />
        </Container>
      </section>

      <div id="story">
        <StoryHero />

        <section className="py-12 sm:py-16 bg-ivory">
          <Container className="flex flex-col gap-12">
            <FadeIn direction="up">
              <SectionHeading
                align="center"
                eyebrow="Sourcing Journey"
                title="From the land to your home"
                description="Every pack follows a rigorous, gentle path of purity before it reaches you."
                className="mx-auto"
              />
            </FadeIn>
            <StoryTimeline />
          </Container>
        </section>

        <section className="py-10 sm:py-16 bg-ivory border-t border-brown/10">
          <Container className="flex flex-col gap-10">
            <FadeIn direction="up">
              <SectionHeading
                align="center"
                eyebrow="What We Stand For"
                title="Our Brand Values"
                description="Uncompromising honesty, farm-direct relationships, and genuine care for your well-being."
                className="mx-auto"
              />
            </FadeIn>
            <BrandValues />
          </Container>
        </section>
      </div>

      <ProductQuickView
        product={quickViewProduct}
        open={Boolean(quickViewProduct)}
        onClose={() => setQuickViewProduct(null)}
      />
    </PageTransition>
  );
}
