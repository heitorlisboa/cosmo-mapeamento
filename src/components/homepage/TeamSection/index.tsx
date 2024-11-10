import { forwardRef } from 'react';

import type { SideNavSectionProps } from '../../SideNav';

import { Section } from '../../Section';
import { TextBox } from '../../TextBox';
import { Member } from './Member';

const fabricioImg = '/img/team-img/perfil-fabricio.webp';

const DISPLAY_NAME = 'TeamSection';
export const TeamSection = forwardRef<HTMLDivElement, SideNavSectionProps>(
  (props, ref) => (
    <Section
      className="gap-16 bg-white/30 bg-cover bg-center bg-blend-color bg-srcset-[/img/backgrounds/background-alt-2.webp] [@media(min-width:768px)_and_(min-height:810px)]:gap-0"
      {...props}
      ref={ref}
    >
      <h2 className="text-primary-800">
        <strong>A equipe</strong>
      </h2>
      <div className="my-auto grid gap-16">
        <TextBox>
          <p>
            A <strong>Cosmo</strong> é uma empresa mineira, sediada na Região
            Metropolitana de Belo Horizonte, com{' '}
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
        <Member
          img={{
            url: fabricioImg,
            alt: 'Fabrício Lisboa durante uma palestra',
          }}
        >
          <p>
            <strong className="block">Fabrício Lisboa Vieira Machado</strong>
            Diretor técnico-executivo
          </p>
          <p className="text-justify text-sm sm:text-center">
            Geógrafo, Mestre em Análise Ambiental e Doutor em Geografia Aplicada
            e Geotecnologias pela Universidade Federal de Minas Gerais.
            Especialista em Georreferenciamento de Imóveis Rurais e Urbanos pela
            Faculdade de Engenharia de Minas Gerais. Ex-servidor público
            estadual da Semad-MG, onde coordenou a implantação da IDE-Sisema.
          </p>
        </Member>
      </div>
    </Section>
  )
);

TeamSection.displayName = DISPLAY_NAME;
