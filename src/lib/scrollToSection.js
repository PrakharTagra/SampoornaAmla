// Shared by any nav link that points at an in-page section (e.g. "Our
// Story" on the homepage) rather than a separate route, so Header,
// MobileMenu and Footer don't each reimplement the same scrollIntoView call.
export function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
