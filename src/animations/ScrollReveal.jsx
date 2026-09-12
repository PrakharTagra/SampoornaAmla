import { useScrollReveal } from "../hooks/useScrollReveal";

/**
 * Viewport-triggered scroll reveal wrapper.
 */
export default function ScrollReveal({
  children,
  animation = "fade-up",
  className = "",
  as: Component = "div",
  ...rest
}) {
  const [ref, isRevealed] = useScrollReveal();

  const getAnimationClass = () => {
    switch (animation) {
      case "fade-left":
        return "fade-left";
      case "fade-right":
        return "fade-right";
      case "fade-scale":
        return "fade-scale";
      case "fade-up":
      default:
        return "";
    }
  };

  return (
    <Component
      ref={ref}
      className={`fade-in-element ${getAnimationClass()} ${isRevealed ? "is-revealed" : ""} ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}
