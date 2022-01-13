import "./App.scss";
import MainLogo from "./components/MainLogo";
import MainBg from "./components/MainBg";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
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
      <MainBg />

      <header>
        <MainLogo />
        <Navbar />
      </header>

      <main>
        <Title color="white">
          <span className="smaller">DESCUBRA O UNIVERSO DO</span>
          <strong>MAPEAMENTO AÉREO</strong>
        </Title>
        <ServicesSection />
        <PortfolioSection />
        <TeamSection />
        <InstitutionalSection />
        <CustomersPartnersSection />
        <ContactSection />
      </main>
      
      <Footer />
    </>
  );
}

export default App;
