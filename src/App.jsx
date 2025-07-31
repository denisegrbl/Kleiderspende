import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Spenden from "./Components/Spenden/Spenden";
import Text from "./Components/Text/Text";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Impressum from "./Components/Impressum/Impressum";
import Datenschutz from "./Components/Datenschutz/Datenschutz";
import SpendenFormular from "./Components/Formular/SpendenFormular";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Startseite />} />
          <Route path="/spendenformular" element={<SpendenFormular />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

const Startseite = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div>
      <Hero />
      <div className="container">
        <section id="program">
          <Programs />
        </section>
        <section id="program">
          <Text />
        </section>
        <section id="spenden">
          <Spenden />
        </section>
        <section id="about">
          <About />
        </section>
      </div>
    </div>
  );
};

export default App;
