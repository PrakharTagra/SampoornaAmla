import Container from "../components/primitives/Container";
import SectionHeading from "../components/primitives/SectionHeading";

export default function Home() {
  return (
    <Container className="py-24">
      <SectionHeading
        title="From the land of Pratapgarh"
        description="Homepage build begins in Phase 1: hero, trust strip, product collection and the Pratapgarh story."
      />
    </Container>
  );
}
