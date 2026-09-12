import { useScrollReveal } from "../hooks/useScrollReveal";

/**
 * Directional FadeIn animation component with viewport detection.
 */
export default function FadeIn({
  direction = "up",
  delay = 0,
  duration = 600,
  distance = 16,
  triggerOnce = true,
  className = "",
  as: Component = "div",
  children,
  style: propStyle,
  ...rest
}) {
  const [ref, isRevealed] = useScrollReveal({ triggerOnce });

  const getTransform = () => {
    if (isRevealed) return "none";
    switch (direction) {
      case "up":
        return `translateY(${distance}px)`;
      case "down":
        return `translateY(-${distance}px)`;
      case "left":
        return `translateX(${distance}px)`;
      case "right":
        return `translateX(-${distance}px)`;
      case "scale":
        return "scale(0.95)";
      case "none":
      default:
        return "none";
    }
  };

  const computedStyle = {
    opacity: isRevealed ? 1 : 0,
    transform: getTransform(),
    transitionProperty: "opacity, transform",
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    transitionDelay: `${delay}ms`,
    willChange: "opacity, transform",
    ...propStyle,
  };

  return (
    <Component ref={ref} style={computedStyle} className={className} {...rest}>
      {children}
    </Component>
  );
}
