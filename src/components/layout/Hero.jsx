import { useEffect, useState } from "react";
import Container from "../primitives/Container";
import Button from "../primitives/Button";
import BackgroundImage from "../primitives/BackgroundImage";
import { Leaf, MapPin, Truck } from "lucide-react";
import { heroData } from "../../data/sitedata";

const ICON_MAP = { Leaf, MapPin, Truck };
const ATTRIBUTES = heroData.attributes.map((attribute) => ({
  icon: ICON_MAP[attribute.iconName] || Leaf,
  label: attribute.label,
}));
const SLIDES = heroData.slides;
const SLIDE_DURATION = heroData.slideDuration;

export default function Hero() {
  const [active, setActive] = useState(0);
  const [mobileImgErrored, setMobileImgErrored] = useState(false);

  const scrollToCollection = () => {
    document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" });
  };

  const nextSlide = () => {
    setActive((curr) => (curr + 1) % SLIDES.length);
  };

  useEffect(() => {
    if (SLIDES.length <= 1) return undefined;
    const intervalId = setInterval(nextSlide, SLIDE_DURATION);
    return () => clearInterval(intervalId);
  }, []);

  const slide = SLIDES[active];

  const content = (
    <div
      key={slide.id}
      className="flex max-w-[88%] flex-col gap-1.5 rounded-xl bg-brown/55 p-3 backdrop-blur-[2px] xs:max-w-xl sm:max-w-xl sm:gap-5 sm:rounded-none sm:bg-transparent sm:p-0 sm:backdrop-blur-none"
    >
      <span className="font-sans text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase text-gold-50 animate-fade-in-down">
        {slide.eyebrow}
      </span>
      <h1 className="font-serif text-xl xs:text-3xl sm:text-5xl lg:text-[3.6rem] leading-tight sm:leading-[1.08] text-ivory drop-shadow-sm animate-fade-in-up">
        {slide.title}
      </h1>
      {/* Description + attribute badges are dropped on mobile: the banner
          photos are wide/short, so at phone width the rendered image is
          only ~180–200px tall — not enough room for the full text stack
          without overflowing. The attributes are already repeated in the
          TrustStrip section directly below the banner, so nothing is lost. */}
      <p className="hidden sm:block font-sans text-sm sm:text-base lg:text-lg text-ivory/90 sm:text-ivory/85 max-w-md leading-relaxed animate-fade-in-up delay-100">
        {slide.description}
      </p>

      <div className="hidden sm:flex flex-wrap gap-x-6 gap-y-2.5 pt-2 animate-fade-in delay-200">
        {ATTRIBUTES.map((attr) => (
          <div key={attr.label} className="flex items-center gap-2 text-sm text-ivory/90 font-medium">
            <div className="p-1 rounded-full bg-gold/20 text-gold-50">
              <attr.icon size={15} strokeWidth={2} />
            </div>
            {attr.label}
          </div>
        ))}
      </div>

      <div className="pt-1 sm:pt-2 animate-fade-in delay-300">
        <Button
          size="md"
          className="w-fit shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          onClick={scrollToCollection}
        >
          Shop Amla Collection
        </Button>
      </div>
    </div>
  );

  return (
    <section aria-roledescription="carousel" aria-label="Homepage banner">
      {/* Mobile: the banner is exactly as tall as the image — full width,
          no cropping. Text sits on top, vertically centered against that
          same height, with a solid-enough tint behind it for contrast.
          No overflow-hidden here on purpose: if the text ever needs a hair
          more room than the image provides, it should spill over slightly
          rather than get silently clipped mid-sentence. */}
      <div className="relative sm:hidden">
        {slide.image && !mobileImgErrored ? (
          <img
            key={slide.id}
            src={slide.image}
            alt={slide.imageAlt}
            className="block w-full h-auto animate-fade-in"
            loading="eager"
            decoding="async"
            onError={() => setMobileImgErrored(true)}
          />
        ) : (
          <div className="h-56 w-full bg-[radial-gradient(circle_at_30%_20%,theme(colors.amla.50),theme(colors.forest.200))]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-brown/75 via-brown/45 to-brown/20" />
        <div className="absolute inset-0 flex items-center">
          <Container className="w-full py-3">{content}</Container>
        </div>
      </div>

      {/* Tablet / desktop: full-bleed cropped carousel, unchanged */}
      <div className="relative hidden overflow-hidden sm:flex sm:h-[calc(100dvh-10.5rem)] sm:min-h-[26rem] md:h-[calc(100dvh-9.5rem)] lg:min-h-[30rem]">
        <div
          className="absolute inset-0 flex h-full w-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {SLIDES.map((s) => (
            <div key={s.id} className="relative h-full w-full shrink-0">
              <BackgroundImage src={s.image} alt={s.imageAlt} overlay="left-fade" />
            </div>
          ))}
        </div>

        <Container className="relative z-10 w-full py-8 lg:py-10">{content}</Container>
      </div>
    </section>
  );
}
