import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Guest from "./components/Guest";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <About />
        <Menu />
        <Guest />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
