import { FC } from "react";

import formatClass from "../../utils/formatClass";

import styles from "./Title.module.scss";

interface TitleProps {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color: "blurple" | "white";
  className?: string;
}

const Title: FC<TitleProps> = function TitleComponent({
  children,
  tag,
  color,
  className,
}) {
  const Component = tag || "h2";

  return (
    <Component
      className={formatClass(`
        ${styles.title}
        ${styles[color]}
        ${className || ""}
      `)}
    >
      {children}
    </Component>
  );
};

export default Title;
