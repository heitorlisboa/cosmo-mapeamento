import { FC } from "react";

import formatClass from "../../utils/formatClass";

import styles from "./Title.module.scss";

interface TitleProps {
  color: "blurple" | "white";
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}

const Title: FC<TitleProps> = (props) => {
  const Component = props.tag || "h2";

  return (
    <Component
      className={formatClass(`
        ${styles.title}
        ${styles[props.color]}
        ${props.className || ""}
      `)}
    >
      {props.children}
    </Component>
  );
};

export default Title;
