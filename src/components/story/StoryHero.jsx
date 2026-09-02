import Container from "../primitives/Container";
import ProductImage from "../primitives/ProductImage";

export default function StoryHero() {
  return (
    <section className="relative overflow-hidden bg-ivory">
      <Container className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="flex flex-col gap-5 order-2 lg:order-1">
          <span className="font-sans text-xs tracking-[0.14em] text-amla-200">
            The land behind the Amla
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl leading-[1.1] text-brown">
            Pratapgarh — the city of Aonla
          </h2>
          <p className="font-sans text-base sm:text-lg text-brown/70 max-w-md leading-relaxed">
            Long before it reaches your home, every Amla in this range begins its journey in
            Pratapgarh, Uttar Pradesh — a region shaped by its Aonla orchards.
          </p>
        </div>

        <div className="relative order-1 lg:order-2">
          <ProductImage
            src={null}
            alt="Pratapgarh heritage — fort silhouette over Aonla orchards"
            ratio="wide"
            className="relative rounded-lg shadow-soft"
          />
        </div>
      </Container>
    </section>
  );
}
