import { Leaf, MapPin, ShieldCheck, Truck } from "lucide-react";
import Container from "../primitives/Container";
import TrustItem from "../primitives/TrustItem";
import StaggerContainer from "../../animations/StaggerContainer";

const ITEMS = [
  { icon: Leaf, label: "100% Natural" },
  { icon: MapPin, label: "From Pratapgarh Orchards" },
  { icon: ShieldCheck, label: "Quality Assured" },
  { icon: Truck, label: "Pan-India Fresh Delivery" },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-brown/10 bg-ivory-50/80 backdrop-blur-sm">
      <Container className="py-4">
        <StaggerContainer
          staggerDelay={100}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center"
        >
          {ITEMS.map((item) => (
            <div key={item.label} className="flex justify-start sm:justify-center">
              <TrustItem icon={item.icon} label={item.label} />
            </div>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
