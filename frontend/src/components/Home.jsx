import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutSection from "../sections/AboutSection";

import "../styles/Hero.css";
import "../styles/NavBar.css";
import "../styles/CustomForm.css";

const Home = () => {
  return (
    <>
      <NavBar />
      <div>
        <div>
          <div>
            <Hero />
          </div>
          <div>
            <AboutSection />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
