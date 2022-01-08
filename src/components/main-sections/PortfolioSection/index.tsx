import "./style.scss";
import Section from "../../Section";
import Title from "../../Title";
import FlexItem from "./FlexItem";

import post25_pg2 from "../../../img/portfolio-img/post-25-pg-2.png";
import post25_pg1 from "../../../img/portfolio-img/post-25-pg-1.png";
import post20 from "../../../img/portfolio-img/post-20.png";
import post11 from "../../../img/portfolio-img/post-11.png";
import post17 from "../../../img/portfolio-img/post-17.png";
import post2 from "../../../img/portfolio-img/post-2.png";
import post8 from "../../../img/portfolio-img/post-8.png";
import post6 from "../../../img/portfolio-img/post-6.png";
import post3 from "../../../img/portfolio-img/post-3.png";

function PortfolioSection() {
  return (
    <Section className="portfolio-section">
      <Title color="white">
        <strong>Portfólio</strong>
      </Title>
      <div className="portfolio-section__flex">
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
        <FlexItem img={post6} alt="Post 6 - Processamento da nuvem de pontos" />
        <FlexItem img={post3} alt="Post 3 - Modelo Digital de Superfície" />
      </div>
    </Section>
  );
}

export default PortfolioSection;
