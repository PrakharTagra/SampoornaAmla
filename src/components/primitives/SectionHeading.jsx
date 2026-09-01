export default function SectionHeading({ eyebrow, title, description, align = "left", className = "" }) {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 max-w-2xl ${alignClass} ${className}`}>
      {eyebrow ? (
        <span className="font-sans text-xs tracking-[0.14em] text-amla-200">{eyebrow}</span>
      ) : null}
      <h2 className="font-serif text-3xl sm:text-4xl leading-tight text-brown">{title}</h2>
      {description ? (
        <p className="font-sans text-sm sm:text-base text-brown/70 leading-relaxed">{description}</p>
      ) : null}
    </div>
  );
}
