import React, { useState } from "react";
import type { FC, ReactElement, HTMLProps } from "react";
import type { EmptyObject } from "../../types";

import objectHasItems from "../../utils/objectHasItems";

import styles from "./ModalCarousel.module.scss";

const closeIcon = "/img/modal-icons/close-icon.svg";
const arrowRightIcon = "/img/modal-icons/arrow-right-icon.svg";

type CarouselItem = ReactElement<HTMLImageElement>;

type ActiveModal =
  | {
      img: string;
      alt: string;
    }
  | EmptyObject;

const ModalCarousel: FC<HTMLProps<HTMLUListElement>> = ({
  children,
  ...otherProps
}) => {
  const [activeModal, setActiveModal] = useState<ActiveModal>({});
  const carouselItemList: CarouselItem[] = [];

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return;
    carouselItemList.push(child);
  });

  function openModal(element: CarouselItem) {
    setActiveModal({
      img: element.props.src,
      alt: element.props.alt,
    });
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setActiveModal({});
    document.body.style.overflow = "auto";
  }

  function goToPrevImg() {}

  function goToNextImg() {}

  return (
    <>
      {/* Image list */}
      <ul className={styles.list} {...otherProps}>
        {carouselItemList.map((carouselItem, index) => (
          <li
            key={index}
            className={styles.carouselItem}
            onClick={() => {
              openModal(carouselItem);
            }}
          >
            {carouselItem}
          </li>
        ))}
      </ul>

      {/* Modal Carousel */}
      {objectHasItems<ActiveModal>(activeModal) && (
        <div className={styles.container}>
          <div className={styles.modal}>
            <button className={styles.closeButton} onClick={closeModal}>
              <span className="sr-only">Fechar imagem</span>
              <img src={closeIcon} alt="" />
            </button>
            <button className={styles.prevButton} onClick={goToPrevImg}>
              <span className="sr-only">Imagem anterior</span>
              <img src={arrowRightIcon} alt="" />
            </button>
            <img src={activeModal.img} alt={activeModal.alt} />
            <button className={styles.nextButton} onClick={goToNextImg}>
              <span className="sr-only">Próxima imagem</span>
              <img src={arrowRightIcon} alt="" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalCarousel;
