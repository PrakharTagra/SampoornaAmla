import { useParams } from "react-router-dom";
import Container from "../components/primitives/Container";
import SectionHeading from "../components/primitives/SectionHeading";

export default function ProductDetail() {
  const { slug } = useParams();

  return (
    <Container className="py-24">
      <SectionHeading
        title={`Product: ${slug}`}
        description="The full product detail layout is built in Phase 3."
      />
    </Container>
  );
}
