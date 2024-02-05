import React from "react";
import NavBar from "../components/NavBar";
import "../styles/BeautyPage.css";

import wellnessbg from "../assets/images/wellnessbg.jpg";

import ClientAppointmentPage from "../utils/ClientAppointmentPage";

const Wellness = () => {
  return (
    <>
      <NavBar />
      <div className=" hero-container " id="beauty-container">
        <img
          src={wellnessbg}
          alt="Hero Image"
          className="img-fluid hero-image"
        />
        <div className="overlay-form"></div>
        <div className="container header">
     
        </div>
        <ClientAppointmentPage />
      </div>
    </>
  );
};

export default Wellness;
