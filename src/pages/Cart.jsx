import Container from "../components/primitives/Container";
import SectionHeading from "../components/primitives/SectionHeading";

export default function Cart() {
  return (
    <Container className="py-24">
      <SectionHeading
        title="Your cart"
        description="Cart logic, persistence and the cart drawer are built in Phase 5."
      />
    </Container>
  );
}
