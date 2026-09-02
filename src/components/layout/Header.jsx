import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu } from "lucide-react";
import Container from "../primitives/Container";
import IconButton from "../primitives/IconButton";
import { useCart } from "../../context/CartContext";
import { scrollToSection } from "../../lib/scrollToSection";
import MobileMenu from "./MobileMenu";

const NAV_LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/products", label: "Products" },
  { to: "/#story", label: "Our Story", scrollTarget: "story" },
  { to: "/about", label: "About Pratapgarh" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { itemCount, openDrawer } = useCart();
  const location = useLocation();

  const navLinkClass = ({ isActive }) =>
    `text-sm transition-colors duration-200 ${
      isActive ? "text-forest font-medium" : "text-brown/70 hover:text-brown"
    }`;

  const scrollLinkClass = "text-sm transition-colors duration-200 text-brown/70 hover:text-brown";

  return (
    <header className="sticky top-0 z-40 bg-ivory/95 backdrop-blur border-b border-brown/10">
      <Container className="flex items-center justify-between h-16 sm:h-20">
        <NavLink to="/" className="flex flex-col leading-none">
          <span className="font-serif text-xl sm:text-2xl text-brown">Pratapgarh Amla</span>
          <span className="hidden sm:block text-[10px] tracking-[0.12em] text-amla-200 mt-0.5">
            Purity, Heritage, Wellness
          </span>
        </NavLink>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) =>
            link.scrollTarget ? (
              // Section link, not a route: on the homepage this scrolls in
              // place; from anywhere else it navigates to "/#..." and Home's
              // own hash effect scrolls once the section has mounted.
              <Link
                key={link.to}
                to={link.to}
                className={scrollLinkClass}
                onClick={(e) => {
                  if (location.pathname === "/") {
                    e.preventDefault();
                    scrollToSection(link.scrollTarget);
                  }
                }}
              >
                {link.label}
              </Link>
            ) : (
              <NavLink key={link.to} to={link.to} end={link.end} className={navLinkClass}>
                {link.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="flex items-center gap-1">
          <IconButton label="Search" className="hidden sm:inline-flex">
            <Search size={18} strokeWidth={1.75} />
          </IconButton>
          <IconButton onClick={openDrawer} label={`Cart, ${itemCount} item${itemCount === 1 ? "" : "s"}`} className="relative">
            <ShoppingBag size={18} strokeWidth={1.75} />
            {itemCount > 0 ? (
              <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-forest text-ivory text-[10px] flex items-center justify-center">
                {itemCount}
              </span>
            ) : null}
          </IconButton>
          <IconButton label="Menu" className="lg:hidden" onClick={() => setMenuOpen(true)}>
            <Menu size={20} strokeWidth={1.75} />
          </IconButton>
        </div>
      </Container>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} links={NAV_LINKS} />
    </header>
  );
}
