import { forwardRef } from 'react';

import type { SideNavSectionProps } from '../../SideNav';

import { Section } from '../../Section';
import { GridItem } from './GridItem';

// Geography related icons
const mapPointOfInterestIcon = '/img/services-icons/map-poi.webp';
const layersIcon = '/img/services-icons/layers.webp';
const layerContourIcon = '/img/services-icons/layer-contour.webp';
const contourMapIcon = '/img/services-icons/contour-map.webp';
const statisticMapIcon = '/img/services-icons/statistic-map.webp';
const landcoverMapIcon = '/img/services-icons/landcover-map.webp';
const earthGearIcon = '/img/services-icons/earth-gear.webp';
const worldMapIcon = '/img/services-icons/world-map.webp';
const phoneRouteIcon = '/img/services-icons/phone-route.webp';

const DISPLAY_NAME = 'ServicesSection';
export const ServicesSection = forwardRef<HTMLDivElement, SideNavSectionProps>(
  (props, ref) => (
    <Section className="bg-white" {...props} ref={ref}>
      <h2 className="text-primary-800">
        <strong>Principais</strong> serviços
      </h2>

      <ul className="mx-auto flex max-w-5xl flex-wrap justify-around gap-x-4 gap-y-10 p-4 md:gap-x-16">
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
          content="Modelagem de Terreno (MDT) e de Superfície (MDS) a partir de nuvens de ponto densas e malhas triangulares de levantamento próprio."
          imgUrl={layerContourIcon}
        />
        <GridItem
          title="Extração de curvas de nível do terreno"
          content="Levantamentos planialtimétricos e cálculos volumétricos."
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
      </ul>

      <div className="mx-auto my-8 w-[calc(100%-1rem)] max-w-2xl rounded-2xl p-4 text-center text-lg font-[350] text-primary-800 shadow-[0_0_20px_rgb(0_0_0/0.1)] md:rounded-full md:border-2 md:border-solid md:border-primary-800 md:px-12 md:py-0 md:text-neutral-600">
        <p>Importante:</p>
        <p>
          Nossos veículos aéreos são devidamente registrados no{' '}
          <strong>SISANT/ANAC</strong> e todas as missões são acompanhadas de
          autorização prévia no sistema <strong>SARPAS/DECEA</strong>, bem como
          da elaboração de documento{' '}
          <strong>de análise de risco operacional</strong>.
        </p>
        <p>Exija isso!</p>
      </div>
    </Section>
  )
);

ServicesSection.displayName = DISPLAY_NAME;
