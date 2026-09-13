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

  return (
    <section
      className="relative flex h-[calc(100dvh-11rem)] min-h-[24rem] overflow-hidden sm:h-[calc(100dvh-10.5rem)] sm:min-h-[26rem] md:h-[calc(100dvh-9.5rem)] lg:min-h-[30rem]"
      aria-roledescription="carousel"
      aria-label="Homepage banner"
    >
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

      <Container className="relative z-10 w-full py-4 sm:py-8 lg:py-10">
        <div
          key={slide.id}
          className="flex max-w-[85%] flex-col gap-2.5 rounded-xl bg-brown/40 p-4 backdrop-blur-[2px] xs:max-w-xl sm:max-w-xl sm:gap-5 sm:rounded-none sm:bg-transparent sm:p-0 sm:backdrop-blur-none"
        >
          <span className="font-sans text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase text-gold-50 animate-fade-in-down">
            {slide.eyebrow}
          </span>
          <h1 className="font-serif text-2xl xs:text-3xl sm:text-5xl lg:text-[3.6rem] leading-[1.1] sm:leading-[1.08] text-ivory drop-shadow-sm animate-fade-in-up">
            {slide.title}
          </h1>
          <p className="font-sans text-sm sm:text-base lg:text-lg text-ivory/90 sm:text-ivory/85 max-w-md leading-relaxed animate-fade-in-up delay-100">
            {slide.description}
          </p>

          <div className="flex flex-col xs:flex-row flex-wrap gap-x-6 gap-y-2.5 pt-2 animate-fade-in delay-200">
            {ATTRIBUTES.map((attr) => (
              <div key={attr.label} className="flex items-center gap-2 text-sm text-ivory/90 font-medium">
                <div className="p-1 rounded-full bg-gold/20 text-gold-50">
                  <attr.icon size={15} strokeWidth={2} />
                </div>
                {attr.label}
              </div>
            ))}
          </div>

          <div className="pt-2 animate-fade-in delay-300">
            <Button
              size="lg"
              className="w-fit shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              onClick={scrollToCollection}
            >
              Shop Amla Collection
            </Button>
          </div>
        </div>

      </Container>
    </section>
  );
}
