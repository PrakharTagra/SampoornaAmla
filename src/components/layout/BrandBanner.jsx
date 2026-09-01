import HeritageMotif from "./HeritageMotif";

export default function BrandBanner() {
  return (
    <section className="relative overflow-hidden bg-forest text-ivory py-16 sm:py-20">
      <HeritageMotif
        tone="ivory"
        className="absolute inset-x-0 bottom-0 w-full h-20 sm:h-28 opacity-15 pointer-events-none"
      />
      <div className="relative container-page text-center flex flex-col items-center gap-2">
        <h2 className="font-serif text-2xl sm:text-3xl">From the heart of Pratapgarh</h2>
        <p className="font-sans text-sm sm:text-base text-ivory/70">To every home in India.</p>
      </div>
    </section>
  );
}
