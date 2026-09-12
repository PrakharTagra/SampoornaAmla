import { Leaf } from "lucide-react";
import { useState } from "react";

const RATIOS = {
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  wide: "aspect-[16/10]",
};

export default function ProductImage({
  src,
  alt = "",
  className = "",
  ratio = "square",
  zoom = false,
  fit,
}) {
  const [errored, setErrored] = useState(false);
  const ratioClass = RATIOS[ratio] || RATIOS.square;

  if (!src || errored) {
    return (
      <div className={`${ratioClass} w-full bg-ivory-100 flex items-center justify-center rounded-md ${className}`}>
        <Leaf className="text-amla/40" size={32} strokeWidth={1.5} />
      </div>
    );
  }

  const isWide = ratio === "wide";
  const actualFit = fit ? fit : isWide ? "cover" : "contain";
  const fitClass = actualFit === "cover" ? "object-cover" : "object-contain p-3";
  const bgClass = actualFit === "cover" ? "bg-ivory-100" : "bg-white/80";

  return (
    <div className={`${ratioClass} w-full overflow-hidden ${bgClass} flex items-center justify-center rounded-md ${className}`}>
      <img
        src={src}
        alt={alt}
        onError={() => setErrored(true)}
        className={`h-full w-full ${fitClass} transition-transform duration-500 motion-reduce:transition-none ${
          zoom ? "group-hover:scale-105" : ""
        }`}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
