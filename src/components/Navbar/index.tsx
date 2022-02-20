import { useRef } from "react";
import styles from "./Navbar.module.scss";

const Navbar = function NavbarComponent() {
  const mobileNavToggleRef = useRef<HTMLButtonElement>(null);
  const navigationRef = useRef<HTMLDivElement>(null);

  function handleMobileNavToggle() {
    const mobileNavToggle = mobileNavToggleRef.current;
    const navigation = navigationRef.current;
    if (!mobileNavToggle || !navigation) return;

    const isOpen = mobileNavToggle.ariaExpanded;
    switch (isOpen) {
      case "false":
        mobileNavToggle.setAttribute("aria-expanded", "true");
        navigation.setAttribute("data-visible", "true");

        document.body.style.overflow = "hidden";
        break;

      case "true":
        mobileNavToggle.setAttribute("aria-expanded", "false");
        navigation.setAttribute("data-visible", "false");

        document.body.style.overflow = "auto";
        break;
    }
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
