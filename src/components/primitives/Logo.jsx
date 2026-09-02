import { useState } from "react";

/**
 * Brand logo used in the Header and Footer.
 *
 * Drop your logo file at /public/images/logo.png (or /images/logo-light.png
 * for a light/reversed version on dark backgrounds like the footer) and it
 * will render automatically. Until an image is added — or if it fails to
 * load — this falls back to the text wordmark so the layout never breaks.
 */
export default function Logo({ variant = "dark", className = "" }) {
  const [errored, setErrored] = useState(false);
  const src = variant === "light" ? "/images/logo-light.png" : "/images/logo.png";

  if (errored) {
    return (
      <span className={`flex flex-col leading-none ${className}`}>
        <span className={`font-serif text-xl sm:text-2xl ${variant === "light" ? "text-ivory" : "text-brown"}`}>
          Pratapgarh Amla
        </span>
        <span
          className={`hidden sm:block text-[10px] tracking-[0.12em] mt-0.5 ${
            variant === "light" ? "text-ivory/60" : "text-amla-200"
          }`}
        >
          Purity, Heritage, Wellness
        </span>
      </span>
    );
  }

  return (
    <img
      src={src}
      alt="Pratapgarh Amla"
      onError={() => setErrored(true)}
      className={`h-9 sm:h-11 w-auto object-contain ${className}`}
    />
  );
}
