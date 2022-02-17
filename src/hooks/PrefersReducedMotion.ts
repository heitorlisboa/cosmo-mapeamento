import { useState, useEffect } from "react";

export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);

  useEffect(() => {
    const QUERY = "(prefers-reduced-motion: reduce)";
    const mediaQueryList = window.matchMedia(QUERY);

    setPrefersReducedMotion(mediaQueryList.matches);

    function listener(event: MediaQueryListEvent) {
      setPrefersReducedMotion(event.matches);
    }

    mediaQueryList.addEventListener("change", listener);

    return () => {
      mediaQueryList.removeEventListener("change", listener);
    };
  }, []);

  return prefersReducedMotion;
}
