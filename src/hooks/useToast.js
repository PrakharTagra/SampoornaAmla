import { useContext } from "react";
import { ToastContext } from "../context/toast-context";

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    return {
      addToast: () => {},
      removeToast: () => {},
      toasts: [],
    };
  }
  return context;
}
