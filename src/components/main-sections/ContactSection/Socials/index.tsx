import "./style.scss";

import instagramIcon from "../../../../img/contact-icons/instagram.webp";
import facebookIcon from "../../../../img/contact-icons/facebook.webp";
import linkedinIcon from "../../../../img/contact-icons/linkedin.webp";

function Socials() {
  return (
    <ul className="socials" aria-label="Redes sociais da Cosmo Mapeamento">
      <li>
        <a
          href="https://www.instagram.com/cosmomapeamento/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <img src={instagramIcon} alt="Logo do Instagram" />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/cosmomapeamento"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
        >
          <img src={facebookIcon} alt="Logo do Facebook" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/company/cosmo-mapeamento-ambiental"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <img src={linkedinIcon} alt="Logo do LinkedIn" />
        </a>
      </li>
    </ul>
  );
}

export default Socials;
