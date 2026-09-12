export function scrollToSection(id) {
  const section = document.getElementById(id);
  if (!section) return;

  const headerHeight = document.querySelector("header")?.offsetHeight ?? 0;
  const sectionTop = section.getBoundingClientRect().top + window.scrollY;
  const targetTop = Math.max(0, sectionTop - headerHeight - 12);

  window.scrollTo({ top: targetTop, behavior: "smooth" });
}
