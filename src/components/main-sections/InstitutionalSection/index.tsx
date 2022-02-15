import { forwardRef } from "react";
import { SectionParentProps } from "../../../types";

import styles from "./InstitutionalSection.module.scss";

import Section from "../../Section";
import Title from "../../Title";
import TextBox from "../../TextBox";

const logoCosmo = "/img/logo-cosmo.webp";

const InstitutionalSection = forwardRef<HTMLElement, SectionParentProps>(
  (props, ref) => {
    return (
      <Section ref={ref} className={styles.section} id={props.id}>
        <Title className={styles.outlinedText} color="white">
          <strong>Institucional</strong>
        </Title>
        <div className={styles.grid}>
          <img className={styles.logo} src={logoCosmo} alt="" />
          <TextBox>
            <p>
              A <strong>missão</strong> da equipe <strong>Cosmo</strong> é
              oferecer soluções inovadoras e assertivas para o mapeamento de
              fenômenos ambientais, tendo como <strong>visão</strong>, tornar-se
              referência no setor de geotecnologias aplicadas.
            </p>
            <p>
              Compartilhamos <strong>valores</strong> fundamentais, como
              honestidade, tempestividade e empatia. Nosso{" "}
              <strong>propósito</strong> é atender aos diversos clientes
              respeitando suas diferenças e prezando pela qualidade técnica dos
              produtos desenvolvidos.
            </p>
            <p>
              <strong>
                Sigam-nos nas redes sociais:{" "}
                <a
                  href="https://www.instagram.com/cosmomapeamento/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Link para o Instagram do Cosmo Mapeamento"
                  title="Link para o Instagram do Cosmo Mapeamento"
                >
                  #cosmomapeamento
                </a>
              </strong>
            </p>
          </TextBox>
        </div>
      </Section>
    );
  }
);

InstitutionalSection.displayName = "InstitutionalSection";

export default InstitutionalSection;
