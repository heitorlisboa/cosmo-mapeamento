import { createReducer } from '../utils/create-reducer';

type ModalCarouselState = {
  currentSlideIndex: number;
  isOpeningModal: boolean;
  isManuallyScrollingCarousel: boolean;
};

export const modalCarouselReducer = createReducer({
  openModal(
    currentState: ModalCarouselState,
    { slideIndex }: { slideIndex: number }
  ): ModalCarouselState {
    return {
      currentSlideIndex: slideIndex,
      isOpeningModal: true,
      isManuallyScrollingCarousel: false,
    };
  },
  manuallyScrollCarousel(
    currentState: ModalCarouselState,
    { slideIndex }: { slideIndex: number }
  ): ModalCarouselState {
    return {
      currentSlideIndex: slideIndex,
      isOpeningModal: false,
      isManuallyScrollingCarousel: true,
    };
  },
  goToPreviousSlide(
    { currentSlideIndex }: ModalCarouselState,
    { lastSlideIndex }: { lastSlideIndex: number }
  ): ModalCarouselState {
    const firstSlideIndex = 0;

    return {
      currentSlideIndex:
        currentSlideIndex === firstSlideIndex
          ? lastSlideIndex
          : currentSlideIndex - 1,
      isOpeningModal: false,
      isManuallyScrollingCarousel: false,
    };
  },
  goToNextSlide(
    { currentSlideIndex }: ModalCarouselState,
    { lastSlideIndex }: { lastSlideIndex: number }
  ) {
    const firstSlideIndex = 0;

    return {
      currentSlideIndex:
        currentSlideIndex === lastSlideIndex
          ? firstSlideIndex
          : currentSlideIndex + 1,
      isOpeningModal: false,
      isManuallyScrollingCarousel: false,
    };
  },
  closeModal(currentState: ModalCarouselState) {
    return {
      currentSlideIndex: -1,
      isOpeningModal: false,
      isManuallyScrollingCarousel: false,
    };
  },
});
