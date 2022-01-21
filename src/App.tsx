// Css
import "./reset.css";
import "./fonts/stylesheet.css";
import "./App.scss";

// Components
import Header from "./components/Header";
import MainLogo from "./components/MainLogo";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import SideNav from "./components/SideNav";
import ServicesSection from "./components/main-sections/ServicesSection";
import PortfolioSection from "./components/main-sections/PortfolioSection";
import TeamSection from "./components/main-sections/TeamSection";
import InstitutionalSection from "./components/main-sections/InstitutionalSection";
import CustomersPartnersSection from "./components/main-sections/CustomersPartnersSection";
import ContactSection from "./components/main-sections/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header>
        <MainLogo />
        <Navbar />
        <Title color="white">
          <span className="smaller">DESCUBRA O UNIVERSO DO</span>
          <strong>MAPEAMENTO AÉREO</strong>
        </Title>
      </Header>

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

      <Footer />
    </>
  );
}

export default App;
