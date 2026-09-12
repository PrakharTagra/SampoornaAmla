import { useState } from "react";
import { Star, CheckCircle2 } from "lucide-react";
import Container from "../components/primitives/Container";
import SectionHeading from "../components/primitives/SectionHeading";
import Card from "../components/primitives/Card";
import Hero from "../components/layout/Hero";
import TrustStrip from "../components/layout/TrustStrip";
import StoryHero from "../components/story/StoryHero";
import StoryTimeline from "../components/story/StoryTimeline";
import BrandValues from "../components/story/BrandValues";
import ProductGrid from "../components/product/ProductGrid";
import ProductQuickView from "../components/product/ProductQuickView";
import FadeIn from "../animations/FadeIn";
import PageTransition from "../animations/PageTransition";
import StaggerContainer from "../animations/StaggerContainer";
import { products, testimonialsData } from "../data/sitedata";

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

      {/* Verified Reviews / Testimonials Section */}
      <section className="py-16 sm:py-20 bg-ivory-50/70 border-t border-brown/10">
        <Container className="flex flex-col gap-10">
          <FadeIn direction="up">
            <SectionHeading
              align="center"
              eyebrow="Verified Experiences"
              title="Loved by Families Across India"
              description="Real feedback from conscious customers enjoying authentic Pratapgarh Amla daily."
              className="mx-auto"
            />
          </FadeIn>

          <StaggerContainer
            staggerDelay={100}
            className="grid items-stretch sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {testimonialsData.map((review) => (
              <Card
                key={review.name}
                className="flex h-full flex-col justify-between gap-4 p-6 rounded-xl border border-forest/15 bg-white shadow-soft"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-1 text-gold-200">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <p className="text-sm text-brown/80 leading-relaxed italic">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-brown/10 pt-3 text-xs">
                  <div className="flex flex-col">
                    <span className="font-semibold text-brown">{review.name}</span>
                    <span className="text-brown/55">{review.role}</span>
                  </div>
                  {review.verified ? (
                    <span className="flex items-center gap-1 text-forest font-medium text-[11px]">
                      <CheckCircle2 size={13} /> Verified Buyer
                    </span>
                  ) : null}
                </div>
              </Card>
            ))}
          </StaggerContainer>
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
