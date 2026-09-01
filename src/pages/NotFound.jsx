import { Link } from "react-router-dom";
import Container from "../components/primitives/Container";
import Button from "../components/primitives/Button";

export default function NotFound() {
  return (
    <Container className="py-32 text-center flex flex-col items-center gap-5">
      <h1 className="font-serif text-4xl text-brown">Page not found</h1>
      <p className="text-brown/70 max-w-md">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Button as={Link} to="/">
        Back to home
      </Button>
    </Container>
  );
}
