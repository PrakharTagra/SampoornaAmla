import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "../components/primitives/Logo";

/**
 * Route transition wrapper providing smooth page fade-in on navigation.
 */
export default function PageTransition({ children, className = "" }) {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => setLoading(false), 550);
    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  return (
    <div key={location.pathname} className={`relative animate-fade-in ${className}`}>
      {loading ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-ivory animate-fade-in" role="status" aria-label="Loading">
          <Logo showText={false} imageClassName="h-52 sm:h-64 animate-logo-pulse" />
        </div>
      ) : null}
      {children}
    </div>
  );
}
