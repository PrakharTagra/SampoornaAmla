import { useState } from "react";

const OVERLAYS = {
  none: "",
  dark: "bg-brown/50",
  darker: "bg-brown/70",
  light: "bg-ivory-50/85",
  "left-fade": "bg-gradient-to-r from-brown/80 via-brown/40 to-transparent",
  "bottom-fade": "bg-gradient-to-t from-brown/70 via-brown/10 to-transparent",
  forest: "bg-forest/70",
};
export default function BackgroundImage({ src, alt = "", overlay = "dark", className = "", imageClassName = "object-cover" }) {
  const [errored, setErrored] = useState(false);
  const overlayClass = OVERLAYS[overlay] ?? OVERLAYS.dark;

  return (
    <div className={`absolute inset-0 ${className}`} aria-hidden={alt ? undefined : "true"}>
      {src && !errored ? (
        <img
          src={src}
          alt={alt}
          onError={() => setErrored(true)}
          className={`h-full w-full ${imageClassName}`}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div className="h-full w-full bg-[radial-gradient(circle_at_30%_20%,theme(colors.amla.50),theme(colors.forest.200))]" />
      )}
      {overlayClass ? <div className={`absolute inset-0 ${overlayClass}`} /> : null}
    </div>
  );
}
