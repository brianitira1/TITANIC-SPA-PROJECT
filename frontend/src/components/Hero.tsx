import React, { useState } from "react";
import { motion } from "framer-motion";
// @ts-ignore
import heroImage from "../assets/images/heroimage.jpg";
import { useClerk } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import CustomForm from "./CustomForm";

/**
 * React functional component for the Hero section of the web application.
 */
const Hero: React.FC = () => {
  const clerk = useClerk(); // Initializing useClerk hook for authentication
  const navigate = useNavigate(); // Initializing useNavigate hook for navigation
  const [showCustomForm, setShowCustomForm] = useState<boolean>(false); // State to manage whether the custom form is shown or not

  // Function to handle opening the custom form
  const handleDashboardClick = () => {
    setShowCustomForm(true);
  };

  // Function to handle closing the custom form
  const handleCloseCustomForm = () => {
    setShowCustomForm(false);
  };

  // Function to handle the "Book Now" button click
  const handleBookNowClick = async () => {
    try {
      console.log("Attempting to open sign in");
      await clerk.openSignIn(); // Opening sign-in modal
      const user = clerk.user; // Getting signed-in user
      if (user) {
        navigate("/services"); // Navigating to services page if user is signed in
      }
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div className="hero-container">
      {/* Hero image */}
      <motion.img
        loading="lazy"
        className="hero-image"
        src={heroImage}
        alt="Hero Image"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="overlay"></div>
      {/* Hero content */}
      <motion.div
        className="hero-content"
        style={{
          textAlign: "center",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Hero title */}
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Experience Luxury Reborn
        </motion.h1>
        {/* Hero subtitle */}
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Indulge in the Ultimate Spa Experience
        </motion.p>
        {/* Buttons */}
        <div>
          {/* "Book Now" button */}
          <motion.button
            className="btn btn-primary btn-lg"
            onClick={handleBookNowClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Book Now
          </motion.button>
          {/* "Dashboard" button */}
          <motion.button
            className="btn btn-secondary btn-lg ml-2"
            onClick={handleDashboardClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            style={{ marginLeft: "5px" }}
          >
            Dashboard
          </motion.button>
        </div>
      </motion.div>

      {/* Render custom form if showCustomForm is true */}
      {showCustomForm && <CustomForm onClose={handleCloseCustomForm} />}
    </div>
  );
};

export default Hero;
