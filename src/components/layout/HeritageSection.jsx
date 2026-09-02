import { Link } from "react-router-dom";
import Container from "../primitives/Container";
import Button from "../primitives/Button";
import ProductImage from "../primitives/ProductImage";

export default function HeritageSection() {
  return (
    <section className="py-20 sm:py-24 bg-ivory-50">
      <Container className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="relative">
          <ProductImage src={null} alt="Aonla orchards near Pratapgarh" ratio="wide" className="rounded-lg" />
        </div>

        <div className="flex flex-col gap-5">
          <span className="font-sans text-xs tracking-[0.14em] text-amla-200">Our origin</span>
          <h2 className="font-serif text-3xl sm:text-4xl leading-tight text-brown">
            The land behind the Amla
          </h2>
          <p className="font-sans text-base text-brown/70 leading-relaxed max-w-md">
            Pratapgarh, in Uttar Pradesh, has long been known for its Aonla orchards. Local
            farmers tend the trees through the season, and the fruit is sourced directly from
            these orchards before it reaches your home.
          </p>
          <p className="font-sans text-base text-brown/70 leading-relaxed max-w-md">
            We work to keep that connection to the land visible in every pack — from harvest,
            to processing, to the box that reaches your door.
          </p>
          <Button as={Link} to="/story" variant="secondary" size="md" className="w-fit mt-2">
            Discover Our Story
          </Button>
        </div>
      </Container>
    </section>
  );
}
