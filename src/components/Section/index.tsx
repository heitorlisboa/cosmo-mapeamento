import { forwardRef, HTMLProps } from "react";
import { SectionParentProps } from "../../types";

import formatClass from "../../utils/formatClass";

export type SectionProps = HTMLProps<HTMLElement> &
  SectionParentProps & {
    className?: string;
  };

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
