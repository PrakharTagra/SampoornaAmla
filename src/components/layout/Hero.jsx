import { Leaf, MapPin, Truck } from "lucide-react";
import Container from "../primitives/Container";
import Button from "../primitives/Button";
import ProductImage from "../primitives/ProductImage";
import HeritageMotif from "./HeritageMotif";

const ATTRIBUTES = [
  { icon: Leaf, label: "100% Natural" },
  { icon: MapPin, label: "Carefully Sourced" },
  { icon: Truck, label: "Pan-India Delivery" },
];

export default function Hero() {
  const scrollToCollection = () => {
    document.getElementById("collection")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-ivory">
      <Container className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col gap-6 order-2 lg:order-1">
          <span className="font-sans text-xs tracking-[0.14em] text-amla-200">
            From the land of Pratapgarh
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] text-brown">
            Comes nature&rsquo;s gift
          </h1>
          <p className="font-sans text-base sm:text-lg text-brown/70 max-w-md leading-relaxed">
            Pure Amla from the city of Aonla, brought to every home in India.
          </p>

          <div className="flex flex-col xs:flex-row flex-wrap gap-x-6 gap-y-3 pt-1">
            {ATTRIBUTES.map((attr) => (
              <div key={attr.label} className="flex items-center gap-2 text-sm text-brown/75">
                <attr.icon size={16} className="text-amla-200" strokeWidth={1.75} />
                {attr.label}
              </div>
            ))}
          </div>

          <Button size="lg" className="w-fit mt-2" onClick={scrollToCollection}>
            Shop Amla
          </Button>
        </div>

        <div className="relative order-1 lg:order-2">
          <HeritageMotif className="absolute -bottom-4 -right-4 w-48 h-auto text-brown/10 opacity-40 pointer-events-none" />
          <ProductImage
            src={null}
            alt="Pratapgarh Amla — fresh Amla fruit"
            className="relative rounded-lg shadow-soft"
          />
        </div>
      </Container>
    </section>
  );
}
