import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

export default function Modal({ open, onClose, children, labelledBy, variant = "center" }) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const isDrawer = variant === "drawer";

  useEffect(() => {
    let timer;
    if (open) {
      const raf = requestAnimationFrame(() => {
        setMounted(true);
        requestAnimationFrame(() => setVisible(true));
      });
      return () => cancelAnimationFrame(raf);
    } else if (mounted) {
      const raf = requestAnimationFrame(() => setVisible(false));
      timer = setTimeout(() => setMounted(false), 300);
      return () => {
        cancelAnimationFrame(raf);
        clearTimeout(timer);
      };
    }
  }, [open, mounted]);

  useEffect(() => {
    if (!mounted) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [mounted, onClose]);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-50 ${isDrawer ? "flex justify-end" : "flex items-center justify-center p-4"}`}
    >
      <button
        aria-label="Close dialog"
        className={`absolute inset-0 bg-brown/60 backdrop-blur-[1px] transition-opacity duration-300 motion-reduce:transition-none ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        className={
          isDrawer
            ? `relative bg-ivory w-full max-w-md h-full overflow-y-auto shadow-soft transition-transform duration-300 ease-out motion-reduce:transition-none ${
                visible ? "translate-x-0" : "translate-x-full"
              }`
            : `relative bg-ivory w-full max-w-2xl max-h-[calc(100dvh-1rem)] overflow-y-auto rounded-md shadow-soft transition-all duration-200 motion-reduce:transition-none ${
                visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`
        }
      >
        <button
          ref={closeButtonRef}
          aria-label="Close"
          onClick={onClose}
          className="absolute top-4 right-4 h-8 w-8 flex items-center justify-center rounded-sm text-brown/70 hover:bg-brown/5 hover:text-brown active:scale-[0.9] motion-reduce:active:scale-100 transition-[color,background-color,transform] duration-200 z-10"
        >
          <X size={18} />
        </button>
        {children}
      </div>
    </div>
  );
}
