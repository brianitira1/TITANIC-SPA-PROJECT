import React from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import PriceBadge from "../utils/PriceBadge";
import servicesimage from "../assets/images/servicesimage.jpg";
import massageimage from "../assets/images/massageimage.jpg";
import wellnessimage from "../assets/images/wellnessimage.jpg";
import beautyimage from "../assets/images/beautyimage.jpg";
import "../styles/ServicesPage.css";

import { useNavigate } from "react-router-dom";

const ServicesPage = () => {
  const navigate = useNavigate();

  const prices = ["Ksh 50000", "Ksh 10000", "Ksh 20000"];

  const handleServiceClick = (service) => {
    if (service === "massage") {
      navigate("/massage");
    } else if (service === "beauty") {
      navigate("/beauty");
    } else if (service === "wellness") {
      navigate("/wellness");
    }
  };

  return (
    <>
      <NavBar />
      <div className="hero-container" id="services-container">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-white mt-5 mb-3"
          id="services-text"
        >
          Discover Our Luxurious Services
        </motion.h1>
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src={servicesimage}
          alt="Hero Image"
          className="img-fluid hero-image"
        />
        <div className="overlay-services"></div>

        <div className="container mt-5" id="services">
          <div className="row">
            {/* Beauty Service Card */}
            <div className="col-md-4 col-lg-4 col-sx-12 col-sm-12">
              <div
                className="card bg-transparent"
                onClick={() => handleServiceClick("beauty")}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="card-body"
                >
                  <img
                    src={beautyimage}
                    alt="Services"
                    className="img-fluid"
                    id="service"
                  />
                  <h5 className="card-title text-white">Beauty</h5>
                  {/* Render the PriceBadge component with the corresponding price */}
                  <PriceBadge price={prices[0]} />
                </motion.div>
              </div>
            </div>
            {/* Massage Service Card */}
            <div className="col-md-4 col-lg-4 col-sx-12 col-sm-12">
              <div
                className="card bg-transparent"
                onClick={() => handleServiceClick("massage")}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="card-body"
                >
                  <img
                    src={massageimage}
                    alt="Services"
                    className="img-fluid"
                  />
                  <h5 className="card-title text-white">Massage</h5>
                  {/* Render the PriceBadge component with the corresponding price */}
                  <PriceBadge price={prices[1]} />
                </motion.div>
              </div>
            </div>
            {/* Wellness Service Card */}
            <div className="col-md-4 col-lg-4 col-sx-12 col-sm-12">
              <div
                className="card bg-transparent"
                onClick={() => handleServiceClick("wellness")}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="card-body"
                >
                  <img
                    src={wellnessimage}
                    alt="Services"
                    className="img-fluid"
                  />
                  <h5 className="card-title text-white">Wellness</h5>
                  {/* Render the PriceBadge component with the corresponding price */}
                  <PriceBadge price={prices[2]} />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
