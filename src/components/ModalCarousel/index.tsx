// React, React hooks and types
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "../../hooks/PrefersReducedMotion";
import type { FC, ReactElement, HTMLAttributes } from "react";

// Utilities
import cycleIndex from "../../utils/cycleIndex";

// Styles
import styles from "./ModalCarousel.module.scss";
import { useWindowSize } from "../../hooks/WindowSize";

// Icons
const closeIcon = "/img/modal-icons/close-icon.svg";
const arrowRightIcon = "/img/modal-icons/arrow-right-icon.svg";

type Image = ReactElement<HTMLImageElement>;

const ModalCarousel: FC<HTMLAttributes<HTMLElement>> =
  function ModalCarouselComponent({ children, ...otherProps }) {
    const [scrollAuto, setScrollAuto] = useState(false);
    const [activeModalIndex, setActiveModalIndex] = useState(-1);
    const carouselRef = useRef<HTMLUListElement>(null);
    const imageList: Image[] = [];
    const prefersReducedMotion = usePrefersReducedMotion();
    const windowSize = useWindowSize();
    const mobileSize = 768;

    React.Children.forEach(children, (child) => {
      if (!React.isValidElement(child)) return;
      imageList.push(child);
    });

    function openModal(index: number) {
      setScrollAuto(true);
      setActiveModalIndex(index);
      document.body.style.overflow = "hidden";
    }

    function closeModal() {
      setActiveModalIndex(-1);
      document.body.style.overflow = "auto";
    }

    function goToPrevImg() {
      setScrollAuto(false);
      const prevImageIndex = cycleIndex(imageList, activeModalIndex, "prev");
      setActiveModalIndex(prevImageIndex);
    }

    function goToNextImg() {
      setScrollAuto(false);
      const nextImageIndex = cycleIndex(imageList, activeModalIndex, "next");
      setActiveModalIndex(nextImageIndex);
    }

    const imageScrollDistanceRef = useRef<number>();

    useLayoutEffect(() => {
      const carousel = carouselRef.current;
      if (!carousel) return;

      /* The scrollable distance is the distance between the end of the scroll
      track and the closest scroll thumb tip (considering the scroll thumb is on
      the start) */
      const scrollableDistance = carousel.scrollWidth - carousel.offsetWidth;
      /* Minus 1 at the end because, since the first carousel item will always
      be at the distance 0, there will only be distance between items when there
      is more than 1 item */
      const imageScrollDistance = scrollableDistance / (imageList.length - 1);
      imageScrollDistanceRef.current = imageScrollDistance;
      const activeModalScrollDistance = imageScrollDistance * activeModalIndex;

      let scrollBehavior: ScrollBehavior = prefersReducedMotion
        ? "auto"
        : "smooth";

      if (scrollAuto) scrollBehavior = "auto";

      carousel.scrollTo({
        left: activeModalScrollDistance,
        behavior: scrollBehavior,
      });
    }, [activeModalIndex, imageList.length, prefersReducedMotion, scrollAuto]);

    useEffect(() => {
      const carousel = carouselRef.current;
      const imageScrollDistance = imageScrollDistanceRef.current;
      if (!carousel || !imageScrollDistance) return;

      function scrollListener() {
        if (!carousel || !imageScrollDistance) return;

        const scrollPosition = carousel.scrollLeft;

        for (let index = 0; index < imageList.length; index++) {
          const scrollBreakpoint = imageScrollDistance * index;
          if (
            scrollPosition === scrollBreakpoint &&
            activeModalIndex !== index
          ) {
            setActiveModalIndex(index);
          }
        }
      }

      carousel.addEventListener("scroll", scrollListener);

      return () => {
        carousel.removeEventListener("scroll", scrollListener);
      };
    }, [activeModalIndex, imageList.length]);

    return (
      <>
        {/* Mobile image list */}
        {windowSize && windowSize <= mobileSize && (
          <div className={styles.imagesContainer} {...otherProps}>
            <button
              className={styles.firstListItem}
              onClick={openModal.bind(null, 0)}
            >
              <span className="sr-only">Clique na imagem para abrí-la</span>
              {imageList[0]}
            </button>
            <ul className={styles["list--mobile"]}>
              {imageList.map((image, index) => {
                if (index === 0) return;
                return (
                  <li key={index} className={styles.listItem}>
                    <button onClick={openModal.bind(null, index)}>
                      <span className="sr-only">
                        Clique na imagem para abrí-la
                      </span>
                      {image}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {/* Desktop image list */}
        {windowSize && windowSize > mobileSize && (
          <ul className={styles.list} {...otherProps}>
            {imageList.map((image, index) => (
              <li key={index} className={styles.listItem}>
                <button onClick={openModal.bind(null, index)}>
                  <span className="sr-only">Clique na imagem para abrí-la</span>
                  {image}
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Modal Carousel */}
        {activeModalIndex !== -1 && (
          <div className={styles.modalContainer}>
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
