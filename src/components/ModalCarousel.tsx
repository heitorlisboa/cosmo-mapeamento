import { type FC, type UIEvent, useEffect, useReducer, useRef } from 'react';
import { Dialog } from '@headlessui/react';

import { modalCarouselReducer } from '../reducers/modal-carousel';
import { useReducedMotion } from '../hooks/use-reduced-motion';

// Icons
const closeIcon = '/img/modal-icons/close-icon.svg';
const arrowRightIcon = '/img/modal-icons/arrow-right-icon.svg';

type ModalCarouselProps = {
  images: { src: string; alt: string }[];
};

export const ModalCarousel: FC<ModalCarouselProps> = ({ images }) => {
  const [state, dispatch] = useReducer(modalCarouselReducer, {
    currentSlideIndex: -1,
    isOpeningModal: false,
    isManuallyScrollingCarousel: false,
  });
  const reducedMotion = useReducedMotion();
  const carouselRef = useRef<HTMLDivElement>(null);
  const slideScrollDistanceRef = useRef<number>();

  const isModalOpen = state.currentSlideIndex > -1;
  const lastSlideIndex = images.length - 1;

  function handleOpenModal(slideIndex: number) {
    dispatch({ type: 'openModal', payload: { slideIndex } });
  }

  function handleScrollCarousel(event: UIEvent<HTMLDivElement>) {
    const carousel = carouselRef.current;
    const slideScrollDistance = slideScrollDistanceRef.current;
    if (!carousel || !slideScrollDistance) return;

    const scrollPosition = carousel.scrollLeft;

    const newSlideIndex = images.findIndex((_, index) => {
      const scrollBreakpoint = slideScrollDistance * index;
      const isNewSlide = scrollPosition === scrollBreakpoint;
      return isNewSlide;
    });

    if (newSlideIndex === -1) return;

    dispatch({
      type: 'manuallyScrollCarousel',
      payload: { slideIndex: newSlideIndex },
    });
  }

  function handleGoToPreviousSlide() {
    dispatch({ type: 'goToPreviousSlide', payload: { lastSlideIndex } });
  }

  function handleGoToNextSlide() {
    dispatch({ type: 'goToNextSlide', payload: { lastSlideIndex } });
  }

  function handleCloseModal() {
    dispatch({ type: 'closeModal' });
  }

  useEffect(() => {
    const { currentSlideIndex, isOpeningModal, isManuallyScrollingCarousel } =
      state;
    const carousel = carouselRef.current;
    if (!carousel || isManuallyScrollingCarousel) return;

    /**
     * The distance that the scroll thumb can travel in the scroll track, which
     * is calculated by subtracting the length of the scroll thumb from the
     * length of the scroll track (both are considered width because the scroll
     * is horizontal)
     */
    const distanceAvailableToScroll =
      carousel.scrollWidth - carousel.offsetWidth;
    /* Subtracting 1 from the `images.length` because the first slide does not
    generate any overflow */
    const slideScrollDistance = distanceAvailableToScroll / (images.length - 1);
    slideScrollDistanceRef.current = slideScrollDistance;

    const positionToScrollTo = slideScrollDistance * currentSlideIndex;
    const scrollBehavior: ScrollBehavior = isOpeningModal
      ? 'auto'
      : reducedMotion
      ? 'auto'
      : 'smooth';

    carousel.scrollTo({
      left: positionToScrollTo,
      behavior: scrollBehavior,
    });
  }, [state, images.length, reducedMotion]);

  return (
    <>
      <ul
        className="mx-auto mb-16 flex max-w-6xl gap-2 overflow-auto sm:flex-wrap sm:justify-center sm:px-4"
        aria-label="Posts do Instagram de trabalhos realizados pela Cosmo Mapeamento"
      >
        {images.map(({ src, alt }, index) => (
          // This list won't change so it's okay to use index as a key
          <li
            key={index}
            className="min-w-[15rem] max-w-xs flex-1 sm:min-w-[12.5rem]"
          >
            <button
              className="relative grid after:pointer-events-auto after:absolute after:inset-0 after:bg-primary-800/50 after:opacity-0 after:transition-opacity hocus:after:opacity-100"
              onClick={() => handleOpenModal(index)}
            >
              <img src={src} alt={alt} />
            </button>
          </li>
        ))}
      </ul>

      <Dialog open={isModalOpen} onClose={handleCloseModal}>
        <Dialog.Panel className="fixed inset-0 z-10 bg-white">
          <Dialog.Title className="sr-only">
            Carrossel de posts do Instagram de trabalhos realizados pela Cosmo
            Mapeamento
          </Dialog.Title>

          <button
            className="fixed bottom-8 left-1/3 aspect-[2/3] w-8 -translate-y-1/2 rounded-md bg-white/25 p-2 backdrop-blur transition-opacity hocus:opacity-60 md:left-8 md:top-1/2 md:bottom-auto md:w-10"
            onClick={handleGoToPreviousSlide}
          >
            <img
              className="h-full rotate-180"
              src={arrowRightIcon}
              alt="Imagem anterior"
            />
          </button>

          <div
            className="grid h-full snap-x snap-mandatory auto-cols-[100%] grid-flow-col items-center overflow-x-scroll"
            onScroll={handleScrollCarousel}
            ref={carouselRef}
          >
            {images.map(({ src, alt }, index) => (
              // This list won't change so it's okay to use index as a key
              <img
                key={index}
                className="mx-auto aspect-square w-[min(100%,600px)] snap-center object-cover lg:h-full lg:w-auto"
                src={src}
                alt={alt}
                // Hiding the non-visible slides
                aria-hidden={index !== state.currentSlideIndex}
              />
            ))}
          </div>

          <button
            className="fixed bottom-8 right-1/3 aspect-[2/3] w-8 -translate-y-1/2 rounded-md bg-white/25 p-2 backdrop-blur transition-opacity hocus:opacity-60 md:right-8 md:top-1/2 md:bottom-auto md:w-10"
            onClick={handleGoToNextSlide}
          >
            <img className="h-full" src={arrowRightIcon} alt="Próxima imagem" />
          </button>

          <button
            className="fixed top-8 right-8 aspect-square w-8 rounded-md bg-white/25 p-2 backdrop-blur transition-opacity hocus:opacity-60 md:w-10"
            onClick={handleCloseModal}
          >
            <img src={closeIcon} alt="Fechar carrossel de imagens" />
          </button>
        </Dialog.Panel>
      </Dialog>
    </>
  );
};
