import { Link, useLocation } from "react-router-dom";
import Container from "../primitives/Container";
import Divider from "../primitives/Divider";
import Logo from "../primitives/Logo";
import { scrollToSection } from "../../lib/scrollToSection";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { to: "/products", label: "All Products" },
      { to: "/products/pure-amla", label: "Pure Amla" },
      { to: "/products/amla-powder", label: "Amla Powder" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/#story", label: "Our Story", scrollTarget: "story" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { to: "/cart", label: "Cart" },
      { to: "/checkout", label: "Checkout" },
    ],
  },
];

export default function Footer() {
  const location = useLocation();

  return (
    <footer className="bg-forest text-ivory mt-8">
      <Container className="py-14 grid grid-cols-2 sm:grid-cols-4 gap-10">
        <div className="col-span-2 sm:col-span-1">
          <Logo variant="light" />
          <p className="text-sm text-ivory/70 mt-3 leading-relaxed max-w-xs">
            Pure Amla from the city of Aonla, brought to every home in India.
          </p>
        </div>
        {COLUMNS.map((col) => (
          <div key={col.title} className="flex flex-col gap-3">
            <span className="text-sm font-medium text-gold-50">{col.title}</span>
            {col.links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={(e) => {
                  if (link.scrollTarget && location.pathname === "/") {
                    e.preventDefault();
                    scrollToSection(link.scrollTarget);
                  }
                }}
                className="text-sm text-ivory/70 hover:text-ivory transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </Container>
      <Divider className="border-ivory/15" />
      <Container className="py-6 text-xs text-ivory/50">
        © {new Date().getFullYear()} Pratapgarh Amla. All rights reserved.
      </Container>
    </footer>
  );
}
