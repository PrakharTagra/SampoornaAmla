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

// Drop each banner background into /public/images/hero/ using these
// filenames and it will show up automatically. Until then a themed
// fallback gradient is shown so the banner never looks broken.
const SLIDES = [
  {
    id: 1,
    eyebrow: "From the land of Pratapgarh",
    title: "Comes nature\u2019s gift",
    description: "Pure Amla from the city of Aonla, brought to every home in India.",
    image: "/images/hero/1.png",
    imageAlt: "Pratapgarh Amla — fresh Amla fruit orchards",
  },
  {
    id: 2,
    eyebrow: "Pratapgarh ke amla",
    title: "Comes nature\u2019s gift",
    description: "Pure Amla from the city of Aonla, brought to every home in India.",
    image: "/images/hero/2.png",
    imageAlt: "Pratapgarh Amla — harvest",
  },
];

const SLIDE_DURATION = 5000;

export default function Hero() {
  const [active, setActive] = useState(0);

  const scrollToCollection = () => {
    document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (SLIDES.length <= 1) return undefined;
    const intervalId = setInterval(() => {
      setActive((current) => (current + 1) % SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(intervalId);
  }, []);

  const slide = SLIDES[active];

  return (
    <section
      className="relative overflow-hidden flex-1 flex items-center min-h-[26rem] sm:min-h-[30rem]"
      aria-roledescription="carousel"
      aria-label="Homepage banner"
    >
      <BackgroundImage key={slide.id} src={slide.image} alt={slide.imageAlt} overlay="left-fade" />

      <Container className="relative z-10 py-10 sm:py-16 lg:py-20 w-full">
        <div
          key={slide.id}
          className="flex flex-col gap-3 sm:gap-5 lg:gap-6 max-w-lg animate-[fade-in_0.5s_ease]"
        >
          <span className="font-sans text-xs tracking-[0.14em] text-gold-50">
            {slide.eyebrow}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-[3.4rem] leading-[1.08] text-ivory">
            {slide.title}
          </h1>
          <p className="font-sans text-sm sm:text-base lg:text-lg text-ivory/80 max-w-md leading-relaxed">
            {slide.description}
          </p>

          <div className="flex flex-col xs:flex-row flex-wrap gap-x-6 gap-y-2 pt-1">
            {ATTRIBUTES.map((attr) => (
              <div key={attr.label} className="flex items-center gap-2 text-sm text-ivory/85">
                <attr.icon size={16} className="text-gold-50" strokeWidth={1.75} />
                {attr.label}
              </div>
            ))}
          </div>

          <Button size="lg" className="w-fit mt-1 sm:mt-2" onClick={scrollToCollection}>
            Shop Amla
          </Button>
        </div>

        {SLIDES.length > 1 ? (
          <div className="flex items-center gap-2 mt-10 lg:mt-16">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                type="button"
                aria-label={`Show banner ${i + 1}`}
                aria-current={i === active}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-8 bg-gold-50" : "w-4 bg-ivory/40 hover:bg-ivory/60"
                }`}
              />
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
