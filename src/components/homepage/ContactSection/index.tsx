import { forwardRef } from 'react';

import type { SideNavSectionProps } from '../../SideNav';

import { Section } from '../../Section';
import { Socials } from './Socials';
import { Info } from './Info';
import { Form } from './Form';

const DISPLAY_NAME = 'ContactSection';
export const ContactSection = forwardRef<HTMLDivElement, SideNavSectionProps>(
  (props, ref) => (
    <Section
      className="min-h-[calc(min(100vh,1080px)-var(--footer-height))] bg-cover bg-fixed py-12 font-bold text-white bg-srcset-[/img/backgrounds/background.webp] [--footer-height:2.75rem]"
      {...props}
      ref={ref}
    >
      <h2 className="font-title text-white">
        <strong>Contato</strong>
      </h2>

      <div className="my-auto">
        <Socials />
        <Info />
        <Form />
      </div>
    </Section>
  )
);

ContactSection.displayName = DISPLAY_NAME;
