import { FC, useState } from "react";
import "./style.scss";

import xIcon from "../../../../img/portfolio-img/x-icon.png";

interface FlexItemProps {
  img: string;
  alt: string;
}

const FlexItem: FC<FlexItemProps> = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  function openModal() {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setModalOpen(false);
    document.body.style.overflow = "initial";
  }

  return (
    <li className="flex-item">
      <img onClick={openModal} src={props.img} alt={props.alt} />
      <div className={"modal" + (modalOpen ? "" : " modal--closed")}>
        <img
          onClick={closeModal}
          className="modal__close"
          src={xIcon}
          alt="Botão para fechar imagem"
        />
        <img src={props.img} alt="" />
      </div>
    </li>
  );
};

export default FlexItem;
