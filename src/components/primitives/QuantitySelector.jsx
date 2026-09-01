import { Minus, Plus } from "lucide-react";

export default function QuantitySelector({ value, onChange, min = 1, max = 20, className = "" }) {
  const decrease = () => onChange(Math.max(min, value - 1));
  const increase = () => onChange(Math.min(max, value + 1));

  return (
    <div className={`inline-flex items-center border border-brown/20 rounded-sm ${className}`}>
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={decrease}
        disabled={value <= min}
        className="h-9 w-9 flex items-center justify-center text-brown hover:bg-brown/5 active:scale-[0.9] motion-reduce:active:scale-100 disabled:opacity-30 disabled:active:scale-100 transition-[background-color,transform] duration-200"
      >
        <Minus size={14} />
      </button>
      <span className="w-8 text-center text-sm font-medium" aria-live="polite">
        {value}
      </span>
      <button
        type="button"
        aria-label="Increase quantity"
        onClick={increase}
        disabled={value >= max}
        className="h-9 w-9 flex items-center justify-center text-brown hover:bg-brown/5 active:scale-[0.9] motion-reduce:active:scale-100 disabled:opacity-30 disabled:active:scale-100 transition-[background-color,transform] duration-200"
      >
        <Plus size={14} />
      </button>
    </div>
  );
}
