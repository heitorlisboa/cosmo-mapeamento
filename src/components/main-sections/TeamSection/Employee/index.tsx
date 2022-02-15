import { FC } from "react";

import styles from "./Employee.module.scss";

import TextBox from "../../../TextBox";

interface EmployeeProps {
  img: string;
  alt: string;
}

const Employee: FC<EmployeeProps> = (props) => {
  return (
    <article className={styles.container}>
      <img src={props.img} alt={props.alt} />
      <TextBox className={styles.content}>{props.children}</TextBox>
    </article>
  );
};

export default Employee;
