import { forwardRef } from "react";
import { SectionParentProps } from "../../../types";
import "./style.scss";
import Section from "../../Section";
import Title from "../../Title";
import TextBox from "../../TextBox";

import logoCosmo from "../../../img/logo-cosmo.webp";

const InstitutionalSection = forwardRef<HTMLElement, SectionParentProps>(
  (props, ref) => {
    return (
      <Section ref={ref} className="institutional-section" id={props.id}>
        <Title className="outlined-text" color="white">
          <strong>Institucional</strong>
        </Title>
        <div className="institutional-section__grid">
          <img
            className="secondary-logo"
            src={logoCosmo}
            alt="Logo da Cosmo Mapeamento"
          />
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

export default InstitutionalSection;
