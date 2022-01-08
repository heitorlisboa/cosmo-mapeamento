import { FC } from "react";

interface SectionProps {
  className: string;
}

const Section: FC<SectionProps> = (props) => {
  return (
    <section className={`no-collapse ${props.className}`}>
      {props.children}
    </section>
  );
};

export default Section;
