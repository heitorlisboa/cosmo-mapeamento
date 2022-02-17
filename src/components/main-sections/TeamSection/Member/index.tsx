import type { FC } from "react";

import styles from "./Member.module.scss";

import TextBox from "../../../TextBox";

interface MemberProps {
  img: string;
  alt: string;
}

const Member: FC<MemberProps> = function EmployeeComponent({
  children,
  img,
  alt,
}) {
  return (
    <article className={styles.container}>
      <img src={img} alt={alt} />
      <TextBox className={styles.content}>{children}</TextBox>
    </article>
  );
};

export default Member;
