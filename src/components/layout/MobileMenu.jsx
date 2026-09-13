import { Link, NavLink, useLocation } from "react-router-dom";
import { X, Home, Package, Info, BookOpen, Phone, ArrowRight } from "lucide-react";
import { scrollToSection } from "../../lib/scrollToSection";
import Logo from "../primitives/Logo";
import { siteMetadata } from "../../data/sitedata";

const ICON_MAP = {
  "/": Home,
  "/products": Package,
  "/about": Info,
  "/#story": BookOpen,
  "/contact": Phone,
};

const DELAY_CLASSES = ["delay-75", "delay-150", "delay-[225ms]", "delay-300", "delay-[375ms]", "delay-500"];

export default function MobileMenu({ open, onClose, links }) {
  const location = useLocation();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <button aria-label="Close menu" className="absolute inset-0 z-0 bg-brown/60 backdrop-blur-[1px]" onClick={onClose} />
      <div
        className="absolute right-0 top-0 z-10 flex h-full w-[86vw] max-w-[22rem] flex-col shadow-soft animate-slide-in-right"
        style={{ backgroundColor: "#F7F1E3" }}
      >
        <div className="flex items-center justify-between border-b border-brown/10 px-5 py-4">
          <Link to="/" onClick={onClose} className="transition-transform duration-200 active:scale-[0.98]">
            <Logo imageClassName="h-9" className="origin-left scale-95" />
          </Link>
          <button
            aria-label="Close menu"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full text-brown/70 transition-[background-color,transform] duration-200 hover:bg-brown/5 active:scale-90"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
          {links.map((link, index) => {
            const Icon = ICON_MAP[link.to] || Home;
            const delayClass = DELAY_CLASSES[index % DELAY_CLASSES.length];
            const rowClass = `group flex min-h-12 items-center gap-3 rounded-lg px-3 text-base transition-colors animate-fade-in-up ${delayClass}`;

            if (link.scrollTarget) {
              return (
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
                  className={`${rowClass} font-medium text-brown/80 hover:bg-forest/10 hover:text-forest`}
                >
                  <Icon size={18} strokeWidth={1.75} className="text-brown/40 transition-colors group-hover:text-forest" />
                  {link.label}
                </Link>
              );
            }

            return (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={onClose}
                className={({ isActive }) =>
                  `${rowClass} ${
                    isActive ? "bg-forest/10 font-medium text-forest" : "text-brown/80 hover:bg-forest/10 hover:text-forest"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      size={18}
                      strokeWidth={1.75}
                      className={`transition-colors ${isActive ? "text-forest" : "text-brown/40 group-hover:text-forest"}`}
                    />
                    {link.label}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>

        <div className="border-t border-brown/10 px-5 py-5 animate-fade-in delay-500">
          <a
            href={`tel:${siteMetadata.supportPhone.replace(/\s+/g, "")}`}
            className="flex items-center justify-between rounded-lg bg-forest px-4 py-3 text-sm font-medium text-ivory transition-transform active:scale-[0.98]"
          >
            <span className="flex items-center gap-2">
              <Phone size={16} strokeWidth={1.75} />
              Call / WhatsApp Us
            </span>
            <ArrowRight size={16} strokeWidth={1.75} />
          </a>
          <p className="mt-3 text-center text-xs text-brown/50">{siteMetadata.supportHours}</p>
        </div>
      </div>
    </div>
  );
}
