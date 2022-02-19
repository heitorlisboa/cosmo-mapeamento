// React functions and types
import { forwardRef } from "react";
import type { SectionParentProps } from "../../../types";

// Styles
import styles from "./PortfolioSection.module.scss";

// Components
import Section from "../../Section";
import Title from "../../Title";
import ModalCarousel from "../../ModalCarousel";

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
  function PortfolioSectionComponent({ id, name }, ref) {
    return (
      <Section ref={ref} className={styles.section} id={id} name={name}>
        <Title color="white">
          <strong>Portfólio</strong>
        </Title>
        <ModalCarousel aria-label="Posts do Instagram de trabalhos realizados">
          <img src={post25_pg2} alt="Post 25 - Meandro abandonado pg2" />
          <img src={post25_pg1} alt="Post 25 - Meandro abandonado pg1" />
          <img src={post20} alt="Post 20 - Modelagem 3D" />
          <img src={post11} alt="Post 11 - NDVI" />
          <img src={post17} alt="Post 17 - SSEBop" />
          <img src={post2} alt="Post 2 - Missões planejadas" />
          <img
            src={post8}
            alt="Post 8 - Processamento digital de imagens de SR"
          />
          <img src={post6} alt="Post 6 - Processamento da nuvem de pontos" />
          <img src={post3} alt="Post 3 - Modelo Digital de Superfície" />
        </ModalCarousel>
      </Section>
    );
  }
);

export default PortfolioSection;
