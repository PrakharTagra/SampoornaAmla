import { Link } from "react-router-dom";
import { Compass, ArrowRight } from "lucide-react";
import Container from "../components/primitives/Container";
import Button from "../components/primitives/Button";
import PageTransition from "../animations/PageTransition";
import FadeIn from "../animations/FadeIn";

export default function NotFound() {
  return (
    <PageTransition>
      <Container className="py-24 sm:py-36 text-center flex flex-col items-center gap-6 max-w-md mx-auto">
        <FadeIn direction="scale">
          <div className="p-5 rounded-full bg-forest/10 text-forest mb-2">
            <Compass size={54} strokeWidth={1.5} className="animate-spin-slow" />
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={100} className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-amla-200">
            404 Error
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-brown">
            Page Not Found
          </h1>
          <p className="text-sm text-brown/70 leading-relaxed">
            The orchard path you're looking for doesn't exist or may have moved. Let's get you back to pure goodness.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={200} className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button as={Link} to="/" variant="primary" size="md">
            Return to Homepage
          </Button>
          <Button as={Link} to="/products" variant="secondary" size="md" className="gap-2">
            Browse Products <ArrowRight size={14} />
          </Button>
        </FadeIn>
      </Container>
    </PageTransition>
  );
}
