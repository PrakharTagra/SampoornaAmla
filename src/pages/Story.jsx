import { Link } from "react-router-dom";
import Container from "../components/primitives/Container";
import SectionHeading from "../components/primitives/SectionHeading";
import Breadcrumb from "../components/primitives/Breadcrumb";
import Button from "../components/primitives/Button";
import StoryHero from "../components/story/StoryHero";
import StorySection from "../components/story/StorySection";
import StoryTimeline from "../components/story/StoryTimeline";
import BrandValues from "../components/story/BrandValues";
import BrandBanner from "../components/layout/BrandBanner";

export default function Story() {
  return (
    <>
      <Container className="pt-6 sm:pt-8">
        <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Our Story" }]} />
      </Container>

      <StoryHero />

      {/* Origin story: Section 3's brand philosophy in narrative form. Kept
          to general, verifiable-shaped statements about the region and the
          sourcing relationship — no invented dates, certifications or
          statistics, per Section 3 / Section 17's "do not invent historical
          facts" rule. Real client-supplied copy should replace this. */}
      <StorySection
        eyebrow="Our origin"
        title="Rooted in Pratapgarh"
        imageAlt="Aonla orchards near Pratapgarh"
      >
        <p>
          Pratapgarh, in Uttar Pradesh, is known for its Aonla orchards. The fruit that becomes
          every product in this range is sourced directly from growers in and around the region,
          rather than through an anonymous supply chain.
        </p>
        <p>
          Keeping that connection to the land visible — from orchard to harvest to the box that
          reaches your door — is part of what this brand is built around.
        </p>
      </StorySection>

      <section className="py-16 sm:py-20 bg-ivory-50">
        <Container className="flex flex-col gap-12">
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

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            align="center"
            eyebrow="What we stand for"
            title="Brand values"
            className="mx-auto"
          />
          <BrandValues />
        </Container>
      </section>

      <BrandBanner />

      <section className="py-14 bg-ivory-50">
        <Container className="flex flex-col items-center gap-4 text-center">
          <p className="font-sans text-sm text-brown/60 max-w-sm">
            Bring a piece of Pratapgarh into your everyday routine.
          </p>
          <Button as={Link} to="/products" variant="primary" size="md">
            Shop Amla
          </Button>
        </Container>
      </section>
    </>
  );
}
