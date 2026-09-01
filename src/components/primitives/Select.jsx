import { ChevronDown } from "lucide-react";

export default function Select({ label, id, children, className = "", ...props }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label ? (
        <label htmlFor={id} className="text-sm font-medium text-brown/80">
          {label}
        </label>
      ) : null}
      <div className="relative">
        <select
          id={id}
          className={`w-full appearance-none rounded-sm border border-brown/20 bg-ivory-50 px-3.5 py-2.5 pr-9 text-sm text-brown focus:border-forest transition-colors duration-200 ${className}`}
          {...props}
        >
          {children}
        </select>
        <ChevronDown size={14} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-brown/50" />
      </div>
    </div>
  );
}
