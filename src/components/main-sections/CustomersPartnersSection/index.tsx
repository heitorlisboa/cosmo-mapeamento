/* eslint-disable @next/next/no-img-element */
import { forwardRef } from "react";
import { SectionParentProps } from "../../../types";

import styles from "./CustomersPartnersSection.module.scss";

import Section from "../../Section";
import Title from "../../Title";

// Logos
const studioMatilhaLogo = "/img/customers-partners-logos/studio-matilha.webp";
const algerLogo = "/img/customers-partners-logos/alger.webp";
const innovarLogo = "/img/customers-partners-logos/innovar.webp";
const vasgeoLogo = "/img/customers-partners-logos/vasgeo.webp";
const prefeituraNazarenoLogo =
  "/img/customers-partners-logos/prefeitura-nazareno.webp";
const aplicageoLogo = "/img/customers-partners-logos/aplicageo.webp";

const CustomersPartnersSection = forwardRef<HTMLElement, SectionParentProps>(
  (props, ref) => {
    return (
      <Section ref={ref} className={styles.section} id={props.id}>
        <Title color="blurple">
          <strong>Clientes</strong> &amp; Parceiros
        </Title>
        <ul className={styles.list}>
          <li>
            <a
              href="https://www.studiomatilha.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Studio Matilha"
            >
              <img src={studioMatilhaLogo} alt="" />
            </a>
          </li>
          <li>
            <a
              href="https://www.algerconsultoria.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Alger"
            >
              <img src={algerLogo} alt="" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/innovarcontabilidadecontagem/"
              target="_blank"
              rel="noreferrer"
              aria-label="Innovar"
            >
              <img src={innovarLogo} alt="" />
            </a>
          </li>
          <li>
            <a
              href="https://www.vasgeo.com.br/"
              target="_blank"
              rel="noreferrer"
              aria-label="VasGeo"
            >
              <img src={vasgeoLogo} alt="" />
            </a>
          </li>
          <li>
            <a
              href="http://www.nazareno.mg.gov.br/"
              target="_blank"
              rel="noreferrer"
              aria-label="Prefeitura Municipal de Nazareno (Adiministração de 2021 a 2024)"
            >
              <img
                className={styles.nazareno}
                src={prefeituraNazarenoLogo}
                alt=""
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/rodrigobelote.ambiental/"
              target="_blank"
              rel="noreferrer"
              aria-label="AplicaGeo"
            >
              <img src={aplicageoLogo} alt="" />
            </a>
          </li>
        </ul>
      </Section>
    );
  }
);

CustomersPartnersSection.displayName = "CustomersPartnersSection";

export default CustomersPartnersSection;
