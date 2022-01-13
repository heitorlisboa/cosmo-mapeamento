import { FC } from "react";
import "./style.scss";

interface TitleProps {
  color: "blurple" | "white";
  className?: string;
}

const Title: FC<TitleProps> = (props) => {
  return (
    <h2
      className={`secondary-title secondary-title--${props.color} ${
        props.className || ""
      }`}
    >
      {props.children}
    </h2>
  );
};

export default Title;
