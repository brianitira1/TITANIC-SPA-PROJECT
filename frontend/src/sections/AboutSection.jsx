import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AboutImage from "../assets/images/beautyimage.jpg";

import "../styles/About.css";

const AboutSection = () => {
  const { ref, inView } = useInView();
  const controlsText = useAnimation();
  const controlsImage = useAnimation();

  useEffect(() => {
    if (inView) {
      controlsText.start({ opacity: 1, x: 0 });
      controlsImage.start({ opacity: 1, x: 0 });
    } else {
      controlsText.start({ opacity: 0, x: -20 });
      controlsImage.start({ opacity: 0, x: 20 });
    }
  }, [controlsText, controlsImage, inView]);

  return (
    <section
      className="about-section"
      style={{
        height: "100vh",
        backgroundImage: `url(${AboutImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="about-content">
        <div className="container">
          <div className="row align-items-center h-100">
            <motion.div
              className="col-md-6"
              id="about-text"
              ref={ref}
              animate={controlsText}
              initial={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h2>About Titanic SPA</h2>
              <p>
                Titanic SPA is a luxurious retreat inspired by the grandeur of
                the legendary ship. Nestled in the heart of the city, our spa
                offers a serene environment where you can relax and rejuvenate
                your mind, body, and soul.
              </p>
              <p>
                Our expert team of therapists and aestheticians are dedicated to
                providing personalized treatments to meet your unique needs.
                From soothing massages to revitalizing facials, we offer a wide
                range of services designed to enhance your well-being.
              </p>
            </motion.div>
            <motion.div
              className="col-md-6"
              id="about-image"
              ref={ref}
              animate={controlsImage}
              initial={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
            >
              {/* This div will hold the background image */}
              {/* No need to render an image element here */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
