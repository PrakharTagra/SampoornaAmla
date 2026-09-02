import Container from "../primitives/Container";
import BackgroundImage from "../primitives/BackgroundImage";

export default function StoryHero() {
  return (
    <section className="relative overflow-hidden min-h-[36rem] sm:min-h-[40rem] flex items-center">
      <BackgroundImage
        src="/images/story/1.png"
        alt="Pratapgarh heritage — fort silhouette over Aonla orchards"
        overlay="dark"
      />

      <Container className="relative z-10 py-16 sm:py-20">
        <div className="flex flex-col gap-5 max-w-2xl">
          <span className="font-sans text-xs tracking-[0.14em] text-gold-50">
            The land behind the Amla
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl leading-[1.1] text-ivory">
            Pratapgarh — the city of Aonla
          </h2>
          <p className="font-sans text-base sm:text-lg text-ivory/80 max-w-md leading-relaxed">
            Long before it reaches your home, every Amla in this range begins its journey in
            Pratapgarh, Uttar Pradesh — a region shaped by its Aonla orchards.
          </p>
        </div>
      </Container>
    </section>
  );
}
