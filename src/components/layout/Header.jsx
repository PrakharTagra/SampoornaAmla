import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import Container from "../primitives/Container";
import IconButton from "../primitives/IconButton";
import Logo from "../primitives/Logo";
import { useCart } from "../../hooks/useCart";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { scrollToSection } from "../../lib/scrollToSection";
import MobileMenu from "./MobileMenu";
import { navigation, siteMetadata, products } from "../../data/sitedata";

const NAV_LINKS = navigation.headerLinks;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { itemCount, openDrawer } = useCart();
  const { isScrolled } = useScrollPosition(10);
  const location = useLocation();

  const navLinkClass = ({ isActive }) =>
    `relative text-sm font-medium transition-all duration-200 py-1 ${
      isActive
        ? "text-forest after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-forest after:rounded-full"
        : "text-brown/70 hover:text-brown"
    }`;

  const scrollLinkClass = "relative text-sm font-medium transition-all duration-200 py-1 text-brown/70 hover:text-brown";
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const searchResults = products.filter((product) =>
    `${product.name} ${product.shortDescription} ${product.category}`.toLowerCase().includes(normalizedQuery)
  );

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-ivory/95 backdrop-blur-md shadow-card border-b border-brown/10"
          : "bg-ivory/90 backdrop-blur-sm border-b border-brown/5"
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-1 sm:h-20 transition-all duration-300">
        <NavLink to="/" aria-label={`${siteMetadata.brandName} — home`} className="transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]">
          <Logo imageClassName="h-10 sm:h-14" className="max-w-[11rem] origin-left scale-90 sm:max-w-[13rem] sm:scale-100" />
        </NavLink>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) =>
            link.scrollTarget ? (
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

        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
          <IconButton
            label={searchOpen ? "Close search" : "Search products"}
            className="hover:bg-brown/5"
            onClick={() => setSearchOpen((open) => !open)}
          >
            {searchOpen ? <X size={18} strokeWidth={1.75} /> : <Search size={18} strokeWidth={1.75} />}
          </IconButton>
          <IconButton
            onClick={openDrawer}
            label={`Cart, ${itemCount} item${itemCount === 1 ? "" : "s"}`}
            className="relative hover:bg-brown/5 transition-transform active:scale-95"
          >
            <ShoppingBag size={18} strokeWidth={1.75} />
            {itemCount > 0 ? (
              <span
                key={itemCount}
                className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-forest text-ivory text-[10px] font-semibold flex items-center justify-center animate-fade-in-scale shadow-sm"
              >
                {itemCount}
              </span>
            ) : null}
          </IconButton>
          <IconButton label="Menu" className="lg:hidden hover:bg-brown/5" onClick={() => setMenuOpen(true)}>
            <Menu size={20} strokeWidth={1.75} />
          </IconButton>
        </div>
      </Container>

      {searchOpen ? (
        <div className="absolute left-0 right-0 top-full border-t border-brown/10 bg-ivory shadow-soft">
          <Container className="py-4">
            <label htmlFor="site-search" className="sr-only">Search products</label>
            <div className="flex items-center gap-3 rounded border border-brown/20 bg-white px-3.5 py-2.5">
              <Search size={17} className="shrink-0 text-amla-200" />
              <input
                id="site-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={navigation.searchPlaceholder}
                autoFocus
                className="w-full bg-transparent text-sm text-brown placeholder:text-brown/40 focus:outline-none"
              />
            </div>

            {searchQuery.trim() ? (
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {searchResults.length > 0 ? searchResults.map((product) => (
                  <Link
                    key={product.id}
                    to={`/products/${product.slug}`}
                    onClick={() => setSearchOpen(false)}
                    className="flex items-center gap-3 rounded border border-brown/10 bg-white p-2.5 hover:border-forest/30 hover:bg-ivory-50 transition-colors"
                  >
                    <img src={product.thumbnail} alt="" className="h-12 w-12 rounded object-contain bg-ivory-100" />
                    <span className="text-sm font-medium text-brown">{product.name}</span>
                  </Link>
                )) : (
                  <p className="text-sm text-brown/65">No products found.</p>
                )}
              </div>
            ) : null}
          </Container>
        </div>
      ) : null}

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} links={NAV_LINKS} />
    </header>
  );
}
