import { MapPin, TreeDeciduous, Wheat, Factory, ShieldCheck, PackageCheck } from "lucide-react";

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
    <ol className="relative flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-6 gap-x-6 gap-y-10">
      <span className="sm:hidden absolute left-5 top-2 bottom-2 w-px bg-brown/15" aria-hidden="true" />
      <span className="hidden lg:block absolute top-5 left-[calc(100%/12)] right-[calc(100%/12)] h-px bg-brown/15" aria-hidden="true" />

      {STEPS.map((step, i) => (
        <li key={step.title} className="relative flex sm:flex-col gap-4 sm:gap-3 sm:items-center sm:text-center">
          <span className="relative z-[1] shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-ivory border border-brown/15 text-forest">
            <step.icon size={17} strokeWidth={1.75} />
          </span>
          <div className="flex flex-col gap-0.5 pt-1 sm:pt-0">
            <span className="text-xs text-brown/40">
              Step {i + 1} of {STEPS.length}
            </span>
            <span className="font-serif text-lg text-brown">{step.title}</span>
            <span className="text-sm text-brown/60 leading-relaxed sm:max-w-[10rem] sm:mx-auto">
              {step.description}
            </span>
          </div>
        </li>
      ))}
    </ol>
  );
}
