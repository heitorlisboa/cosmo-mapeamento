import "./style.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
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
  );
}

export default Navbar;
