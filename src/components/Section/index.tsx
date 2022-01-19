import { FC } from "react";

interface SectionProps {
  className?: string;
  id: string;
}

const Section: FC<SectionProps> = (props) => {
  return (
    <section
      className={`no-collapse ${props.className || ""}`}
      id={props.id}
    >
      {props.children}
    </section>
  );
};

export default Section;
