import { Leaf, MapPin, ShieldCheck, Truck } from "lucide-react";
import Container from "../primitives/Container";
import TrustItem from "../primitives/TrustItem";

const ITEMS = [
  { icon: Leaf, label: "100% Natural" },
  { icon: MapPin, label: "From Pratapgarh" },
  { icon: ShieldCheck, label: "Quality Assured" },
  { icon: Truck, label: "Pan-India Delivery" },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-brown/10 bg-ivory-50">
      <Container className="py-5 flex flex-wrap items-center justify-between gap-x-8 gap-y-3">
        {ITEMS.map((item) => (
          <TrustItem key={item.label} icon={item.icon} label={item.label} />
        ))}
      </Container>
    </section>
  );
}
