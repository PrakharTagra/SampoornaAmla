import { Leaf, MapPin, ShieldCheck, Truck } from "lucide-react";
import Container from "../primitives/Container";
import TrustItem from "../primitives/TrustItem";
import StaggerContainer from "../../animations/StaggerContainer";
import { trustStripData } from "../../data/sitedata";

const ICON_MAP = { Leaf, MapPin, ShieldCheck, Truck };

export default function TrustStrip() {
  const items = trustStripData.map((item) => ({
    icon: ICON_MAP[item.iconName] || Leaf,
    label: item.label,
  }));

  return (
    <section className="h-[7rem] border-y border-brown/10 bg-ivory-50/80 backdrop-blur-sm sm:h-[5.5rem] md:h-[4.5rem]">
      <Container className="h-full py-2 sm:py-3">
        <StaggerContainer
          staggerDelay={100}
          className="grid h-full grid-cols-2 items-center gap-2 sm:gap-4 md:grid-cols-4 md:gap-6"
        >
          {items.map((item) => (
            <div key={item.label} className="flex h-full min-w-0 items-center justify-center">
              <TrustItem
                icon={item.icon}
                label={item.label}
                className="w-full justify-center"
                labelClassName="text-center text-xs sm:text-sm"
              />
            </div>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
