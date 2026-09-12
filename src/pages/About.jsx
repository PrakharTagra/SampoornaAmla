import { Leaf, MapPin, Users, ShieldCheck } from "lucide-react";
import Container from "../components/primitives/Container";
import SectionHeading from "../components/primitives/SectionHeading";
import Breadcrumb from "../components/primitives/Breadcrumb";
import Card from "../components/primitives/Card";
import BackgroundImage from "../components/primitives/BackgroundImage";
import FadeIn from "../animations/FadeIn";
import StaggerContainer from "../animations/StaggerContainer";
import PageTransition from "../animations/PageTransition";
import { aboutPageData } from "../data/sitedata";

const ICON_MAP = { MapPin, Leaf, ShieldCheck, Users };

export default function About() {
  const { stats, pillars } = aboutPageData;
  const mappedPillars = pillars.map((pillar) => ({
    ...pillar,
    icon: ICON_MAP[pillar.iconName] || Leaf,
  }));

  return (
    <PageTransition>
      <Container className="pt-6 sm:pt-8">
        <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "About Us" }]} />
      </Container>

      {/* Hero Section */}
      <section className="relative overflow-hidden my-6 bg-ivory-100 rounded-2xl mx-4 sm:mx-8 lg:mx-auto max-w-container">
        <BackgroundImage
          src="/images/hero/banner-3.png"
          alt="Amla Sampurna products and natural Amla benefits"
          overlay="none"
          imageClassName="object-cover"
        />
        <div className="relative aspect-[21/8] min-h-[14rem] sm:min-h-[20rem]" aria-hidden="true" />
      </section>

      {/* Stats Counter Section */}
      <section className="py-12 border-b border-brown/10">
        <Container>
          <StaggerContainer
            staggerDelay={90}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center p-6 rounded-lg bg-ivory-50/80 border border-brown/10 shadow-card"
              >
                <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest">
                  {stat.value}
                </span>
                <span className="font-serif text-base font-semibold text-brown mt-2">
                  {stat.label}
                </span>
                <span className="text-xs text-brown/60 mt-1">{stat.description}</span>
              </div>
            ))}
          </StaggerContainer>
        </Container>
      </section>

      {/* Origin Story Section */}
      <section className="py-12 sm:py-16 bg-ivory-100 border-y border-brown/10">
        <Container className="grid lg:grid-cols-[0.8fr_1.2fr] gap-6 lg:gap-8 items-stretch">
          <FadeIn direction="left" className="flex flex-col justify-center gap-4 rounded-xl border border-forest/20 bg-forest p-7 sm:p-9 shadow-soft">
            <span className="text-xs font-semibold uppercase tracking-wider text-gold-50">
              Our Origins
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-ivory">
              Why Pratapgarh Amla is legendary
            </h2>
            <div className="h-px w-16 bg-gold" />
            <p className="text-sm text-ivory/75 leading-relaxed">
              The alluvial plains along the Sai and Ganges rivers yield Amla fruits with unrivaled mineral concentration.
            </p>
          </FadeIn>

          <FadeIn direction="right" className="flex flex-col gap-4 rounded-xl border border-brown/15 bg-white p-7 sm:p-9 shadow-soft text-sm sm:text-base text-brown/75 leading-relaxed">
            <p>
              In Indian lore and Ayurvedic traditions, Amla has been known for millennia as <em>Amritphala</em> — the fruit of immortality. While Amla is grown in several regions today, the micro-climate, balanced soil minerals, and generational orchard stewardship in Pratapgarh give this fruit an unmistakable depth of taste and medicinal potency.
            </p>
            <p>
              For generations, Pratapgarh has been recognized as the heart of India&apos;s Aonla trade. Yet, over decades of industrial supply chains, commoditization reduced this noble fruit to anonymous bulk extracts, sweetened candies, or heavily preserved concentrates.
            </p>
            <p>
              <strong className="text-forest">Amla Sampurna</strong> was founded to reverse that trend — honoring the raw fruit, hand-selecting peak seasonal harvests, and preserving every ounce of nutritional vitality.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* Pillars of Integrity */}
      <section className="py-16 sm:py-20 bg-ivory-100 border-y border-brown/10">
        <Container className="flex flex-col gap-12">
          <div className="text-center max-w-xl mx-auto">
            <SectionHeading
              align="center"
              eyebrow="Our Guiding Values"
              title="How we preserve purity at every step"
              description="A transparent, uncompromising standard from orchard harvest to doorstep delivery."
              className="mx-auto"
            />
          </div>

          <StaggerContainer
            staggerDelay={100}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {mappedPillars.map((pillar) => (
              <Card
                key={pillar.title}
                className="flex h-full flex-col gap-3.5 p-6 rounded-lg bg-ivory border border-brown/10 shadow-card hover:border-forest/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-amla/15 text-forest flex items-center justify-center">
                  <pillar.icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="font-serif text-lg font-semibold text-brown">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-brown/70 leading-relaxed">
                  {pillar.description}
                </p>
              </Card>
            ))}
          </StaggerContainer>
        </Container>
      </section>

    </PageTransition>
  );
}
