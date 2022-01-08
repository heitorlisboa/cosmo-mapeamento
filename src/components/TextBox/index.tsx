import { FC } from "react";
import "./style.scss";

interface TextBoxProps {
  className?: string;
}

const TextBox: FC<TextBoxProps> = (props) => {
  return (
    <div className={`text-box ${props.className || ""}`}>{props.children}</div>
  );
};

export default TextBox;
