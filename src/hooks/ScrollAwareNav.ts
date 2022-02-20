import { useCallback, useEffect, useRef, useState } from "react";
import type { RefObject } from "react";

interface ScrollAwareNavArgs {
  /** Function that will be executed for each observer entry */
  executeForEachEntry: (entry: IntersectionObserverEntry) => void;
  /** The refs of the elements that you want to observe */
  entriesRefs: RefObject<HTMLDivElement>[];
  /** Intersection observer options */
  observerOptions?: IntersectionObserverInit;
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
  }
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
}
