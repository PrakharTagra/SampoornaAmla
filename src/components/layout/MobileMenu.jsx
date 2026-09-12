import { Link, NavLink, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import { scrollToSection } from "../../lib/scrollToSection";

export default function MobileMenu({ open, onClose, links }) {
  const location = useLocation();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <button aria-label="Close menu" className="absolute inset-0 z-0 bg-brown/60" onClick={onClose} />
      <div
        className="absolute right-0 top-0 z-10 flex h-full w-[88vw] max-w-[21rem] flex-col overflow-y-auto px-5 py-6 shadow-soft animate-slide-in-right"
        style={{ backgroundColor: "#F7F1E3" }}
      >
        <button
          aria-label="Close menu"
          onClick={onClose}
          className="self-end h-9 w-9 flex items-center justify-center rounded-sm text-brown/70 hover:bg-brown/5"
        >
          <X size={18} />
        </button>
        <nav className="mt-8 flex flex-col gap-1 border-t border-brown/10 pt-3">
          {links.map((link) =>
            link.scrollTarget ? (
              <Link
                key={link.to}
                to={link.to}
                onClick={(e) => {
                  if (location.pathname === "/") {
                    e.preventDefault();
                    scrollToSection(link.scrollTarget);
                  }
                  onClose();
                }}
                className="flex min-h-12 items-center border-b border-brown/10 px-2 text-base font-medium text-brown/80 transition-colors hover:bg-ivory-100 hover:text-forest"
              >
                {link.label}
              </Link>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex min-h-12 items-center border-b border-brown/10 px-2 text-base transition-colors hover:bg-ivory-100 hover:text-forest ${
                    isActive ? "font-medium text-forest" : "text-brown/80"
                  }`
                }
              >
                {link.label}
              </NavLink>
            )
          )}
        </nav>
      </div>
    </div>
  );
}
