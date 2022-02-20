import { useEffect, useState } from "react";

export function useWindowSize(handler?: Function) {
  const [windowSize, setWindowSize] = useState<number>();

  useEffect(() => {
    setWindowSize(window.innerWidth);

    function resizeListener() {
      setWindowSize(window.innerWidth);
      if (handler) handler();
    }

    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, [handler]);

  return windowSize;
}
