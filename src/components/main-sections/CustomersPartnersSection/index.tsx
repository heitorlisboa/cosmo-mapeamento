import "./style.scss";
import Section from "../../Section";
import Title from "../../Title";

import studioMatilhaLogo from "../../../img/customers-partners-logos/studio-matilha.webp";
import algerLogo from "../../../img/customers-partners-logos/alger.webp";
import innovarLogo from "../../../img/customers-partners-logos/innovar.webp";
import vasgeoLogo from "../../../img/customers-partners-logos/vasgeo.webp";
import prefeituraNazarenoLogo from "../../../img/customers-partners-logos/prefeitura-nazareno.webp";
import aplicageoLogo from "../../../img/customers-partners-logos/aplicageo.webp";

function CustomersPartnersSection() {
  return (
    <Section className="customers-partners-section" id="customers-partners">
      <Title color="blurple">
        <strong>CLIENTES</strong> &amp; PARCEIROS
      </Title>
      <div className="customers-partners-section__grid">
        <a
          href="https://www.studiomatilha.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={studioMatilhaLogo} alt="Logo do Studio Matilha" />
        </a>
        <a
          href="https://www.algerconsultoria.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={algerLogo} alt="Logo da Alger" />
        </a>
        <a
          href="https://www.instagram.com/innovarcontabilidadecontagem/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={innovarLogo} alt="Logo da Innovar" />
        </a>
        <a href="https://www.vasgeo.com.br/" target="_blank" rel="noreferrer">
          <img src={vasgeoLogo} alt="Logo da VasGeo" />
        </a>
        <a
          href="http://www.nazareno.mg.gov.br/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            id="nazareno"
            src={prefeituraNazarenoLogo}
            alt="Logo da Prefeitura Municipal de Nazareno (Adiministração de 2021 a 2024)"
          />
        </a>
        <a
          href="https://www.instagram.com/rodrigobelote.ambiental/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={aplicageoLogo} alt="Logo da AplicaGeo" />
        </a>
      </div>
    </Section>
  );
}

export default CustomersPartnersSection;
