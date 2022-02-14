import { forwardRef } from "react";
import { SectionParentProps } from "../../../types";

import styles from "./PortfolioSection.module.scss";

import Section from "../../Section";
import Title from "../../Title";
import FlexItem from "./FlexItem";

// Portfolio images
const post25_pg2 = "/img/portfolio-img/post-25-pg-2.webp";
const post25_pg1 = "/img/portfolio-img/post-25-pg-1.webp";
const post20 = "/img/portfolio-img/post-20.webp";
const post11 = "/img/portfolio-img/post-11.webp";
const post17 = "/img/portfolio-img/post-17.webp";
const post2 = "/img/portfolio-img/post-2.webp";
const post8 = "/img/portfolio-img/post-8.webp";
const post6 = "/img/portfolio-img/post-6.webp";
const post3 = "/img/portfolio-img/post-3.webp";

const PortfolioSection = forwardRef<HTMLElement, SectionParentProps>(
  (props, ref) => {
    return (
      <Section ref={ref} className={styles.section} id={props.id}>
        <Title color="white">
          <strong>Portfólio</strong>
        </Title>
        <ul className={styles.list}>
          <FlexItem img={post25_pg2} alt="Post 25 - Meandro abandonado pg2" />
          <FlexItem img={post25_pg1} alt="Post 25 - Meandro abandonado pg1" />
          <FlexItem img={post20} alt="Post 20 - Modelagem 3D" />
          <FlexItem img={post11} alt="Post 11 - NDVI" />
          <FlexItem img={post17} alt="Post 17 - SSEBop" />
          <FlexItem img={post2} alt="Post 2 - Missões planejadas" />
          <FlexItem
            img={post8}
            alt="Post 8 - Processamento digital de imagens de SR"
          />
          <FlexItem
            img={post6}
            alt="Post 6 - Processamento da nuvem de pontos"
          />
          <FlexItem img={post3} alt="Post 3 - Modelo Digital de Superfície" />
        </ul>
      </Section>
    );
  }
);

PortfolioSection.displayName = "PortfolioSection";

export default PortfolioSection;
