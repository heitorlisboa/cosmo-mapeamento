import type { FC } from 'react';

import { SideNav } from '../SideNav';
import { ServicesSection } from './ServicesSection';
import { PortfolioSection } from './PortfolioSection';
import { TeamSection } from './TeamSection';
import { InstitutionalSection } from './InstitutionalSection';
import { CustomersPartnersSection } from './CustomersPartnersSection';
import { ContactSection } from './ContactSection';

export const MainContent: FC = () => {
  return (
    <SideNav>
      <ServicesSection id="services" name="Catálogo de serviços" />
      <PortfolioSection id="portfolio" name="Portfólio" />
      <TeamSection id="team" name="Quem somos" />
      <InstitutionalSection id="institutional" name="Institucional" />
      <CustomersPartnersSection
        id="customers-partners"
        name="Clientes e parceiros"
      />
      <ContactSection id="contact" name="Contato" />
    </SideNav>
  );
};
