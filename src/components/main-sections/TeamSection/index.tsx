// React functions and types
import { forwardRef } from "react";
import type { SectionParentProps } from "../../../types";

// Styles
import styles from "./TeamSection.module.scss";

// Components
import Section from "../../Section";
import Title from "../../Title";
import TextBox from "../../TextBox";
import Member from "./Member";

// Members images
const fabricioImg = "/img/team-img/perfil-fabricio-palestra.webp";

const TeamSection = forwardRef<HTMLElement, SectionParentProps>(
  function TeamSectionComponent({ id, name }, ref) {
    return (
      <Section ref={ref} className={styles.section} id={id} name={name}>
        <Title color="blurple">
          <strong>A equipe</strong>
        </Title>
        <TextBox>
          <p>
            A <strong>Cosmo</strong> é uma empresa mineira, sediada na Região
            Metropolitana de Belo Horizonte, com{" "}
            <strong>atuação em todo o estado de Minas Gerais</strong>.
          </p>
          <p>
            Nossa <strong>equipe multidisciplinar</strong> é composta por
            especialistas, mestres e doutores em <strong>geociências</strong>,
            com experiência comprovada nos setores <strong>ambiental</strong> e
            de <strong>geotecnologias</strong>.
          </p>
          <p>Conheça a coordenação:</p>
        </TextBox>
        <Member img={fabricioImg} alt="Foto de Fabrício Lisboa">
          <p>
            <strong>Fabrício Lisboa Vieira Machado</strong>
            CEO da Cosmo - Mapeamento Ambiental
          </p>
          <p>
            Geógrafo, Mestre em Geografia e Análise Ambiental e Doutorando em
            Geografia Aplicada e Geotecnologias pela Universidade Federal de
            Minas Gerais
          </p>
        </Member>
      </Section>
    );
  }
);

export default TeamSection;
