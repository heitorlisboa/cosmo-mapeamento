import { forwardRef } from 'react';

import type { SideNavSectionProps } from '../SideNav';

import { Section } from '../Section';
import { TextBox } from '../TextBox';

const cosmoLogo = '/img/cosmo-logo-galaxy.webp';

const DISPLAY_NAME = 'InstitutionalSection';
export const InstitutionalSection = forwardRef<
  HTMLDivElement,
  SideNavSectionProps
>((props, ref) => (
  <Section
    className="gap-16 bg-white/20 bg-cover bg-top bg-blend-color bg-srcset-[/img/backgrounds/background-alt-3.webp] [@media(min-width:768px)_and_(min-height:640px)]:gap-0"
    {...props}
    ref={ref}
  >
    <h2 className="text-title-md text-white [@media(min-width:400px)]:text-title-lg">
      <strong>Institucional</strong>
    </h2>
    <div className="my-auto lg:mx-auto lg:grid lg:max-w-5xl lg:grid-flow-col lg:items-center lg:justify-center lg:gap-4 lg:px-4">
      <img
        className="hidden aspect-square w-72 border-4 border-solid border-white object-cover lg:block"
        src={cosmoLogo}
        alt=""
        loading="lazy"
      />
      <TextBox>
        <p>
          A <strong>missão</strong> da equipe <strong>Cosmo</strong> é oferecer
          soluções inovadoras e assertivas para o mapeamento de fenômenos
          ambientais, tendo como <strong>visão</strong>, tornar-se referência no
          setor de geotecnologias aplicadas.
        </p>
        <p>
          Compartilhamos <strong>valores</strong> fundamentais, como
          honestidade, tempestividade e empatia. Nosso{' '}
          <strong>propósito</strong> é atender aos diversos clientes respeitando
          suas diferenças e prezando pela qualidade técnica dos produtos
          desenvolvidos.
        </p>
        <p>
          <strong>
            Sigam-nos nas redes sociais:{' '}
            <a
              className="underline transition-colors hocus:text-purple-700"
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
));

InstitutionalSection.displayName = DISPLAY_NAME;
