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
      className="bg-[url(/img/background.webp)] bg-cover bg-fixed font-bold text-white"
      {...props}
      ref={ref}
    >
      <h2 className="mb-6 text-white">
        <strong>Contato</strong>
      </h2>

      <Socials />
      <Info />
      <Form />
    </Section>
  )
);

ContactSection.displayName = DISPLAY_NAME;
