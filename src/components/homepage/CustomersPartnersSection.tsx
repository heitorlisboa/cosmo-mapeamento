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
const citLogo = '/img/customers-partners-logos/cit.webp';
const geobyteLogo = '/img/customers-partners-logos/geobyte.webp';
const nmcLogo = '/img/customers-partners-logos/nmc.webp';
const arcadisLogo = '/img/customers-partners-logos/arcadis.webp';
const eyLogo = '/img/customers-partners-logos/ey.webp';
const carsteLogo = '/img/customers-partners-logos/carste.webp';
const vilaPampulhaLogo = '/img/customers-partners-logos/vila-pampulha.webp';
const arqueaLogo = '/img/customers-partners-logos/arquea.webp';
const topoAgroLogo = '/img/customers-partners-logos/topo-agro.webp';

const DISPLAY_NAME = 'CustomersPartnersSection';
export const CustomersPartnersSection = forwardRef<
  HTMLDivElement,
  SideNavSectionProps
>((props, ref) => (
  <Section className="gap-16 bg-white" {...props} ref={ref}>
    <h2 className="text-primary-800">
      <strong>Clientes</strong> &amp; Parceiros
    </h2>
    <ul className="mx-auto my-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-4 px-4 md:gap-x-16 md:gap-y-8 lg:px-8 xl:px-0 [&_a]:block [&_img]:w-full [&_li]:basis-[clamp(10rem,20vw,13rem)]">
      <li className="px-4 sm:px-6 lg:px-10 xl:px-[3.25rem]">
        <a
          href="https://www.studiomatilha.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={studioMatilhaLogo} alt="Studio Matilha" loading="lazy" />
        </a>
      </li>

      <li className="px-4 sm:px-6 lg:px-10 xl:px-[3.25rem]">
        <a
          href="https://www.algerconsultoria.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={algerLogo}
            alt="Alger, Consultoria e Assesoria Jurídica"
            loading="lazy"
          />
        </a>
      </li>

      <li className="px-1 sm:px-3 lg:px-7 xl:px-10">
        <a
          href="https://www.instagram.com/cont.innovar/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={innovarLogo} alt="Innovar, Contabilidade" loading="lazy" />
        </a>
      </li>

      <li>
        <a
          href="https://www.linkedin.com/company/vasgeo/posts/?feedView=all"
          target="_blank"
          rel="noreferrer"
        >
          <img src={vasgeoLogo} alt="VasGeo" loading="lazy" />
        </a>
      </li>

      <li className="xl:px-3">
        <a
          href="http://www.nazareno.mg.gov.br/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={prefeituraNazarenoLogo}
            alt="Prefeitura Municipal de Nazareno (Adiministração de 2021 a 2024)"
            loading="lazy"
          />
        </a>
      </li>

      <li className="xl:px-3">
        <a
          href="https://www.instagram.com/aplicageo/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={aplicageoLogo}
            alt="AplicaGeo, Soluções em geoprocessamento e licenciamento ambiental"
            loading="lazy"
          />
        </a>
      </li>

      <li className="xl:px-3">
        <a
          href="https://www.linkedin.com/company/geobit-consultoria-e-tecnologia-gis/about/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={geobyteLogo} alt="Geobyte" loading="lazy" />
        </a>
      </li>

      <li className="xl:px-3">
        <a
          href="https://www.inteligenciaterritorial.org/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={citLogo}
            alt="CIT, Centro de Inteligência Territorial"
            loading="lazy"
          />
        </a>
      </li>

      <li>
        <a
          href="https://www.engenhariaverde.eng.br/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={engenhariaVerdeLogo}
            alt="Engenharia Verde, Consultoria e projetos LTDA"
            loading="lazy"
          />
        </a>
      </li>

      <li className="xl:px-3">
        <a
          href="https://nmcintegrativa.com.br/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={nmcLogo} alt="" loading="lazy" />
        </a>
      </li>

      <li className="xl:px-3">
        <a
          href="https://www.arcadis.com/pt-br"
          target="_blank"
          rel="noreferrer"
        >
          <img src={arcadisLogo} alt="" loading="lazy" />
        </a>
      </li>

      <li className="px-4 sm:px-6 lg:px-10 xl:px-[3.25rem]">
        <a href="https://www.ey.com/pt_br" target="_blank" rel="noreferrer">
          <img src={eyLogo} alt="" loading="lazy" />
        </a>
      </li>

      <li className="px-2 sm:px-4 lg:px-8 xl:px-10">
        <a href="https://carste.com.br/" target="_blank" rel="noreferrer">
          <img src={carsteLogo} alt="" loading="lazy" />
        </a>
      </li>

      <li className="xl:px-3">
        <a
          href="https://coworkingvillapampulha.com.br/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={vilaPampulhaLogo} alt="" loading="lazy" />
        </a>
      </li>

      <li className="px-2 sm:px-4 lg:px-8 xl:px-10">
        <a
          href="https://www.linkedin.com/company/arquea-engenharia-e-geotecnologia/?originalSubdomain=br"
          target="_blank"
          rel="noreferrer"
        >
          <img src={arqueaLogo} alt="" loading="lazy" />
        </a>
      </li>

      <li>
        <a
          href="https://www.instagram.com/topoagro_solucoes/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={topoAgroLogo} alt="" loading="lazy" />
        </a>
      </li>
    </ul>
  </Section>
));

CustomersPartnersSection.displayName = DISPLAY_NAME;
