import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Breadcrumb({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-1.5 text-sm text-brown/60">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={item.label} className="flex items-center gap-1.5">
            {i > 0 ? <ChevronRight size={12} className="text-brown/30" /> : null}
            {item.to && !isLast ? (
              <Link to={item.to} className="hover:text-brown transition-colors duration-200">
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "text-brown" : ""}>{item.label}</span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
