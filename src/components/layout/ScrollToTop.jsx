import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToSection } from "../../lib/scrollToSection";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        scrollToSection(id);
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}
