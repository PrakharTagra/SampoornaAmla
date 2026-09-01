export function formatINR(amount) {
  return `₹${Number(amount).toLocaleString("en-IN")}`;
}

export default function Price({ amount, compareAt, size = "md", className = "" }) {
  const sizeClass = size === "lg" ? "text-2xl" : size === "sm" ? "text-sm" : "text-base";

  return (
    <span className={`inline-flex items-baseline gap-2 font-sans font-semibold text-brown ${sizeClass} ${className}`}>
      {formatINR(amount)}
      {compareAt && compareAt > amount ? (
        <span className="text-brown/40 line-through font-normal text-sm">{formatINR(compareAt)}</span>
      ) : null}
    </span>
  );
}
