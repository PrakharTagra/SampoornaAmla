import { useState } from "react";

/**
 * Brand logo used in the Header and Footer.
 * Renders the official Pratapgarh Amla emblem alongside brand typography.
 */
export default function Logo({ variant = "dark", className = "", imageClassName = "", showText = true }) {
  const [errored, setErrored] = useState(false);
  const isLight = variant === "light";

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 leading-none ${className}`}>
      {!errored ? (
        <img
          src="/ChatGPT%20Image%20Sep%2012,%202026,%2012_01_40%20PM.png"
          alt="Amla Sampurna logo"
          onError={() => setErrored(true)}
          className={`h-14 sm:h-16 w-auto object-contain transition-transform duration-200 ${imageClassName} ${
            isLight ? "drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] brightness-105" : ""
          }`}
        />
      ) : null}
      {showText ? (
        <div className="flex flex-col">
          <span className={`font-serif text-xl sm:text-2xl font-bold tracking-tight ${isLight ? "text-ivory" : "text-brown"}`}>
            Amla Sampurna
          </span>
          <span className={`text-[10px] sm:text-xs tracking-[0.15em] uppercase font-semibold mt-0.5 ${isLight ? "text-gold-50" : "text-amla-200"}`}>
            Pure · Natural · Authentic
          </span>
        </div>
      ) : null}
    </div>
  );
}
