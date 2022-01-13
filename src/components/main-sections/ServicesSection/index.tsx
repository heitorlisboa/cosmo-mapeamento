import "./style.scss";
import Section from "../../Section";
import Title from "../../Title";
import GridItem from "./GridItem";

import mapPoiIcon from "../../../img/services-icons/map-poi.webp";
import layersIcon from "../../../img/services-icons/layers.webp";
import layerContourIcon from "../../../img/services-icons/layer-contour.webp";
import contourMapIcon from "../../../img/services-icons/contour-map.webp";
import statisticMapIcon from "../../../img/services-icons/statistic-map.webp";
import landcoverMapIcon from "../../../img/services-icons/landcover-map.webp";
import earthGearIcon from "../../../img/services-icons/earth-gear.webp";
import worldMapIcon from "../../../img/services-icons/world-map.webp";
import phoneRouteIcon from "../../../img/services-icons/phone-route.webp";

function ServicesSection() {
  return (
    <Section className="services-section" id="services">
      <Title color="blurple">
        <strong>Principais</strong> serviços
      </Title>
      <ul className="services-section__grid">
        <GridItem
          title="Levantamentos aerofotogramétricos"
          content="De propriedades rurais, áreas de preservação permanente, microbacias hidrográficas, loteamentos urbanos, áreas de mineração, dentre outros."
          img={mapPoiIcon}
        />
        <GridItem
          title="Elaboração de ortofotomosaicos"
          content="Imagens georreferenciadas e ortorretificadas de altíssima resolução espacial."
          img={layersIcon}
        />
        <GridItem
          title="Criação de Modelos Digitais de Elevação"
          content="Modelagem de Terreno (MDT) e de Superfície (MDS) a partir de nuvens de ponto densas e malhas triangulares de levantamento próprio."
          img={layerContourIcon}
        />
        <GridItem
          title="Extração de curvas de nível do terreno"
          content="Levantamentos planialtimétricos e cálculos volumétricos."
          img={contourMapIcon}
        />
        <GridItem
          title="Geoprocessamento e inteligência territorial"
          content="Análise e modelagem de fenômenos espaciais e ambientais."
          img={statisticMapIcon}
        />
        <GridItem
          title="Sensoriamento Remoto"
          content="Processamento digital de imagens de satélite, classificação de uso e cobertura da terra, cálculo de índices de vegetação."
          img={landcoverMapIcon}
        />
        <GridItem
          title="Estruturação de bases de dados georreferenciados"
          content="Formatos vetoriais, matriciais e modelos de metadados."
          img={earthGearIcon}
        />
        <GridItem
          title="Produção de mapas temáticos"
          content="Layouts de impressão e cartografia em geral."
          img={worldMapIcon}
        />
        <GridItem
          title="Desenvolvimento de plataformas WebGIS"
          content="Sistemas de Informação Geográfica na web para visualização de dados georreferenciados."
          img={phoneRouteIcon}
        />
      </ul>
      <div className="services-section__warning">
        <p>Importante:</p>
        <p>
          Nossos veículos aéreos são devidamente registrados no{" "}
          <strong>SISANT/ANAC</strong> e todas as missões são acompanhadas de
          autorização prévia no sistema <strong>SARPAS/DECEA</strong>, bem como
          da elaboração de documento{" "}
          <strong>de análise de risco operacional</strong>.
        </p>
        <p>Exija isso!</p>
      </div>
    </Section>
  );
}

export default ServicesSection;
