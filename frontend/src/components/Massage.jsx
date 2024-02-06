import React from "react";
import NavBar from "../components/NavBar";
import "../styles/BeautyPage.css";

import massagebg from "../assets/images/massagebg.jpg";

import ClientAppointmentPage from "../utils/ClientAppointmentPage";

const Massage = () => {
  return (
    <>
      <NavBar />
      <div className=" hero-container " id="beauty-container">
        <img
          loading="lazy"
          src={massagebg}
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

export default Massage;
