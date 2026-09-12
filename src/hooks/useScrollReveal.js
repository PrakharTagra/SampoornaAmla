import { useEffect, useRef, useState } from "react";

/**
 * Hook to reveal elements smoothly when they enter the viewport.
 * Uses IntersectionObserver with fallback for older environments or reduced motion.
 */
export function useScrollReveal(options = {}) {
  const {
    threshold = 0.1,
    rootMargin = "0px 0px -40px 0px",
    triggerOnce = true,
  } = options;

  const ref = useRef(null);
  const [isRevealed, setIsRevealed] = useState(() => {
    if (typeof window !== "undefined") {
      if (
        window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
        typeof IntersectionObserver === "undefined"
      ) {
        return true;
      }
    }
    return false;
  });

  useEffect(() => {
    if (isRevealed && triggerOnce) return;

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          if (triggerOnce) {
            observer.unobserve(node);
          }
        } else if (!triggerOnce) {
          setIsRevealed(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, isRevealed]);

  return [ref, isRevealed];
}
