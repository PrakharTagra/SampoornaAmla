import { useState } from "react";
import ProductImage from "../primitives/ProductImage";

export default function ProductGallery({ images = [], name, ratio = "square", fit }) {
  const safeImages = images.length > 0 ? images : [null];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      <div key={activeIndex} className="animate-fade-in overflow-hidden rounded-lg">
        <ProductImage
          src={safeImages[activeIndex]}
          alt={name}
          ratio={ratio}
          fit={fit}
          className="rounded-lg shadow-sm"
          zoom
        />
      </div>
      {safeImages.length > 1 ? (
        <div className="flex flex-wrap gap-2.5 py-1" role="tablist" aria-label={`${name} images`}>
          {safeImages.map((img, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === activeIndex}
              aria-label={`View image ${i + 1} of ${name}`}
              onClick={() => setActiveIndex(i)}
              className={`h-14 w-14 rounded-md overflow-hidden border-2 transition-all duration-200 active:scale-95 ${
                i === activeIndex
                  ? "border-forest shadow-sm scale-105"
                  : "border-brown/15 opacity-70 hover:opacity-100 hover:border-brown/40"
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
