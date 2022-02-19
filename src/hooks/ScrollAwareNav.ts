import { useCallback, useEffect, useRef, useState } from "react";
import type { RefObject } from "react";

interface ScrollAwareNavArgs {
  /** Function that will be executed for each observer entry */
  executeForEachEntry: (entry: IntersectionObserverEntry) => void;
  /** The refs of the elements that you want to observe */
  entriesRefs: RefObject<HTMLDivElement>[];
  /** Intersection observer options */
  observerOptions?: IntersectionObserverInit;
  /** Minimum viewport width (in pixels) for the nav to be visible */
  minWidth?: number;
}

/**
 * Custom hook used to create a scroll-aware navigation
 * @param configs Navigation configurations
 * @returns The nav visibility state
 */
export function useScrollAwareNav({
  executeForEachEntry,
  entriesRefs,
  observerOptions = {
    root: null,
    threshold: 0,
    rootMargin: "-49% 0px",
  },
  minWidth = 0,
}: ScrollAwareNavArgs) {
  /* OBSERVER SETUP */
  const observerCallback: IntersectionObserverCallback = useCallback(
    function observerCallbackFunction(entries) {
      entries.forEach((entry) => {
        executeForEachEntry(entry);
      });
    },
    [executeForEachEntry]
  );

  const observerRef = useRef<IntersectionObserver>();

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
  }, [observerCallback, observerOptions]);

  /* REGISTERING OBSERVER ENTRIES */
  useEffect(() => {
    const cleanupObserverRef = observerRef;

    entriesRefs.forEach((entryRef) => {
      const sectionElement = entryRef.current;
      const observer = observerRef.current;
      if (sectionElement && observer) observer.observe(sectionElement);
    });

    return () => {
      entriesRefs.forEach((entryRef) => {
        const sectionElement = entryRef.current;
        const observer = cleanupObserverRef.current;
        if (sectionElement && observer) observer.unobserve(sectionElement);
      });
    };
  }, [entriesRefs, observerRef]);

  /* NAVIGATION VISIBILITY */
  const [navVisible, setNavVisible] = useState(false);

  useEffect(() => {
    setNavVisible(window.innerWidth > minWidth);

    function resizeListener() {
      setNavVisible(window.innerWidth > minWidth);
    }

    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, [minWidth]);

  return {
    navVisible,
  };
}
