import "./style.scss";
import Section from "../../Section";
import Title from "../../Title";
import TextBox from "../../TextBox";
import Employee from "./Employee";

import fabricioImg from "../../../img/team-img/perfil-fabricio-palestra.webp";

function TeamSection() {
  return (
    <Section className="team-section" id="team">
      <Title color="blurple">
        <strong>A equipe</strong>
      </Title>
      <TextBox className="team-section__description">
        <p>
          A <strong>Cosmo</strong> é uma empresa mineira, sediada na Região
          Metropolitana de Belo Horizonte, com{" "}
          <strong>atuação em todo o estado de Minas Gerais</strong>.
        </p>
        <p>
          Nossa <strong>equipe multidisciplinar</strong> é composta por
          especialistas, mestres e doutores em <strong>geociências</strong>, com
          experiência comprovada nos setores <strong>ambiental</strong> e de{" "}
          <strong>geotecnologias</strong>.
        </p>
        <p>Conheça a coordenação:</p>
      </TextBox>
      <Employee img={fabricioImg} alt="Foto de perfil de Fabrício Lisboa">
        <p>
          <strong>Fabrício Lisboa Vieira Machado</strong>
          CEO da Cosmo - Mapeamento Ambiental
        </p>
        <p>
          Geógrafo, Mestre em Geografia e Análise Ambiental e Doutorando em
          Geografia Aplicada e Geotecnologias pela Universidade Federal de Minas
          Gerais
        </p>
      </Employee>
    </Section>
  );
}

export default TeamSection;
