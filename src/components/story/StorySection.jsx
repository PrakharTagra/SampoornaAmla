import Container from "../primitives/Container";
import ProductImage from "../primitives/ProductImage";

export default function StorySection({ eyebrow, title, children, image, imageAlt, imageSide = "right", className = "" }) {
  const imageFirst = imageSide === "left";

  return (
    <section className={`py-16 sm:py-20 ${className}`}>
      <Container className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className={`relative ${imageFirst ? "lg:order-1" : "lg:order-2"}`}>
          <ProductImage src={image} alt={imageAlt} ratio="wide" className="rounded-lg shadow-soft" />
        </div>

        <div className={`flex flex-col gap-5 ${imageFirst ? "lg:order-2" : "lg:order-1"}`}>
          {eyebrow ? (
            <span className="font-sans text-xs tracking-[0.14em] text-amla-200">{eyebrow}</span>
          ) : null}
          <h2 className="font-serif text-3xl sm:text-4xl leading-tight text-brown">{title}</h2>
          <div className="flex flex-col gap-4 font-sans text-base text-brown/70 leading-relaxed max-w-md">
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}
