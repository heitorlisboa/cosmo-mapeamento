import { useRef } from "react";
import { useWindowSize } from "../../hooks/WindowSize";

import styles from "./Navbar.module.scss";

const Navbar = function NavbarComponent() {
  const mobileNavToggleRef = useRef<HTMLButtonElement>(null);
  const navigationRef = useRef<HTMLDivElement>(null);
  const mobileSize = 768;
  const windowSize = useWindowSize(handleResize);

  function handleResize() {
    const mobileNavToggle = mobileNavToggleRef.current;
    const navigation = navigationRef.current;
    if (!navigation || !mobileNavToggle || !windowSize) return;

    if (windowSize > mobileSize) {
      navigation.style.visibility = "visible";
    } else if (windowSize <= mobileSize) {
      navigation.style.visibility =
        mobileNavToggle.ariaExpanded === "true" ? "visible" : "hidden";
    }
  }

  function openNav(
    mobileNavToggle: HTMLButtonElement,
    navigation: HTMLDivElement
  ) {
    mobileNavToggle.setAttribute("aria-expanded", "true");
    navigation.setAttribute("data-visible", "true");
    navigation.style.visibility = "visible";

    document.body.style.overflow = "hidden";
  }

  function closeNav(
    mobileNavToggle: HTMLButtonElement,
    navigation: HTMLDivElement
  ) {
    mobileNavToggle.setAttribute("aria-expanded", "false");
    navigation.setAttribute("data-visible", "false");
    setTimeout(() => {
      navigation.style.visibility = "hidden";
    }, 500);

    document.body.style.overflow = "auto";
  }

  function handleMobileNavToggle() {
    const mobileNavToggle = mobileNavToggleRef.current;
    const navigation = navigationRef.current;
    if (!mobileNavToggle || !navigation) return;

    const isOpen = mobileNavToggle.ariaExpanded;
    if (isOpen === "false") openNav(mobileNavToggle, navigation);
    else if (isOpen === "true") closeNav(mobileNavToggle, navigation);
  }

  return (
    <>
      <button
        className={styles.mobileNavToggle}
        aria-expanded="false"
        onClick={handleMobileNavToggle}
        ref={mobileNavToggleRef}
      >
        <span className="sr-only">Abrir/fechar menu</span>
      </button>
      <nav className={styles.navbar} data-visible="false" ref={navigationRef}>
        <ul className={styles.list}>
          <li>
            <a href="#" target="_self">
              Página Inicial
            </a>
          </li>
          <li>
            <a href="#services" target="_self">
              Catálogo de serviços
            </a>
          </li>
          <li>
            <a href="#portfolio" target="_self">
              Portfólio
            </a>
          </li>
          <li>
            <a href="#team" target="_self">
              Quem somos
            </a>
          </li>
          <li>
            <a href="#institutional" target="_self">
              Institucional
            </a>
          </li>
          <li>
            <a href="#customers-partners" target="_self">
              Clientes e parceiros
            </a>
          </li>
          <li>
            <a href="#contact" target="_self">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
