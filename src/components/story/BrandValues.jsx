import { Landmark, Leaf, Package, HeartHandshake } from "lucide-react";
import Card from "../primitives/Card";
import StaggerContainer from "../../animations/StaggerContainer";

const VALUES = [
  {
    icon: Landmark,
    title: "Authentic Origin",
    description: "Every product traces back directly to indigenous orchards in Pratapgarh.",
  },
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Amla in its most pristine, potent form, without shortcuts or synthetic fillers.",
  },
  {
    icon: Package,
    title: "Careful Packing",
    description: "Protected in hygienic, moisture-locking packages to arrive fresh as harvest.",
  },
  {
    icon: HeartHandshake,
    title: "Customer Trust",
    description: "Honest practices, transparent lab standards, and responsive Indian support.",
  },
];

export default function BrandValues() {
  return (
    <StaggerContainer
      staggerDelay={100}
      className="grid xs:grid-cols-2 lg:grid-cols-4 gap-5"
    >
      {VALUES.map((value) => (
        <Card
          key={value.title}
          className="group flex flex-col gap-3.5 p-6 rounded-lg border border-forest/15 !bg-ivory shadow-sm hover:border-forest/35 hover:shadow-soft hover:-translate-y-1 transition-all duration-300"
        >
          <div className="w-10 h-10 rounded-md bg-amla/10 flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-ivory transition-colors duration-300">
            <value.icon size={20} strokeWidth={1.75} />
          </div>
          <span className="font-serif text-lg font-semibold text-forest">{value.title}</span>
          <span className="text-xs sm:text-sm text-brown/65 leading-relaxed">{value.description}</span>
        </Card>
      ))}
    </StaggerContainer>
  );
}
