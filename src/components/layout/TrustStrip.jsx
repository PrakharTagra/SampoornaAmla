import { Leaf, MapPin, ShieldCheck, Truck } from "lucide-react";
import Container from "../primitives/Container";
import TrustItem from "../primitives/TrustItem";
import StaggerContainer from "../../animations/StaggerContainer";
import { trustStripData } from "../../data/sitedata";

const ICON_MAP = {
  Leaf,
  MapPin,
  ShieldCheck,
  Truck,
};

export default function TrustStrip() {
  const items = trustStripData.map((item) => ({
    icon: ICON_MAP[item.iconName] || Leaf,
    label: item.label,
  }));

  return (
    <section className="border-y border-brown/10 bg-ivory-50/80 backdrop-blur-sm">
      <Container className="py-3 sm:py-4">
        <StaggerContainer
          staggerDelay={100}
          className="grid grid-cols-2 items-stretch gap-2 sm:gap-6 md:grid-cols-4"
        >
          {items.map((item) => (
            <div key={item.label} className="flex min-h-14 items-center justify-start rounded border border-brown/10 px-2 sm:justify-center sm:px-3">
              <TrustItem icon={item.icon} label={item.label} />
            </div>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
