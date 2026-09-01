import { Leaf } from "lucide-react";
import { useState } from "react";

export default function ProductImage({ src, alt = "", className = "", ratio = "square" }) {
  const [errored, setErrored] = useState(false);
  const ratioClass = ratio === "square" ? "aspect-square" : "aspect-[4/5]";

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
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </div>
  );
}
