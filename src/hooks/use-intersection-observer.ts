import { type RefObject, useCallback, useEffect, useRef } from 'react';

type UseIntersectionObserverArgs = {
  /** Function that will be executed for each observer entry */
  executeForEachEntry: (entry: IntersectionObserverEntry) => void;
  /** The refs of the elements that you want to observe */
  entryRefs: RefObject<HTMLDivElement>[];
  /** Intersection observer options */
  observerOptions?: IntersectionObserverInit;
};

export function useIntersectionObserver({
  executeForEachEntry,
  entryRefs,
  observerOptions = {
    root: null,
    threshold: 0,
    rootMargin: '-49% 0px',
  },
}: UseIntersectionObserverArgs) {
  // Setting up the intersection observer
  const observerCallback: IntersectionObserverCallback = useCallback(
    (entries) => entries.forEach(executeForEachEntry),
    [executeForEachEntry]
  );

  const observerRef = useRef<IntersectionObserver>();

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
  }, [observerCallback, observerOptions]);

  // Registering the observer entries
  useEffect(() => {
    const observer = observerRef.current;

    entryRefs.forEach((entryRef) => {
      const entry = entryRef.current;
      if (entry) observer?.observe(entry);
    });

    return () => {
      entryRefs.forEach((entryRef) => {
        const entry = entryRef.current;
        if (entry) observer?.unobserve(entry);
      });
    };
  }, [observerRef, entryRefs]);
}
