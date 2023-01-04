import { forwardRef } from 'react';

import type { SideNavSectionProps } from '../SideNav';

import { Section } from '../Section';
import { TextBox } from '../TextBox';

const cosmoLogo = '/img/logo-cosmo.webp';

const DISPLAY_NAME = 'InstitutionalSection';
export const InstitutionalSection = forwardRef<
  HTMLDivElement,
  SideNavSectionProps
>((props, ref) => (
  <Section
    className="bg-[hsl(0_0%_100%/0.3)] bg-[url(/img/background-alt-3.webp)] bg-cover bg-top bg-blend-color"
    {...props}
    ref={ref}
  >
    <h1 className="text-title-md text-white [-webkit-text-stroke:1px_black] [@media(min-width:400px)]:text-title-lg">
      <strong>Institucional</strong>
    </h1>
    <div className="lg:mx-auto lg:mb-24 lg:grid lg:max-w-5xl lg:grid-flow-col lg:items-center lg:justify-center lg:gap-4 lg:px-4">
      <img
        className="hidden aspect-square w-72 border-4 border-solid border-white object-cover lg:block"
        src={cosmoLogo}
        alt=""
        loading="lazy"
      />
      <TextBox className="lg:m-0">
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
