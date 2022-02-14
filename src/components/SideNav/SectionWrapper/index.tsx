import React, { FC, ReactElement } from "react";
import { useEffect } from "react";
import { SectionProps } from "../../Section";

interface SectionWrapperProps {
  observer: IntersectionObserver | undefined;
  navVisible: boolean;
}

// A wrapper specifically for Section ReactElements
const SectionWrapper: FC<SectionWrapperProps> = ({
  children,
  observer,
  navVisible,
}) => {
  // Since each wrapper is only used to wrap one element,
  // we can assume that children is a single Section ReactElement
  let element = children as ReactElement<SectionProps>;

  const elementRef = React.createRef<HTMLElement>();

  element = React.cloneElement(element, {
    ref: elementRef,
  });

  useEffect(() => {
    // Only observe the Section elements when the nav is visible
    // and when the observer is given (its value is started as undefined)
    if (navVisible && observer) {
      const currentElement = elementRef.current;

      if (currentElement) observer.observe(currentElement);

      return () => {
        if (currentElement) observer.unobserve(currentElement);
      };
    }
  }, [elementRef, observer, navVisible]);

  return element;
};

export default SectionWrapper;
