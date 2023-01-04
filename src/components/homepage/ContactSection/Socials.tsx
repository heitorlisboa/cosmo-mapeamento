import type { FC } from 'react';

// Icons
const instagramIcon = '/img/contact-icons/instagram.webp';
const facebookIcon = '/img/contact-icons/facebook.webp';
const linkedinIcon = '/img/contact-icons/linkedin.webp';

export const Socials: FC = () => (
  <ul
    className="flex justify-center gap-2 [&_a]:block [&_a]:transition-opacity hocus:[&_a]:opacity-60"
    aria-label="Redes sociais da Cosmo Mapeamento"
  >
    <li>
      <a
        href="https://www.instagram.com/cosmomapeamento/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={instagramIcon} alt="Instagram" loading="lazy" />
      </a>
    </li>
    <li>
      <a
        href="https://www.facebook.com/cosmomapeamento"
        target="_blank"
        rel="noreferrer"
      >
        <img src={facebookIcon} alt="Facebook" loading="lazy" />
      </a>
    </li>
    <li>
      <a
        href="https://www.linkedin.com/company/cosmo-mapeamento-ambiental"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedinIcon} alt="LinkedIn" loading="lazy" />
      </a>
    </li>
  </ul>
);
