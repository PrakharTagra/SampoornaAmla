import { Link, NavLink, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import { scrollToSection } from "../../lib/scrollToSection";

export default function MobileMenu({ open, onClose, links }) {
  const location = useLocation();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <button aria-label="Close menu" className="absolute inset-0 bg-brown/60" onClick={onClose} />
      <div className="relative ml-auto h-full w-72 max-w-[80vw] bg-ivory shadow-soft flex flex-col p-6">
        <button
          aria-label="Close menu"
          onClick={onClose}
          className="self-end h-9 w-9 flex items-center justify-center rounded-sm text-brown/70 hover:bg-brown/5"
        >
          <X size={18} />
        </button>
        <nav className="flex flex-col gap-1 mt-6">
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
                className="py-3 border-b border-brown/10 text-base text-brown/80"
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
                  `py-3 border-b border-brown/10 text-base ${
                    isActive ? "text-forest font-medium" : "text-brown/80"
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
