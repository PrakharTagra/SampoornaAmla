export default function Input({ label, id, error, className = "", ...props }) {
  const errorId = error && id ? `${id}-error` : undefined;

  return (
    <div className="flex flex-col gap-1.5">
      {label ? (
        <label htmlFor={id} className="text-sm font-medium text-brown/80">
          {label}
        </label>
      ) : null}
      <input
        id={id}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={errorId}
        className={`w-full rounded-sm border bg-ivory-50 px-3.5 py-2.5 text-sm text-brown placeholder:text-brown/35 transition-colors duration-200 ${
          error
            ? "border-red-700/60 focus:border-red-700"
            : "border-brown/20 focus:border-forest"
        } ${className}`}
        {...props}
      />
      {error ? (
        <span id={errorId} className="text-xs text-red-700">
          {error}
        </span>
      ) : null}
    </div>
  );
}
