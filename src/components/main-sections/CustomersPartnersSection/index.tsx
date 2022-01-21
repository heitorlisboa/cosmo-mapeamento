import { forwardRef } from "react";
import { SectionParentProps } from "../../../types";
import "./style.scss";
import Section from "../../Section";
import Title from "../../Title";

// Logos
import studioMatilhaLogo from "../../../img/customers-partners-logos/studio-matilha.webp";
import algerLogo from "../../../img/customers-partners-logos/alger.webp";
import innovarLogo from "../../../img/customers-partners-logos/innovar.webp";
import vasgeoLogo from "../../../img/customers-partners-logos/vasgeo.webp";
import prefeituraNazarenoLogo from "../../../img/customers-partners-logos/prefeitura-nazareno.webp";
import aplicageoLogo from "../../../img/customers-partners-logos/aplicageo.webp";

const CustomersPartnersSection = forwardRef<HTMLElement, SectionParentProps>(
  (props, ref) => {
    return (
      <Section ref={ref} className="customers-partners-section" id={props.id}>
        <Title color="blurple">
          <strong>CLIENTES</strong> &amp; PARCEIROS
        </Title>
        <ul className="customers-partners-section__grid">
          <li>
            <a
              href="https://www.studiomatilha.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={studioMatilhaLogo} alt="Logo do Studio Matilha" />
            </a>
          </li>
          <li>
            <a
              href="https://www.algerconsultoria.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={algerLogo} alt="Logo da Alger" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/innovarcontabilidadecontagem/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={innovarLogo} alt="Logo da Innovar" />
            </a>
          </li>
          <li>
            <a
              href="https://www.vasgeo.com.br/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={vasgeoLogo} alt="Logo da VasGeo" />
            </a>
          </li>
          <li>
            <a
              href="http://www.nazareno.mg.gov.br/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="nazareno"
                src={prefeituraNazarenoLogo}
                alt="Logo da Prefeitura Municipal de Nazareno (Adiministração de 2021 a 2024)"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/rodrigobelote.ambiental/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={aplicageoLogo} alt="Logo da AplicaGeo" />
            </a>
          </li>
        </ul>
      </Section>
    );
  }
);

export default CustomersPartnersSection;
