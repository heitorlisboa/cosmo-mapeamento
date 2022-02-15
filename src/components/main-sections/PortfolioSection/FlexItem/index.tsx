import { FC, useState } from "react";

import formatClass from "../../../../utils/formatClass";

import styles from "./FlexItem.module.scss";

const xIcon = "/img/portfolio-img/x-icon.svg";

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
    <li className={styles.flexItem}>
      <img onClick={openModal} src={props.img} alt={props.alt} />
      <div
        className={formatClass(`
          ${styles.modal}
          ${modalOpen ? "" : styles["modal--closed"]}
        `)}
      >
        <button
          className={styles.closeButton}
          aria-label="Fechar imagem"
          onClick={closeModal}
        >
          <img src={xIcon} alt="" />
        </button>
        <img src={props.img} alt="" />
      </div>
    </li>
  );
};

export default FlexItem;
