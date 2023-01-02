import { forwardRef } from 'react';

import type { SideNavSectionProps } from '../../SideNav';

import { Section } from '../../Section';
import { TextBox } from '../../TextBox';
import { Member } from './Member';

const fabricioImg = '/img/team-img/perfil-fabricio-palestra.webp';

const DISPLAY_NAME = 'TeamSection';
export const TeamSection = forwardRef<HTMLDivElement, SideNavSectionProps>(
  (props, ref) => (
    <Section
      className="bg-[hsl(0_0%_100%/0.3)] bg-[url(/img/background-alt-2.webp)] bg-cover bg-center bg-blend-color"
      {...props}
      ref={ref}
    >
      <h2 className="text-primary-800">
        <strong>A equipe</strong>
      </h2>
      <TextBox>
        <p>
          A <strong>Cosmo</strong> é uma empresa mineira, sediada na Região
          Metropolitana de Belo Horizonte, com{' '}
          <strong>atuação em todo o estado de Minas Gerais</strong>.
        </p>
        <p>
          Nossa <strong>equipe multidisciplinar</strong> é composta por
          especialistas, mestres e doutores em <strong>geociências</strong>, com
          experiência comprovada nos setores <strong>ambiental</strong> e de{' '}
          <strong>geotecnologias</strong>.
        </p>
        <p>Conheça a coordenação:</p>
      </TextBox>
      <Member
        img={{ url: fabricioImg, alt: 'Fabrício Lisboa durante uma palestra' }}
      >
        <p>
          <strong className="block">Fabrício Lisboa Vieira Machado</strong>
          CEO da Cosmo - Mapeamento Ambiental
        </p>
        <p>
          Geógrafo, Mestre em Geografia e Análise Ambiental e Doutorando em
          Geografia Aplicada e Geotecnologias pela Universidade Federal de Minas
          Gerais
        </p>
      </Member>
    </Section>
  )
);

TeamSection.displayName = DISPLAY_NAME;
