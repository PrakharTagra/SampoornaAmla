import { useEffect, useRef, useState } from "react";
import { Leaf, MapPin, Truck } from "lucide-react";
import Container from "../primitives/Container";
import Button from "../primitives/Button";
import ProductImage from "../primitives/ProductImage";

const ATTRIBUTES = [
  { icon: Leaf, label: "100% Natural" },
  { icon: MapPin, label: "Carefully Sourced" },
  { icon: Truck, label: "Pan-India Delivery" },
];

const SLIDES = Array.from({ length: 5 }, (_, i) => ({
  id: i+1,
  eyebrow: "From the land of Pratapgarh",
  title: "Comes nature\u2019s gift",
  description: "Pure Amla from the city of Aonla, brought to every home in India.",
  image: null,
  imageAlt: "Pratapgarh Amla — fresh Amla fruit",
},
{
  id: i+2,
  eyebrow: "Pratapgarh ke amla",
  title: "Comes nature\u2019s gift",
  description: "Pure Amla from the city of Aonla, brought to every home in India.",
  image: null,
  imageAlt: "Pratapgarh Amla — fresh Amla fruit",
}
));

const SLIDE_DURATION = 5000;

export default function Hero() {
  const [active, setActive] = useState(0);
  const timeoutRef = useRef(null);

  const scrollToCollection = () => {
    document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (SLIDES.length <= 1) return undefined;
    timeoutRef.current = setTimeout(() => {
      setActive((current) => (current + 1) % SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearTimeout(timeoutRef.current);
  }, [active]);

  const slide = SLIDES[active];

  return (
    <section
      className="relative overflow-hidden bg-ivory flex-1 flex items-center"
      aria-roledescription="carousel"
      aria-label="Homepage banner"
    >
      <Container className="relative grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center py-6 sm:py-10 lg:py-16 w-full">
        <div
          key={slide.id}
          className="flex flex-col gap-3 sm:gap-5 lg:gap-6 order-2 lg:order-1 animate-[fade-in_0.5s_ease]"
        >
          <span className="font-sans text-xs tracking-[0.14em] text-amla-200">
            {slide.eyebrow}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-[3.4rem] leading-[1.08] text-brown">
            {slide.title}
          </h1>
          <p className="font-sans text-sm sm:text-base lg:text-lg text-brown/70 max-w-md leading-relaxed">
            {slide.description}
          </p>

          <div className="flex flex-col xs:flex-row flex-wrap gap-x-6 gap-y-2 pt-1">
            {ATTRIBUTES.map((attr) => (
              <div key={attr.label} className="flex items-center gap-2 text-sm text-brown/75">
                <attr.icon size={16} className="text-amla-200" strokeWidth={1.75} />
                {attr.label}
              </div>
            ))}
          </div>

          <Button size="lg" className="w-fit mt-1 sm:mt-2" onClick={scrollToCollection}>
            Shop Amla
          </Button>
        </div>

        <div className="relative order-1 lg:order-2 w-full max-w-[180px] xs:max-w-[220px] sm:max-w-[260px] lg:max-w-[320px] xl:max-w-[380px] mx-auto">
          <ProductImage
            key={slide.id}
            src={slide.image}
            alt={slide.imageAlt}
            className="relative rounded-lg shadow-soft animate-[fade-in_0.5s_ease]"
          />
        </div>
      </Container>
    </section>
  );
}
