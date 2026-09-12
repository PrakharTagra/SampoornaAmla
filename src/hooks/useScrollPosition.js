import { useEffect, useState } from "react";

/**
 * Tracks window scroll position and scroll direction.
 */
export function useScrollPosition(threshold = 20) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > threshold);

      if (currentScrollY > lastScrollY && currentScrollY > threshold) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }
      lastScrollY = currentScrollY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return { isScrolled, scrollY, scrollDirection };
}
