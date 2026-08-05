import { forwardRef } from 'react';

import type { SideNavSectionProps } from '../../SideNav';

import { Section } from '../../Section';
import { GridItem } from './GridItem';

// Geography related icons
const mapPointOfInterestIcon = '/img/services-icons/map-poi.svg';
const layersIcon = '/img/services-icons/layers.svg';
const layerContourIcon = '/img/services-icons/layer-contour.svg';
const contourMapIcon = '/img/services-icons/contour-map.svg';
const statisticMapIcon = '/img/services-icons/statistic-map.svg';
const landcoverMapIcon = '/img/services-icons/landcover-map.svg';
const earthGearIcon = '/img/services-icons/earth-gear.svg';
const worldMapIcon = '/img/services-icons/world-map.svg';
const phoneRouteIcon = '/img/services-icons/phone-route.svg';
const gnssAntenna = '/img/services-icons/gnss-antenna.svg';

const DISPLAY_NAME = 'ServicesSection';
export const ServicesSection = forwardRef<HTMLDivElement, SideNavSectionProps>(
  (props, ref) => (
    <Section className="bg-white" {...props} ref={ref}>
      <h2 className="font-title text-primary-800">
        <strong>Catálogo</strong> de serviços
      </h2>

      <div className="my-auto">
        <ul className="mx-auto mt-16 flex max-w-[88rem] flex-wrap justify-around gap-x-4 gap-y-10 px-4 md:gap-x-16 md:px-8 lg:mt-24 lg:gap-x-4 lg:gap-y-16">
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
        </ul>
      </div>
    </Section>
  )
);

ServicesSection.displayName = DISPLAY_NAME;
