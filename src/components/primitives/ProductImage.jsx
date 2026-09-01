import { Leaf } from "lucide-react";
import { useState } from "react";

const RATIOS = {
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  wide: "aspect-[4/3]",
};

export default function ProductImage({ src, alt = "", className = "", ratio = "square", zoom = false }) {
  const [errored, setErrored] = useState(false);
  const ratioClass = RATIOS[ratio] || RATIOS.square;

  if (!src || errored) {
    return (
      <div className={`${ratioClass} w-full bg-ivory-200 flex items-center justify-center ${className}`}>
        <Leaf className="text-amla/40" size={32} strokeWidth={1.5} />
      </div>
    );
  }

  return (
    <div className={`${ratioClass} w-full overflow-hidden bg-ivory-200 ${className}`}>
      <img
        src={src}
        alt={alt}
        onError={() => setErrored(true)}
        className={`h-full w-full object-cover transition-transform duration-500 motion-reduce:transition-none ${
          zoom ? "group-hover:scale-105" : ""
        }`}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
