import { FC } from "react";
import "./style.scss"
import TextBox from "../../../TextBox";

interface EmployeeProps {
  img: string;
  alt: string;
}

const Employee: FC<EmployeeProps> = (props) => {
  return (
    <article className="employee">
      <img src={props.img} alt={props.alt} />
      <TextBox className="employee__content">{props.children}</TextBox>
    </article>
  );
};

export default Employee;
