export default function Input({ label, id, error, className = "", ...props }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label ? (
        <label htmlFor={id} className="text-sm font-medium text-brown/80">
          {label}
        </label>
      ) : null}
      <input
        id={id}
        className={`w-full rounded-sm border border-brown/20 bg-ivory-50 px-3.5 py-2.5 text-sm text-brown placeholder:text-brown/35 focus:border-forest transition-colors duration-200 ${className}`}
        {...props}
      />
      {error ? <span className="text-xs text-red-700">{error}</span> : null}
    </div>
  );
}
