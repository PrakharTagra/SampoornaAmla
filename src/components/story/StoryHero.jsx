import BackgroundImage from "../primitives/BackgroundImage";
import FadeIn from "../../animations/FadeIn";

export default function StoryHero() {
  return (
    <section className="relative min-h-0 overflow-hidden bg-[#f8f1e4] lg:h-[32rem]">
      <div className="relative h-[16rem] w-full sm:h-[20rem] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[70%]">
        <BackgroundImage
            src={hero.image}
          alt="Pratapgarh Amla heritage story and harvest"
          overlay="none"
          imageClassName="object-cover object-right"
        />
      </div>

      <FadeIn direction="up" className="relative z-10 flex w-full flex-col justify-center gap-3 px-6 py-8 sm:px-12 lg:h-full lg:w-[40%] lg:px-[5vw] lg:py-5">
          <h2 className="max-w-2xl font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.08] text-brown">
            {hero.title}
            <br />
            {hero.subtitle}
          </h2>
          <p className="max-w-xl font-sans text-sm sm:text-base text-brown/75 leading-relaxed">
            {hero.description}
          </p>

        <div className="grid max-w-xl grid-cols-3 gap-3 border-t border-brown/15 pt-4 sm:gap-6">
          {hero.stats.map((stat) => (
            <div key={stat.label}>
              <strong className="block font-serif text-3xl sm:text-4xl text-forest">{stat.value}</strong>
              <span className="text-xs text-brown/65">{stat.label}</span>
            </div>
          ))}
        </div>
      </FadeIn>

    </section>
  );
}
