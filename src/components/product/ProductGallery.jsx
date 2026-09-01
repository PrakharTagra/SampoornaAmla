import { useState } from "react";
import ProductImage from "../primitives/ProductImage";

export default function ProductGallery({ images = [], name, ratio = "square" }) {
  const safeImages = images.length > 0 ? images : [null];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      <ProductImage src={safeImages[activeIndex]} alt={name} ratio={ratio} className="rounded-md" />
      {safeImages.length > 1 ? (
        <div className="flex gap-2" role="tablist" aria-label={`${name} images`}>
          {safeImages.map((img, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`View image ${i + 1} of ${name}`}
              onClick={() => setActiveIndex(i)}
              className={`h-14 w-14 shrink-0 rounded-sm overflow-hidden border transition-[border-color,transform] duration-200 active:scale-[0.94] motion-reduce:active:scale-100 ${
                i === activeIndex ? "border-forest" : "border-brown/15 hover:border-brown/35"
              }`}
            >
              <ProductImage src={img} alt="" ratio="square" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
