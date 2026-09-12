import { Check } from "lucide-react";
import { checkoutData } from "../../data/sitedata";

const STEPS = checkoutData.steps.map((label, index) => ({ id: index + 1, label }));

export default function StepIndicator({ current, onStepClick }) {
  return (
    <ol className="flex items-center gap-2 xs:gap-3">
      {STEPS.map((step, i) => {
        const isComplete = step.id < current;
        const isCurrent = step.id === current;
        const isClickable = isComplete;

        return (
          <li key={step.id} className="flex items-center gap-2 xs:gap-3 flex-1 last:flex-none">
            <button
              type="button"
              disabled={!isClickable}
              onClick={() => isClickable && onStepClick?.(step.id)}
              className={`flex items-center gap-2 ${isClickable ? "cursor-pointer" : "cursor-default"}`}
            >
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-medium transition-colors duration-200 ${
                  isComplete
                    ? "bg-forest text-ivory"
                    : isCurrent
                    ? "bg-forest text-ivory"
                    : "bg-brown/10 text-brown/40"
                }`}
              >
                {isComplete ? <Check size={13} strokeWidth={2.5} /> : step.id}
              </span>
              <span
                className={`hidden xs:inline text-sm ${
                  isCurrent ? "text-brown font-medium" : isComplete ? "text-brown/70" : "text-brown/40"
                }`}
              >
                {step.label}
              </span>
            </button>
            {i < STEPS.length - 1 ? (
              <span
                className={`h-px flex-1 min-w-6 transition-colors duration-200 ${
                  isComplete ? "bg-forest" : "bg-brown/10"
                }`}
              />
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
