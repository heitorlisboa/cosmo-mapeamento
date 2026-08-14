import { forwardRef } from 'react';

import type { SideNavSectionProps } from '../../SideNav';

import { Section } from '../../Section';
import { GridItem } from './GridItem';

export const services = [
  {
    title: 'Levantamentos aerofotogramétricos',
    content:
      'De propriedades rurais, áreas de preservação permanente, microbacias hidrográficas, loteamentos urbanos, áreas de mineração, dentre outros.',
    imgUrl: '/img/services-icons/map-poi.svg',
  },
  {
    title: 'Elaboração de ortofotomosaicos',
    content:
      'Imagens georreferenciadas e ortorretificadas de altíssima resolução espacial.',
    imgUrl: '/img/services-icons/layers.svg',
  },
  {
    title: 'Criação de Modelos Digitais de Elevação',
    content:
      'Modelagem de Superfície (MDS) e Terreno (MDT) a partir de nuvens de pontos e malhas triangulares de levantamento próprio.',
    imgUrl: '/img/services-icons/layer-contour.svg',
  },
  {
    title: 'Topografia',
    content:
      'Levantamentos planialtimétricos, extração de curvas de nível do terreno e cálculos volumétricos.',
    imgUrl: '/img/services-icons/contour-map.svg',
  },
  {
    title: 'Geoprocessamento e inteligência territorial',
    content: 'Análise e modelagem de fenômenos espaciais e ambientais.',
    imgUrl: '/img/services-icons/statistic-map.svg',
  },
  {
    title: 'Sensoriamento Remoto',
    content:
      'Processamento digital de imagens de satélite, classificação de uso e cobertura da terra, cálculo de índices de vegetação.',
    imgUrl: '/img/services-icons/landcover-map.svg',
  },
  {
    title: 'Estruturação de bases de dados georreferenciados',
    content: 'Formatos vetoriais, matriciais e modelos de metadados.',
    imgUrl: '/img/services-icons/earth-gear.svg',
  },
  {
    title: 'Produção de mapas temáticos',
    content: 'Layouts de impressão e cartografia em geral.',
    imgUrl: '/img/services-icons/world-map.svg',
  },
  {
    title: 'Desenvolvimento de plataformas WebGIS',
    content:
      'Sistemas de Informação Geográfica na web para visualização de dados georreferenciados.',
    imgUrl: '/img/services-icons/phone-route.svg',
  },
  {
    title: 'Georreferenciamento de imóveis rurais',
    content:
      'Identificação precisa dos perímetros do imóvel, com memorial descritivo e demais peças técnicas para registro junto ao INCRA.',
    imgUrl: '/img/services-icons/gnss-antenna.svg',
  },
] as const;

const DISPLAY_NAME = 'ServicesSection';
export const ServicesSection = forwardRef<HTMLDivElement, SideNavSectionProps>(
  (props, ref) => (
    <Section className="bg-white py-12" {...props} ref={ref}>
      <h2 className="font-title text-primary-800">
        <strong>Catálogo</strong> de serviços
      </h2>

      <div className="my-auto">
        <ul className="mx-auto mt-8 grid max-w-[88rem] gap-x-12 gap-y-12 px-4 xs:px-8 sm:grid-cols-2 sm:px-12 md:px-16 lg:gap-y-6">
          {services.map(({ title, content, imgUrl }, index) => (
            <li key={title} className="flex gap-4">
              <img
                className="mt-1 h-10 w-10 shrink-0 opacity-80"
                src={imgUrl}
                alt=""
                width={40}
                height={40}
                loading="lazy"
              />
              <div>
                <h3 className="m-0 px-0 text-start font-title text-sm font-bold text-primary-900 xs:text-base md:text-lg">
                  {title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-primary-900/85">
                  {content}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* <ul className="mx-auto mt-16 flex max-w-[88rem] flex-wrap justify-around gap-x-4 gap-y-10 px-4 md:gap-x-16 md:px-8 lg:mt-24 lg:gap-x-4 lg:gap-y-16">
          <GridItem
            title="Levantamentos aerofotogramétricos"
            content="De propriedades rurais, áreas de preservação permanente, microbacias hidrográficas, loteamentos urbanos, áreas de mineração, dentre outros."
            imgUrl={mapPointOfInterestIcon}
          />
          <GridItem
            title="Elaboração de ortofotomosaicos"
            content="Imagens georreferenciadas e ortorretificadas de altíssima resolução espacial."
            imgUrl={layersIcon}
          />
          <GridItem
            title="Criação de Modelos Digitais de Elevação"
            content="Modelagem de Superfície (MDS) e Terreno (MDT) a partir de nuvens de pontos e malhas triangulares de levantamento próprio."
            imgUrl={layerContourIcon}
          />
          <GridItem
            title="Topografia"
            content="Levantamentos planialtimétricos, extração de curvas de nível do terreno e cálculos volumétricos."
            imgUrl={contourMapIcon}
          />
          <GridItem
            title="Geoprocessamento e inteligência territorial"
            content="Análise e modelagem de fenômenos espaciais e ambientais."
            imgUrl={statisticMapIcon}
          />
          <GridItem
            title="Sensoriamento Remoto"
            content="Processamento digital de imagens de satélite, classificação de uso e cobertura da terra, cálculo de índices de vegetação."
            imgUrl={landcoverMapIcon}
          />
          <GridItem
            title="Estruturação de bases de dados georreferenciados"
            content="Formatos vetoriais, matriciais e modelos de metadados."
            imgUrl={earthGearIcon}
          />
          <GridItem
            title="Produção de mapas temáticos"
            content="Layouts de impressão e cartografia em geral."
            imgUrl={worldMapIcon}
          />
          <GridItem
            title="Desenvolvimento de plataformas WebGIS"
            content="Sistemas de Informação Geográfica na web para visualização de dados georreferenciados."
            imgUrl={phoneRouteIcon}
          />
          <GridItem
            title="Georreferenciamento de imóveis rurais"
            content="Identificação precisa dos perímetros do imóvel, com memorial descritivo e demais peças técnicas para certificação junto ao INCRA."
            imgUrl={gnssAntenna}
          />
        </ul> */}
      </div>
    </Section>
  )
);

ServicesSection.displayName = DISPLAY_NAME;
