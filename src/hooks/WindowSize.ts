import { useEffect, useState } from "react";

export function useWindowSize(handler = () => {}) {
  const [windowSize, setWindowSize] = useState<number>();

  useEffect(() => {
    setWindowSize(window.innerWidth);

    function resizeListener() {
      setWindowSize(window.innerWidth);
      handler();
    }

    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, [handler]);

  return windowSize;
}
