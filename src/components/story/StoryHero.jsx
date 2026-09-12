import BackgroundImage from "../primitives/BackgroundImage";
import FadeIn from "../../animations/FadeIn";

export default function StoryHero() {
  return (
    <section className="relative min-h-0 overflow-hidden bg-[#f8f1e4] lg:h-[32rem]">
      <div className="relative h-[16rem] w-full sm:h-[20rem] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[70%]">
        <BackgroundImage
          src="/Amla%20Ecom%20store%20images/Amla%20Ecom%20store%20images/Other/Our%20Story%20New.png"
          alt="Pratapgarh Amla heritage story and harvest"
          overlay="none"
          imageClassName="object-cover object-right"
        />
      </div>

      <FadeIn direction="up" className="relative z-10 flex w-full flex-col justify-center gap-3 px-6 py-8 sm:px-12 lg:h-full lg:w-[40%] lg:px-[5vw] lg:py-5">
        <h2 className="max-w-2xl font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.08] text-brown">
          The Land of Pratapgarh
          <br />
          India&apos;s Amla Capital
        </h2>
        <p className="max-w-xl font-sans text-sm sm:text-base text-brown/75 leading-relaxed">
          For centuries, Pratapgarh has been blessed with the perfect climate and soil to nurture the finest Amla in India. Our products come from trusted local growers who follow traditional and mindful farming practices.
        </p>

        <div className="grid max-w-xl grid-cols-3 gap-3 border-t border-brown/15 pt-4 sm:gap-6">
            <div>
              <strong className="block font-serif text-3xl sm:text-4xl text-forest">100+</strong>
              <span className="text-xs text-brown/65">Years of Legacy</span>
            </div>
            <div>
              <strong className="block font-serif text-3xl sm:text-4xl text-forest">1000+</strong>
              <span className="text-xs text-brown/65">Local Farmers</span>
            </div>
            <div>
              <strong className="block font-serif text-3xl sm:text-4xl text-forest">100%</strong>
              <span className="text-xs text-brown/65">Natural Farming</span>
            </div>
        </div>
      </FadeIn>

    </section>
  );
}
