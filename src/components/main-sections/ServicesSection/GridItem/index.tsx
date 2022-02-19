import type { FC } from "react";

import styles from "./GridItem.module.scss";

interface GridItemProps {
  title: string;
  content: string;
  img: string;
}

const GridItem: FC<GridItemProps> = function GridItemComponent({
  title,
  content,
  img,
}) {
  return (
    <li className={styles.gridItem}>
      <h3 className={styles.title}>{title}</h3>
      <p>{content}</p>
      <img src={img} alt="" />
    </li>
  );
};

export default GridItem;
