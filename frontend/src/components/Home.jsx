import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutSection from "../sections/AboutSection";

import "../styles/Hero.css";
import "../styles/NavBar.css";
import "../styles/CustomForm.css";

/**
 * Function to render the Home component
 */
const Home = () => {
  // Log the rendering of each component
  console.log('Rendering Home component');
  console.log('Rendering NavBar component');
  console.log('Rendering Hero component');
  console.log('Rendering AboutSection component');
  console.log('Rendering Footer component');

  // Render the components
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
