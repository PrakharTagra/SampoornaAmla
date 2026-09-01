import { Landmark, Leaf, Package, HeartHandshake } from "lucide-react";
import Card from "../primitives/Card";

const VALUES = [
  { icon: Landmark, title: "Authentic Origin", description: "Every product traces back to Pratapgarh." },
  { icon: Leaf, title: "Natural Products", description: "Amla in its natural form, without shortcuts." },
  { icon: Package, title: "Careful Packing", description: "Packed to reach you the way it left the farm." },
  { icon: HeartHandshake, title: "Customer Trust", description: "Built one order, one home, at a time." },
];

export default function BrandValues() {
  return (
    <div className="grid xs:grid-cols-2 lg:grid-cols-4 gap-4">
      {VALUES.map((value) => (
        <Card key={value.title} className="flex flex-col gap-3 p-6">
          <value.icon className="text-amla-200" size={22} strokeWidth={1.5} />
          <span className="font-serif text-lg text-brown">{value.title}</span>
          <span className="text-sm text-brown/60 leading-relaxed">{value.description}</span>
        </Card>
      ))}
    </div>
  );
}
