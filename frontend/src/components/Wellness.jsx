import React from "react";
import NavBar from "../components/NavBar";
import "../styles/BeautyPage.css";

import wellnessbg from "../assets/images/wellnessbg.jpg";

import ClientAppointmentPage from "../utils/ClientAppointmentPage";

const Wellness = () => {
/**
 * Renders the Wellness component and logs a message
 */
const Wellness = () => {
  // Log message indicating the Wellness component is rendered
  console.log('Wellness component rendered');
  
  return (
    <>
      <NavBar />
      <div className=" hero-container " id="beauty-container">
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
