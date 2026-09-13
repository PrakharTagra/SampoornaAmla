import { useState } from "react";
import { siteImages, siteMetadata } from "../../data/sitedata";

/**
 * Brand logo used in the Header and Footer.
 * Renders the official emblem alongside brand typography,
 * both controlled directly from sitedata.js.
 */
export default function Logo({ variant = "dark", className = "", imageClassName = "", showText = true }) {
  const [imgSrc, setImgSrc] = useState(siteImages.logo);
  const [errored, setErrored] = useState(false);
  const isLight = variant === "light";

  const handleImgError = () => {
    if (imgSrc !== siteImages.logoFallback) {
      setImgSrc(siteImages.logoFallback);
    } else {
      setErrored(true);
    }
  };

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 leading-none ${className}`}>
      {!errored ? (
        <img
          src={imgSrc}
          alt={`${siteMetadata.brandName} logo`}
          onError={handleImgError}
          className={`${imageClassName || "h-10 sm:h-14"} w-auto object-contain transition-transform duration-200 ${
            isLight ? "drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] brightness-105" : ""
          }`}
        />
      ) : null}
      {showText ? (
        <div className="flex flex-col">
          <span className={`font-serif text-lg sm:text-2xl font-bold tracking-tight ${isLight ? "text-ivory" : "text-brown"}`}>
            {siteMetadata.brandName}
          </span>
          <span className={`text-[8px] sm:text-xs tracking-[0.15em] uppercase font-semibold mt-0.5 ${isLight ? "text-gold-50" : "text-amla-200"}`}>
            {siteMetadata.emblemTagline}
          </span>
        </div>
      ) : null}
    </div>
  );
}
