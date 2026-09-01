import Container from "../components/primitives/Container";
import SectionHeading from "../components/primitives/SectionHeading";

export default function Checkout() {
  return (
    <Container className="py-24">
      <SectionHeading
        title="Checkout"
        description="The delivery, payment and order summary flow is built in Phase 6."
      />
    </Container>
  );
}
