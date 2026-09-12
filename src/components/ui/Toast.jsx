import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";
import { useToast } from "../../hooks/useToast";

export default function Toast() {
  const { toasts, removeToast } = useToast();

  if (!toasts || toasts.length === 0) return null;

  return (
    <div
      aria-live="polite"
      className="fixed bottom-5 right-5 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none px-4 sm:px-0"
    >
      {toasts.map((toast) => {
        const isSuccess = toast.type === "success";
        const isError = toast.type === "error";

        return (
          <div
            key={toast.id}
            className="pointer-events-auto flex items-start gap-3 p-4 rounded-md shadow-soft border bg-ivory text-brown border-brown/15 animate-fade-in-up transition-all"
            role="status"
          >
            {isSuccess ? (
              <CheckCircle2 className="text-forest shrink-0 mt-0.5" size={18} />
            ) : isError ? (
              <AlertCircle className="text-red-600 shrink-0 mt-0.5" size={18} />
            ) : (
              <Info className="text-amla shrink-0 mt-0.5" size={18} />
            )}

            <div className="flex-1 min-w-0">
              {toast.title ? (
                <p className="font-serif text-sm font-semibold text-brown leading-tight">
                  {toast.title}
                </p>
              ) : null}
              {toast.message ? (
                <p className="text-xs text-brown/75 mt-0.5 leading-normal">
                  {toast.message}
                </p>
              ) : null}
            </div>

            <button
              type="button"
              onClick={() => removeToast(toast.id)}
              className="text-brown/40 hover:text-brown transition-colors p-0.5 rounded"
              aria-label="Dismiss notification"
            >
              <X size={14} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
