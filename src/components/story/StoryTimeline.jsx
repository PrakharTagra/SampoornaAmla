import { MapPin, TreeDeciduous, Wheat, Factory, ShieldCheck, PackageCheck } from "lucide-react";
import StaggerContainer from "../../animations/StaggerContainer";

const STEPS = [
  { icon: MapPin, title: "Pratapgarh", description: "Where the journey begins, in Uttar Pradesh." },
  { icon: TreeDeciduous, title: "Amla Farms", description: "Sourced from the region's Aonla orchards." },
  { icon: Wheat, title: "Harvest", description: "Fruit is gathered through the growing season." },
  { icon: Factory, title: "Processing", description: "Cleaned and prepared for each product form." },
  { icon: ShieldCheck, title: "Quality Check", description: "Checked before it's approved for packing." },
  { icon: PackageCheck, title: "Packed for India", description: "Sealed and readied for delivery nationwide." },
];

export default function StoryTimeline() {
  return (
    <div className="relative">
      <span className="sm:hidden absolute left-5 top-2 bottom-2 w-px bg-brown/20" aria-hidden="true" />
      <span className="hidden lg:block absolute top-5 left-[calc(100%/12)] right-[calc(100%/12)] h-px bg-brown/20" aria-hidden="true" />

      <StaggerContainer
        staggerDelay={120}
        as="ol"
        className="relative flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-6 gap-x-6 gap-y-10"
      >
        {STEPS.map((step, i) => (
          <li key={step.title} className="relative flex sm:flex-col gap-4 sm:gap-3 sm:items-center sm:text-center group rounded-lg border border-forest/15 bg-ivory p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-forest/35 hover:shadow-soft">
            <span className="relative z-[1] shrink-0 flex h-11 w-11 items-center justify-center rounded-full bg-ivory border-2 border-forest text-forest shadow-sm group-hover:scale-110 group-hover:bg-forest group-hover:text-ivory transition-all duration-300">
              <step.icon size={18} strokeWidth={1.75} />
            </span>
            <div className="flex flex-col gap-1 pt-1 sm:pt-0">
              <span className="text-[11px] font-semibold tracking-wider uppercase text-amla-200">
                Step {i + 1}
              </span>
              <span className="font-serif text-lg font-semibold text-forest">{step.title}</span>
              <span className="text-xs sm:text-sm text-brown/65 leading-relaxed sm:max-w-[10rem] sm:mx-auto">
                {step.description}
              </span>
            </div>
          </li>
        ))}
      </StaggerContainer>
    </div>
  );
}
