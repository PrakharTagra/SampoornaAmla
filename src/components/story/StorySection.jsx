import Container from "../primitives/Container";
import ProductImage from "../primitives/ProductImage";
import FadeIn from "../../animations/FadeIn";

export default function StorySection({
  eyebrow,
  title,
  children,
  image,
  imageAlt,
  imageSide = "right",
  className = "",
}) {
  const imageFirst = imageSide === "left";

  return (
    <section className={`py-16 sm:py-24 overflow-hidden ${className}`}>
      <Container className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <FadeIn
          direction={imageFirst ? "left" : "right"}
          className={`relative ${imageFirst ? "lg:order-1" : "lg:order-2"}`}
        >
          <div className="overflow-hidden rounded-xl shadow-soft border border-brown/10 group">
            <ProductImage
              src={image}
              alt={imageAlt}
              ratio="wide"
              className="rounded-xl transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </FadeIn>

        <FadeIn
          direction={imageFirst ? "right" : "left"}
          className={`flex flex-col gap-5 ${imageFirst ? "lg:order-2" : "lg:order-1"}`}
        >
          {eyebrow ? (
            <span className="font-sans text-xs tracking-[0.16em] uppercase text-amla-200 font-semibold">
              {eyebrow}
            </span>
          ) : null}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight text-brown">
            {title}
          </h2>
          <div className="flex flex-col gap-4 font-sans text-base text-brown/75 leading-relaxed max-w-lg">
            {children}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
