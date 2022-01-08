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
          <a href="#" target="_self">
            Catálogo de serviços
          </a>
        </li>
        <li>
          <a href="#" target="_self">
            Portfólio
          </a>
        </li>
        <li>
          <a href="#" target="_self">
            Quem somos
          </a>
        </li>
        <li>
          <a href="#" target="_self">
            Clientes e parceiros
          </a>
        </li>
        <li>
          <a href="#" target="_self">
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
