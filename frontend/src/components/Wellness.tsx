import React from "react";
import NavBar from "./NavBar";
import "../styles/BeautyPage.css";

// @ts-ignore
import wellnessbg from "../assets/images/wellnessbg.jpg"; // Ignore TypeScript error for image import

import ClientAppointmentPage from "../utils/ClientAppointmentPage";

/**
 * Renders the Wellness component and logs a message
 */
const Wellness: React.FC = () => {
  // Log message indicating the Wellness component is rendered
  console.log("Wellness component rendered");

  return (
    <>
      {/* @ts-ignore */}
      <NavBar />
      <div className="hero-container" id="beauty-container">
        <img
          loading="lazy"
          src={wellnessbg}
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

export default Wellness;
