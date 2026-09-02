import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Container from "../components/primitives/Container";
import SectionHeading from "../components/primitives/SectionHeading";
import BackgroundImage from "../components/primitives/BackgroundImage";
import Hero from "../components/layout/Hero";
import TrustStrip from "../components/layout/TrustStrip";
import StoryHero from "../components/story/StoryHero";
import StorySection from "../components/story/StorySection";
import StoryTimeline from "../components/story/StoryTimeline";
import BrandValues from "../components/story/BrandValues";
import ProductGrid from "../components/product/ProductGrid";
import ProductQuickView from "../components/product/ProductQuickView";
import { products } from "../data/products";

export default function Home() {
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#story") {
      document.getElementById("story")?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <div className="flex flex-col min-h-[calc(100dvh-4rem)] sm:min-h-[calc(100dvh-5rem)]">
        <Hero />
        <TrustStrip />
      </div>

      <section id="collection" className="py-20 sm:py-24">
        <Container className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Shop"
            title="Our Amla collection"/>
          <ProductGrid products={products} onQuickView={setQuickViewProduct} />
        </Container>
      </section>

      <div id="story">
        <StoryHero />

        <StorySection
          eyebrow="Our origin"
          title="Rooted in Pratapgarh"
          image="/images/story/3.jpg"
          imageAlt="Aonla orchards near Pratapgarh"
        >
          <p>
            Pratapgarh, in Uttar Pradesh, is known for its Aonla orchards. The fruit that becomes
            every product in this range is sourced directly from growers in and around the
            region, rather than through an anonymous supply chain.
          </p>
          <p>
            Keeping that connection to the land visible — from orchard to harvest to the box that
            reaches your door — is part of what this brand is built around.
          </p>
        </StorySection>

        <section className="relative overflow-hidden py-16 sm:py-20">
          <BackgroundImage src="/images/story/4.jpg" alt="" overlay="light" />
          <Container className="relative z-10 flex flex-col gap-12">
            <SectionHeading
              align="center"
              eyebrow="Sourcing journey"
              title="From the land to your home"
              description="Every pack follows the same path before it reaches you."
              className="mx-auto"
            />
            <StoryTimeline />
          </Container>
        </section>

        <section className="py-4 sm:py-8">
          <Container className="flex flex-col gap-4">
            <SectionHeading align="center" eyebrow="What we stand for" title="Brand values" className="mx-auto" />
            <BrandValues />
          </Container>
        </section>
      </div>

      <ProductQuickView
        product={quickViewProduct}
        open={Boolean(quickViewProduct)}
        onClose={() => setQuickViewProduct(null)}
      />
    </>
  );
}
