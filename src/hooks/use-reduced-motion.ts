import { useEffect, useState } from 'react';

export function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const QUERY = '(prefers-reduced-motion: reduce)';
    const mediaQueryList = window.matchMedia(QUERY);

    setReducedMotion(mediaQueryList.matches);

    function listener(event: MediaQueryListEvent) {
      setReducedMotion(event.matches);
    }

    mediaQueryList.addEventListener('change', listener);

    return () => {
      mediaQueryList.removeEventListener('change', listener);
    };
  }, []);

  return reducedMotion;
}
