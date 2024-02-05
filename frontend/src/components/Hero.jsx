import React, { useState } from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/images/heroimage.jpg";
import { useClerk } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import CustomForm from "../components/CustomForm";

const Hero = () => {
  const clerk = useClerk();
  const navigate = useNavigate();
  const [showCustomForm, setShowCustomForm] = useState(false);

  const handleDashboardClick = () => {
    setShowCustomForm(true);
  };

  const handleCloseCustomForm = () => {
    setShowCustomForm(false);
  };

  const handleBookNowClick = async () => {
    try {
      await clerk.openSignIn();
      const user = clerk.user;
      if (user) {
        navigate("/services");
      }
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div className="hero-container">
      <motion.img
        className="hero-image"
        src={heroImage}
        alt="Hero Image"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="overlay"></div>
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
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Experience Luxury Reborn
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Indulge in the Ultimate Spa Experience
        </motion.p>
        <div>
          <motion.button
            className="btn btn-primary btn-lg"
            onClick={handleBookNowClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Book Now
          </motion.button>
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

      {showCustomForm && <CustomForm onClose={handleCloseCustomForm} />}
    </div>
  );
};

export default Hero;
