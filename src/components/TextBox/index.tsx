import type { FC } from "react";
import styles from "./TextBox.module.scss";

interface TextBoxProps {
  className?: string;
}

const TextBox: FC<TextBoxProps> = (props) => {
  return (
    <div className={`${styles.container} ${props.className || ""}`}>
      {props.children}
    </div>
  );
};

export default TextBox;
