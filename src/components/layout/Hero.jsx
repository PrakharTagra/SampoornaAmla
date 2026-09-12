import { useEffect, useState } from "react";
import { Leaf, MapPin, Truck } from "lucide-react";
import Container from "../primitives/Container";
import Button from "../primitives/Button";
import BackgroundImage from "../primitives/BackgroundImage";

const ATTRIBUTES = [
  { icon: Leaf, label: "100% Natural" },
  { icon: MapPin, label: "Carefully Sourced" },
  { icon: Truck, label: "Pan-India Delivery" },
];

const SLIDES = [
  {
    id: 1,
    eyebrow: "Royal Pratapgarh Heritage",
    title: "Direct from the orchards of Aonla",
    description: "Pure, nutrient-dense Indian Gooseberry handpicked from the historic city of Aonla, delivered fresh pan-India.",
    image: "/images/hero/banner-royal.png",
    imageAlt: "Pratapgarh Amla — Royal Orchard Heritage",
  },
  {
    id: 2,
    eyebrow: "Ayurvedic Purity & Immunity",
    title: "Nature's greatest source of Vitamin C",
    description: "Preserved through gentle, time-tested methods without synthetic additives, artificial colors, or chemical fillers.",
    image: "/images/hero/banner-ayurvedic.png",
    imageAlt: "Pratapgarh Amla — Ayurvedic Superfood",
  },
];

const SLIDE_DURATION = 6000;

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
      className="relative flex h-[28rem] overflow-hidden sm:h-[32rem] lg:h-[36rem]"
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

      <Container className="relative z-10 w-full py-6 sm:py-10 lg:py-12">
        <div
          key={slide.id}
          className="flex flex-col gap-4 sm:gap-6 max-w-xl"
        >
          <span className="font-sans text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase text-gold-50 animate-fade-in-down">
            {slide.eyebrow}
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-[3.6rem] leading-[1.08] text-ivory drop-shadow-sm animate-fade-in-up">
            {slide.title}
          </h1>
          <p className="font-sans text-sm sm:text-base lg:text-lg text-ivory/85 max-w-md leading-relaxed animate-fade-in-up delay-100">
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
