// React, React hooks and types
import React, { useEffect, useRef, useState } from "react";
import type { FC, ReactElement, HTMLProps } from "react";

// Utilities
import cycleIndex from "../../utils/cycleIndex";

// Styles
import styles from "./ModalCarousel.module.scss";

// Icons
const closeIcon = "/img/modal-icons/close-icon.svg";
const arrowRightIcon = "/img/modal-icons/arrow-right-icon.svg";

type Image = ReactElement<HTMLImageElement>;

const ModalCarousel: FC<HTMLProps<HTMLUListElement>> =
  function ModalCarouselComponent({ children, ...otherProps }) {
    const [activeModalIndex, setActiveModalIndex] = useState(-1);
    const carouselRef = useRef<HTMLUListElement>(null);
    const imageList: Image[] = [];

    React.Children.forEach(children, (child) => {
      if (!React.isValidElement(child)) return;
      imageList.push(child);
    });

    function openModal(index: number) {
      setActiveModalIndex(index);
      document.body.style.overflow = "hidden";
    }

    function closeModal() {
      setActiveModalIndex(-1);
      document.body.style.overflow = "auto";
    }

    function goToPrevImg() {
      const prevImageIndex = cycleIndex(imageList, activeModalIndex, "prev");
      setActiveModalIndex(prevImageIndex);
    }

    function goToNextImg() {
      const nextImageIndex = cycleIndex(imageList, activeModalIndex, "next");
      setActiveModalIndex(nextImageIndex);
    }

    // TODO: Fazer com que o scroll manual também altere o activeModalIndex
    useEffect(() => {
      const carousel = carouselRef.current;

      if (activeModalIndex !== -1 && carousel) {
        /* The scrollable distance is the distance between the end of the scroll
      track and the closest scroll thumb tip (considering the scroll thumb is on
      the start) */
        const scrollableDistance = carousel.scrollWidth - carousel.offsetWidth;
        /* Minus 1 at the end because, since the first carousel item will always
      be at the distance 0, there will only be distance between items when there
      is more than 1 item */
        const itemScrollDistance = scrollableDistance / (imageList.length - 1);
        const activeModalScrollDistance = itemScrollDistance * activeModalIndex;

        carousel.scrollTo({ left: activeModalScrollDistance });
      }
    }, [activeModalIndex]);

    return (
      <>
        {/* Image list */}
        <ul className={styles.list} {...otherProps}>
          {imageList.map((image, index) => (
            <li
              key={index}
              className={styles.listItem}
              onClick={() => {
                openModal(index);
              }}
            >
              <button>
                <span className="sr-only">Clique na imagem para abrí-la</span>
                {image}
              </button>
            </li>
          ))}
        </ul>

        {/* Modal Carousel */}
        {activeModalIndex !== -1 && (
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

              <ul className={styles.carousel} ref={carouselRef}>
                {imageList.map((image, index) => (
                  <li key={index} className={styles.carouselItem}>
                    {image}
                  </li>
                ))}
              </ul>

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
