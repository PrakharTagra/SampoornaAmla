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
      className={`fixed inset-0 z-50 ${
        isDrawer ? "flex justify-end" : "flex items-end justify-center sm:items-center sm:p-4"
      }`}
      // Reserve real space for the navbar at the top so the dialog never
      // renders flush against (or behind) it — only for the center variant;
      // the cart drawer intentionally still runs edge-to-edge.
      style={!isDrawer ? { paddingTop: "var(--header-h, 4rem)" } : undefined}
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
            : // Center variant: a full-width bottom sheet on mobile (rounded top,
              // slides up from the bottom) so it never has to squeeze inside
              // a small floating card on a narrow screen; unchanged centered
              // dialog from sm/ up. max-h is reserved against the header's
              // real measured height (--header-h, set by Header.jsx) rather
              // than a guessed rem value, so the sheet reliably fits the
              // viewport at every screen size without clipping. The scroll
              // container keeps working (overscroll-contain) but its
              // scrollbar is hidden (no-scrollbar) so it never shows as a
              // visible scroller.
              `relative bg-ivory w-full sm:max-w-2xl max-h-[calc(100dvh-var(--header-h,4rem)-1rem)] sm:max-h-[calc(100dvh-var(--header-h,5rem)-2rem)] overflow-y-auto overscroll-contain no-scrollbar rounded-t-2xl sm:rounded-md shadow-soft transition-transform duration-300 ease-out sm:transition-all sm:duration-200 motion-reduce:transition-none ${
                visible
                  ? "translate-y-0 sm:scale-100 sm:opacity-100"
                  : "translate-y-full sm:translate-y-0 sm:scale-95 sm:opacity-0"
              }`
        }
      >
        {!isDrawer ? (
          <div className="sticky top-0 z-10 flex justify-center bg-ivory pt-2.5 pb-1 sm:hidden" aria-hidden="true">
            <span className="h-1 w-10 rounded-full bg-brown/20" />
          </div>
        ) : null}
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
