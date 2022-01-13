import { FC } from "react";
import "./style.scss";

interface GridItemProps {
  title: string;
  content: string;
  img: string;
}

const GridItem: FC<GridItemProps> = (props) => {
  return (
    <li className="grid-item">
      <h4 className="grid-item__title">{props.title}</h4>
      <p>{props.content}</p>
      <img src={props.img} alt="" />
    </li>
  );
};

export default GridItem;
