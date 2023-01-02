import { type FC, useState } from 'react';

import { getScrollWidthAsPx } from '../utils/get-scroll-width';

export const Navbar: FC = () => {
  const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false);

  function handleToggleMobileNavigation() {
    setIsMobileNavigationOpen((currentState) => {
      const nextState = !currentState;
      const lockScrollClassName = 'overflow-hidden';

      if (nextState === true) {
        document.body.style.paddingRight = getScrollWidthAsPx();
        document.body.classList.add(lockScrollClassName);
      } else {
        document.body.removeAttribute('style');
        document.body.classList.remove(lockScrollClassName);
      }

      return nextState;
    });
  }

  return (
    <>
      <button
        className="absolute top-6 right-6 z-20 aspect-square w-10 bg-[url(/img/mobile-nav-icons/menu-icon.svg)] bg-cover bg-no-repeat aria-expanded:fixed aria-expanded:bg-[url(/img/mobile-nav-icons/close-icon.svg)] aria-expanded:drop-shadow-md md:hidden"
        style={{
          marginRight: isMobileNavigationOpen
            ? getScrollWidthAsPx()
            : undefined,
        }}
        aria-expanded={isMobileNavigationOpen}
        onClick={handleToggleMobileNavigation}
      >
        <span className="sr-only">Abrir/fechar menu</span>
      </button>
      {/* "data-[visible='true']:translate-x-0" overlaps 'md:transform-none' */}
      {/* "data-[visible='true']:visible" overlaps 'md:visible' */}
      <nav
        className="invisible fixed inset-0 left-[unset] z-10 translate-x-full bg-neutral-200/60 px-8 py-12 text-xl font-bold leading-normal text-primary-800 shadow-lg backdrop-blur transition-[transform,visibility] duration-500 data-[visible='true']:visible data-[visible='true']:translate-x-0 md:visible md:static md:z-auto md:mx-auto md:w-[calc(100%-2rem)] md:max-w-5xl md:transform-none md:rounded-full md:bg-white/40 md:py-5 md:text-base md:leading-normal md:backdrop-filter-none md:transition-none"
        style={{
          paddingRight: isMobileNavigationOpen
            ? undefined
            : `calc(2rem - ${getScrollWidthAsPx()})`,
        }}
        data-visible={isMobileNavigationOpen}
      >
        <ul className="flex w-64 flex-col gap-8 md:w-auto md:flex-row md:flex-wrap md:justify-around md:gap-4 [&_a]:transition-colors [&_a]:duration-300 hocus:[&_a]:text-white hocus:[&_a]:drop-shadow-md">
          <li>
            <a className="text-white drop-shadow-md" href="#">
              Página Inicial
            </a>
          </li>
          <li>
            <a href="#services">Catálogo de serviços</a>
          </li>
          <li>
            <a href="#portfolio">Portfólio</a>
          </li>
          <li>
            <a href="#team">Quem somos</a>
          </li>
          <li>
            <a href="#institutional">Institucional</a>
          </li>
          <li>
            <a href="#customers-partners">Clientes e parceiros</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
