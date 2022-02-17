import styles from "./Socials.module.scss";

// Icons
const instagramIcon = "/img/contact-icons/instagram.webp";
const facebookIcon = "/img/contact-icons/facebook.webp";
const linkedinIcon = "/img/contact-icons/linkedin.webp";

const Socials = function SocialsComponent() {
  return (
    <ul className={styles.list} aria-label="Redes sociais da Cosmo Mapeamento">
      <li>
        <a
          href="https://www.instagram.com/cosmomapeamento/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <img src={instagramIcon} alt="" />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/cosmomapeamento"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
        >
          <img src={facebookIcon} alt="" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/company/cosmo-mapeamento-ambiental"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <img src={linkedinIcon} alt="" />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
