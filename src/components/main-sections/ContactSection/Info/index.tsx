/* eslint-disable @next/next/no-img-element */
import styles from "./ContactInfo.module.scss";

const whatsappIcon = "/img/contact-icons/whatsapp.webp";
const localIcon = "/img/contact-icons/local.webp";

function Info() {
  return (
    <ul className={styles.infoList} aria-label="Informações de contato">
      <li>
        <p>Email</p>
        <p>
          <a href="mailto:contato@cosmomapeamento.com.br">
            contato@cosmomapeamento.com.br
          </a>
        </p>
      </li>
      <li className={styles.whatsapp}>
        <div className={styles.grid}>
          <a href="https://wa.me/message/YAJAA3RXTF7RG1" aria-label="Whatsapp">
            <img src={whatsappIcon} alt="" />
          </a>
          <p>Telefone / Whatsapp</p>
          <p>(31) 99897-9774</p>
        </div>
        <div>
          <p>Atendimento</p>
          <p>Segunda à sexta - 09h às 18h</p>
        </div>
      </li>
      <li className={styles.grid}>
        <img src={localIcon} alt="" />
        <p>Contagem - Minas Gerais</p>
        <p>CNPJ: 41.899.909/0001-20</p>
      </li>
    </ul>
  );
}

export default Info;
