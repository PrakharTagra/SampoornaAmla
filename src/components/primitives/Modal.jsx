import { useEffect } from "react";
import { X } from "lucide-react";

export default function Modal({ open, onClose, children, labelledBy }) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        aria-label="Close dialog"
        className="absolute inset-0 bg-brown/60 backdrop-blur-[1px]"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        className="relative bg-ivory w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-md shadow-soft"
      >
        <IconCloseButton onClose={onClose} />
        {children}
      </div>
    </div>
  );
}

function IconCloseButton({ onClose }) {
  return (
    <button
      aria-label="Close"
      onClick={onClose}
      className="absolute top-4 right-4 h-8 w-8 flex items-center justify-center rounded-sm text-brown/70 hover:bg-brown/5 hover:text-brown transition-colors duration-200"
    >
      <X size={18} />
    </button>
  );
}
