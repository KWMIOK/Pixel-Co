import Header from "./components/Header";
import Hero from "./components/Hero";
import HeroVisuals from "./components/HeroVisuals";
import Toolkit from "./components/Toolkit";
import TrustedBy from "./components/TrustedBy";
import Projects from "./components/Projects";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main id="home">
        <HeroVisuals />
        <Hero />
        <Toolkit />
        <TrustedBy />
        <Projects />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
