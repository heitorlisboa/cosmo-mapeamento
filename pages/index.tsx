import type { NextPage } from "next";

// Styles
import styles from "../src/styles/pages/Home.module.scss";

// Components
import Navbar from "../src/components/Navbar";
import Title from "../src/components/Title";
import SideNav from "../src/components/SideNav";
import ServicesSection from "../src/components/main-sections/ServicesSection";
import PortfolioSection from "../src/components/main-sections/PortfolioSection";
import TeamSection from "../src/components/main-sections/TeamSection";
import InstitutionalSection from "../src/components/main-sections/InstitutionalSection";
import CustomersPartnersSection from "../src/components/main-sections/CustomersPartnersSection";
import ContactSection from "../src/components/main-sections/ContactSection";

// Page
const Home: NextPage = () => {
  return (
    <>
      <header className={`${styles.header} no-collapse`}>
        {/* Drones */}
        <img
          className={styles.drone1}
          src="/img/drone-1.webp"
          alt=""
          aria-hidden="true"
        />
        <img
          className={styles.drone2}
          src="/img/drone-2.webp"
          alt=""
          aria-hidden="true"
        />
        {/* Logo */}
        <img
          className={styles.mainLogo}
          src="/img/logo-cosmo-alpha.webp"
          alt="Logo da Cosmo Mapeamento"
        />
        <Navbar />
        <Title color="white">
          <span className="smaller-title">Descubra o universo do</span>
          <strong>Mapeamento Aéreo</strong>
        </Title>
      </header>

      <main>
        <SideNav>
          <ServicesSection id="services" />
          <PortfolioSection id="portfolio" />
          <TeamSection id="team" />
          <InstitutionalSection id="institutional" />
          <CustomersPartnersSection id="customers-partners" />
          <ContactSection id="contact" />
        </SideNav>
      </main>

      <footer className={`${styles.footer} no-collapse`}>
        <p>&copy; 2022 - Cosmo - Mapeamento Ambiental</p>
      </footer>
    </>
  );
};

export default Home;
