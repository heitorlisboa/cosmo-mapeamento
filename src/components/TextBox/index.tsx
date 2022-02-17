import type { FC } from "react";

import formatClass from "../../utils/formatClass";

import styles from "./TextBox.module.scss";

interface TextBoxProps {
  className?: string;
}

const TextBox: FC<TextBoxProps> = function TextBoxComponent({
  children,
  className,
}) {
  return (
    <div className={formatClass(`${styles.container} ${className || ""}`)}>
      {children}
    </div>
  );
};

export default TextBox;
