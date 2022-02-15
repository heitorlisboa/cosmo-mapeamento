import type { FC } from "react";

import formatClass from "../../utils/formatClass";

import styles from "./TextBox.module.scss";

interface TextBoxProps {
  className?: string;
}

const TextBox: FC<TextBoxProps> = (props) => {
  return (
    <div
      className={formatClass(`${styles.container} ${props.className || ""}`)}
    >
      {props.children}
    </div>
  );
};

export default TextBox;
