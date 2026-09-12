import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

/**
 * Automatically applies staggered fade-in animations to direct children.
 */
export default function StaggerContainer({
  children,
  staggerDelay = 90,
  baseDelay = 0,
  direction = "up",
  duration = 550,
  className = "",
  as: Component = "div",
  ...rest
}) {
  const [ref, isRevealed] = useScrollReveal({ triggerOnce: true });

  return (
    <Component ref={ref} className={className} {...rest}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;

        const delay = baseDelay + index * staggerDelay;

        const getTransform = () => {
          if (isRevealed) return "none";
          switch (direction) {
            case "up":
              return "translateY(16px)";
            case "down":
              return "translateY(-16px)";
            case "scale":
              return "scale(0.96)";
            case "none":
            default:
              return "none";
          }
        };

        const itemStyle = {
          opacity: isRevealed ? 1 : 0,
          transform: getTransform(),
          transitionProperty: "opacity, transform",
          transitionDuration: `${duration}ms`,
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          transitionDelay: `${delay}ms`,
          willChange: "opacity, transform",
        };

        return (
          <div style={itemStyle} className="h-full">
            {child}
          </div>
        );
      })}
    </Component>
  );
}
