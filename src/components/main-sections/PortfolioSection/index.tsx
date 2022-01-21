import { forwardRef } from "react";
import { SectionParentProps } from "../../../types";
import "./style.scss";
import Section from "../../Section";
import Title from "../../Title";
import FlexItem from "./FlexItem";

// Portfolio images
import post25_pg2 from "../../../img/portfolio-img/post-25-pg-2.webp";
import post25_pg1 from "../../../img/portfolio-img/post-25-pg-1.webp";
import post20 from "../../../img/portfolio-img/post-20.webp";
import post11 from "../../../img/portfolio-img/post-11.webp";
import post17 from "../../../img/portfolio-img/post-17.webp";
import post2 from "../../../img/portfolio-img/post-2.webp";
import post8 from "../../../img/portfolio-img/post-8.webp";
import post6 from "../../../img/portfolio-img/post-6.webp";
import post3 from "../../../img/portfolio-img/post-3.webp";

const PortfolioSection = forwardRef<HTMLElement, SectionParentProps>(
  (props, ref) => {
    return (
      <Section ref={ref} className="portfolio-section" id={props.id}>
        <Title color="white">
          <strong>Portfólio</strong>
        </Title>
        <ul className="portfolio-section__flex">
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

export default PortfolioSection;
