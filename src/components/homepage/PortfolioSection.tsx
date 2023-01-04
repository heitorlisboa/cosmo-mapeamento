import { forwardRef } from 'react';

import type { SideNavSectionProps } from '../SideNav';

import { Section } from '../Section';
import { ModalCarousel } from '../ModalCarousel';

// Portfolio images
const post25Pg2 = '/img/portfolio-img/post-25-pg-2.webp';
const post25Pg1 = '/img/portfolio-img/post-25-pg-1.webp';
const post20 = '/img/portfolio-img/post-20.webp';
const post11 = '/img/portfolio-img/post-11.webp';
const post17 = '/img/portfolio-img/post-17.webp';
const post2 = '/img/portfolio-img/post-2.webp';
const post8 = '/img/portfolio-img/post-8.webp';
const post6 = '/img/portfolio-img/post-6.webp';
const post3 = '/img/portfolio-img/post-3.webp';

const DISPLAY_NAME = 'PortfolioSection';
export const PortfolioSection = forwardRef<HTMLDivElement, SideNavSectionProps>(
  (props, ref) => (
    <Section
      className="bg-[hsl(0_0%_100%/0.3)] bg-[url(/img/background-alt-1.webp)] bg-cover bg-center bg-blend-color"
      {...props}
      ref={ref}
    >
      <h2 className="text-white">
        <strong>Portfólio</strong>
      </h2>
      <ModalCarousel
        images={[
          { src: post25Pg2, alt: 'Post 25 - Meandro abandonado (página 2)' },
          { src: post25Pg1, alt: 'Post 25 - Meandro abandonado (página 1)' },
          { src: post20, alt: 'Post 20 - Modelagem 3D' },
          { src: post11, alt: 'Post 11 - NDVI' },
          { src: post17, alt: 'Post 17 - SSEBop' },
          { src: post2, alt: 'Post 2 - Missões planejadas' },
          {
            src: post8,
            alt: 'Post 8 - Processamento digital de imagens de SR',
          },
          { src: post6, alt: 'Post 6 - Processamento da nuvem de pontos' },
          { src: post3, alt: 'Post 3 - Modelo Digital de Superfície' },
        ]}
      />
    </Section>
  )
);

PortfolioSection.displayName = DISPLAY_NAME;
