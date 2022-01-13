import "./style.scss"

import whatsappIcon from "../../../../img/contact-icons/whatsapp.webp";
import localIcon from "../../../../img/contact-icons/local.webp";

function Info() {
  return (
    <ul className="contact-info" aria-label="Informações de contato">
      <li>
        <p>Email</p>
        <p>
          <a href="mailto:contato@cosmomapeamento.com.br">
            contato@cosmomapeamento.com.br
          </a>
        </p>
      </li>
      <li className="whatsapp">
        <div className="whatsapp__grid">
          <a href="https://wa.me/message/YAJAA3RXTF7RG1" aria-label="Whatsapp">
            <img src={whatsappIcon} alt="Logo do Whatsapp" />
          </a>
          <p>Telefone / Whatsapp</p>
          <p>(31) 99897-9774</p>
        </div>
        <div>
          <p>Atendimento</p>
          <p>Segunda à sexta - 09h às 18h</p>
        </div>
      </li>
      <li className="local">
        <img src={localIcon} alt="" aria-hidden="true" />
        <p>Contagem - Minas Gerais</p>
        <p>CNPJ: 41.899.909/0001-20</p>
      </li>
    </ul>
  );
}

export default Info;
