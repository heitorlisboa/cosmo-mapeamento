import { useEffect, useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import clsx from 'clsx';

import { useReducedMotion } from '../../hooks/use-reduced-motion';

const slides = [
  { src: '/img/hero-img/carousel-1.webp' },
  { src: '/img/hero-img/carousel-2.webp' },
  { src: '/img/hero-img/carousel-3.webp' },
  { src: '/img/hero-img/carousel-4.webp' },
  { src: '/img/hero-img/carousel-5.webp' },
  { src: '/img/hero-img/carousel-6.webp' },
] as const;

export function HeroCarousel() {
  const reducedMotion = useReducedMotion();
  const autoplay = useRef(
    Autoplay({ delay: 4000, playOnInit: false, stopOnInteraction: false })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplay.current,
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!emblaApi) return;

    function onSelect() {
      setSelectedIndex(emblaApi!.selectedScrollSnap());
    }

    function onInit() {
      setScrollSnaps(emblaApi!.scrollSnapList());
      onSelect();
    }

    onInit();
    emblaApi.on('reInit', onInit);
    emblaApi.on('select', onSelect);

    return () => {
      emblaApi.off('reInit', onInit);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    const autoplayPlugin = emblaApi?.plugins()?.autoplay;
    if (!autoplayPlugin) return;

    if (reducedMotion) {
      autoplayPlugin.stop();
    } else {
      autoplayPlugin.play();
    }
  }, [emblaApi, reducedMotion]);

  function stopAutoplay() {
    autoplay.current.stop();
  }

  function resumeAutoplay() {
    if (reducedMotion) return;
    autoplay.current.play();
  }

  return (
    <div
      className="absolute inset-0 bg-primary-900"
      aria-roledescription="carousel"
    >
      <div className="h-full overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide) => (
            <div
              className="relative min-w-0 flex-[0_0_100%]"
              key={slide.src}
              role="group"
              aria-roledescription="slide"
            >
              <img
                className="h-full w-full object-cover"
                src={slide.src}
                alt=""
                width={1920}
                height={1080}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/35" />

      <ol
        className="absolute bottom-[clamp(3.5rem,14vw,7.5rem)] left-1/2 z-10 flex -translate-x-1/2 gap-2"
        aria-label="Selecionar imagem do carrossel"
        onFocus={stopAutoplay}
        onBlur={(event) => {
          if (event.currentTarget.contains(event.relatedTarget as Node | null)) {
            return;
          }
          resumeAutoplay();
        }}
      >
        {scrollSnaps.map((_, index) => (
          <li key={index}>
            <button
              className={clsx(
                'h-2.5 w-2.5 rounded-full transition-colors duration-300',
                index === selectedIndex
                  ? 'bg-white'
                  : 'bg-white/40 hocus:bg-white/70'
              )}
              type="button"
              aria-label={`Ir para imagem ${index + 1}`}
              aria-current={index === selectedIndex ? true : undefined}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}
