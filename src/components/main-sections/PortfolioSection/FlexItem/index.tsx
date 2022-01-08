import { FC, useState } from "react";
import "./style.scss";

import xIcon from "../../../../img/portfolio-img/x-icon.png"

interface FlexItemProps {
  img: string;
  alt: string;
}

const FlexItem: FC<FlexItemProps> = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <article className="flex-item">
      <img
        onClick={(event) => {
          setModalOpen(true);
        }}
        src={props.img}
        alt={props.alt}
      />
      <div className={"modal" + (modalOpen ? "" : " modal--closed")}>
        <img
          onClick={(event) => {
            setModalOpen(false);
          }}
          className="modal__close"
          src={xIcon}
          alt=""
        />
        <img src={props.img} alt="" />
      </div>
    </article>
  );
};

export default FlexItem;
