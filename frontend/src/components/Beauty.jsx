import React from "react";
import NavBar from "../components/NavBar";
import "../styles/BeautyPage.css";

import beautybg from "../assets/images/beautybg.jpg";

import ClientAppointmentPage from "../utils/ClientAppointmentPage";

/**
 * Render the Beauty component
 */
const Beauty = () => {
  // Log the rendering of Beauty component
  console.log("Rendering Beauty component");
  return (
    <>
      <NavBar />
      <div className=" hero-container " id="beauty-container">
        <img
          loading="lazy"
          src={beautybg}
          alt="Hero Image"
          className="img-fluid hero-image"
        />
        <div className="overlay-form"></div>

        <div className="container header"></div>
        <ClientAppointmentPage />
      </div>
    </>
  );
};

export default Beauty;
