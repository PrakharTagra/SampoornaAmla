import { formatINR } from "../primitives/Price";

export default function VariantSelector({ variants, selectedId, onSelect }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium text-brown/80">Select Pack Size</span>
      <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Pack size">
        {variants.map((variant) => {
          const isSelected = variant.id === selectedId;
          const outOfStock = variant.stock <= 0;

          return (
            <button
              key={variant.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              disabled={outOfStock}
              onClick={() => onSelect(variant)}
              className={`flex flex-col items-center gap-0.5 rounded-sm border px-4 py-2 min-w-[76px] transition-[color,background-color,border-color,transform] duration-200 active:scale-[0.96] motion-reduce:active:scale-100 disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100 ${
                isSelected
                  ? "border-forest bg-forest/5 text-forest"
                  : "border-brown/20 text-brown/80 hover:border-brown/40"
              }`}
            >
              <span className="text-sm font-medium">{variant.name}</span>
              <span className="text-xs">{formatINR(variant.price)}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
