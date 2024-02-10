import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// @ts-ignore
import AboutImage from "../assets/images/aboutimage.jpg"; // Import the image

import "../styles/About.css";

/**
 * The AboutSection functional component.
 *
 * @return {JSX.Element} The AboutSection component
 */
const AboutSection: React.FC = () => {
  const { ref, inView } = useInView();
  const controlsText = useAnimation();
  const controlsImage = useAnimation();
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  useEffect(() => {
    /**
     * Handles the image load event
     */
    const handleImageLoad = () => {
      // Log that the image is loaded
      console.log("Image loaded");
      // Set the image loaded state to true
      setImageLoaded(true);
      // Log that the image loading state has been updated
      console.log("Image loading state updated");
    };

    const image = new Image();
    image.src = AboutImage;
    image.addEventListener("load", handleImageLoad);

    return () => {
      image.removeEventListener("load", handleImageLoad);
    };
  }, []);

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
        backgroundImage: `url(${AboutImage})`, // Use the imported image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="about-content">
        <div className="container">
          <div className="row align-items-center h-100">
            <motion.div
              className="col-md-6 about-container"
              id="about-text"
              ref={ref}
              animate={controlsText}
              initial={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="about-title">About Titanic SPA</h2>
              <p className="p-text">
                Titanic SPA is a luxurious retreat inspired by the grandeur of
                the legendary ship. Nestled in the heart of the city, our spa
                offers a serene environment where you can relax and rejuvenate
                your mind, body, and soul.
              </p>
              <p className="p-text-2">
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
            ></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
