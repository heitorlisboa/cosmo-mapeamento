import { forwardRef, HTMLProps } from "react";

import formatClass from "../../utils/formatClass";

export interface SectionProps extends HTMLProps<HTMLElement> {
  className?: string;
  id: string;
}

const Section = forwardRef<HTMLElement, SectionProps>(function SectionComponent(
  { children, id, className },
  ref
) {
  return (
    <section
      ref={ref}
      className={formatClass(`no-collapse ${className || ""}`)}
      id={id}
    >
      {children}
    </section>
  );
});

export default Section;
