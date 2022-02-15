import { FC } from "react";

import styles from "./GridItem.module.scss";


interface GridItemProps {
  title: string;
  content: string;
  img: string;
}

const GridItem: FC<GridItemProps> = (props) => {
  return (
    <li className={styles.gridItem}>
      <h4 className={styles.title}>{props.title}</h4>
      <p>{props.content}</p>
      <img src={props.img} alt="" />
    </li>
  );
};

export default GridItem;
