import { forwardRef } from 'react';

import type { SideNavSectionProps } from '../SideNav';

import { Section } from '../Section';

// Logos
const studioMatilhaLogo = '/img/customers-partners-logos/studio-matilha.webp';
const algerLogo = '/img/customers-partners-logos/alger.webp';
const innovarLogo = '/img/customers-partners-logos/innovar.webp';
const vasgeoLogo = '/img/customers-partners-logos/vasgeo.webp';
const prefeituraNazarenoLogo =
  '/img/customers-partners-logos/prefeitura-nazareno.webp';
const aplicageoLogo = '/img/customers-partners-logos/aplicageo.webp';
const engenhariaVerdeLogo =
  '/img/customers-partners-logos/engenharia-verde.webp';

const DISPLAY_NAME = 'CustomersPartnersSection';
export const CustomersPartnersSection = forwardRef<
  HTMLDivElement,
  SideNavSectionProps
>((props, ref) => (
  <Section className="bg-white" {...props} ref={ref}>
    <h2 className="text-primary-800">
      <strong>Clientes</strong> &amp; Parceiros
    </h2>
    <ul className="mx-auto my-16 flex max-w-5xl flex-wrap items-center justify-center gap-8 px-4 md:gap-16 [&_li]:basis-[clamp(175px,20vw,250px)] [&_img]:w-full">
      <li className="px-[clamp(0.5rem,2vw,2rem)]">
        <a
          href="https://www.studiomatilha.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={studioMatilhaLogo} alt="Studio Matilha" />
        </a>
      </li>
      <li className="px-[clamp(0.5rem,2vw,2rem)]">
        <a
          href="https://www.algerconsultoria.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={algerLogo} alt="Alger, Consultoria e Assesoria Jurídica" />
        </a>
      </li>
      <li className="px-[clamp(0.5rem,2vw,2rem)]">
        <a
          href="https://www.instagram.com/innovarcontabilidadecontagem/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={innovarLogo} alt="Innovar, Contabilidade" />
        </a>
      </li>
      <li>
        <a href="https://www.vasgeo.com.br/" target="_blank" rel="noreferrer">
          <img src={vasgeoLogo} alt="VasGeo" />
        </a>
      </li>
      <li>
        <a
          href="http://www.nazareno.mg.gov.br/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="aspect-[3/1] w-full object-cover object-[50%_45%]"
            src={prefeituraNazarenoLogo}
            alt="Prefeitura Municipal de Nazareno (Adiministração de 2021 a 2024)"
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/aplicageo/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={aplicageoLogo}
            alt="AplicaGeo, Soluções em geoprocessamento e licenciamento ambiental"
          />
        </a>
      </li>
      <li>
        <img
          src={engenhariaVerdeLogo}
          alt="Engenharia Verde, Consultoria e projetos LTDA"
        />
      </li>
    </ul>
  </Section>
));

CustomersPartnersSection.displayName = DISPLAY_NAME;
