import { forwardRef, HTMLProps } from "react";

import formatClass from "../../utils/formatClass";

export interface SectionProps extends HTMLProps<HTMLElement> {
  className?: string;
  id: string;
}

const Section = forwardRef<HTMLElement, SectionProps>((props, ref) => {
  return (
    <section
      ref={ref}
      className={formatClass(`no-collapse ${props.className || ""}`)}
      id={props.id}
    >
      {props.children}
    </section>
  );
});

Section.displayName = "Section";

export default Section;
