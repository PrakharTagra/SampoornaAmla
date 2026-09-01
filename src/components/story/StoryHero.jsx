import Container from "../primitives/Container";
import ProductImage from "../primitives/ProductImage";
import HeritageMotif from "../layout/HeritageMotif";

// Section 17: hero kicker "THE LAND BEHIND THE AMLA", headline "PRATAPGARH —
// THE CITY OF AONLA", and "a large heritage visual" — unlike the homepage
// Hero (where the product photo leads and the motif is a small corner
// accent), this page's job is to introduce Pratapgarh itself, so the
// heritage visual is the larger, primary image here.
export default function StoryHero() {
  return (
    <section className="relative overflow-hidden bg-ivory">
      <Container className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-14 sm:py-20 lg:py-24">
        <div className="flex flex-col gap-5 order-2 lg:order-1">
          <span className="font-sans text-xs tracking-[0.14em] text-amla-200">
            The land behind the Amla
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl leading-[1.1] text-brown">
            Pratapgarh — the city of Aonla
          </h1>
          <p className="font-sans text-base sm:text-lg text-brown/70 max-w-md leading-relaxed">
            Long before it reaches your home, every Amla in this range begins its journey in
            Pratapgarh, Uttar Pradesh — a region shaped by its Aonla orchards.
          </p>
        </div>

        <div className="relative order-1 lg:order-2">
          <HeritageMotif className="absolute -bottom-6 -right-6 w-56 sm:w-64 h-auto text-gold/20 opacity-80 pointer-events-none" />
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
