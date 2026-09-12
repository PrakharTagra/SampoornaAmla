import { ChevronDown } from "lucide-react";

export default function Select({ label, id, children, error, className = "", ...props }) {
  const errorId = error && id ? `${id}-error` : undefined;

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
          aria-invalid={error ? "true" : undefined}
          aria-describedby={errorId}
          className={`w-full appearance-none rounded-sm border bg-ivory-50 px-3.5 py-2.5 pr-9 text-sm text-brown transition-colors duration-200 ${
            error
              ? "border-red-700/60 focus:border-red-700"
              : "border-brown/20 focus:border-forest"
          } ${className}`}
          {...props}
        >
          {children}
        </select>
        <ChevronDown size={14} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-brown/50" />
      </div>
      {error ? (
        <span id={errorId} className="text-xs text-red-700">
          {error}
        </span>
      ) : null}
    </div>
  );
}
