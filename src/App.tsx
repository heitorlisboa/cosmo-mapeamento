import "./App.scss";
import MainLogo from "./components/MainLogo";
import MainBg from "./components/MainBg";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import ServicesSection from "./components/main-sections/ServicesSection";

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
      </main>
    </>
  );
}

export default App;
