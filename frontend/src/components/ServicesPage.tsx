import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import NavBar from "./NavBar";
import PriceBadge from "../utils/PriceBadge";
// @ts-ignore
import servicesimage from "../assets/images/servicesimage.jpg";
// @ts-ignore
import massageimage from "../assets/images/massageimage.jpg";

// @ts-ignore
import wellnessimage from "../assets/images/wellnessimage.jpg";

// @ts-ignore
import beautyimage from "../assets/images/beautyimage.jpg";
import "../styles/ServicesPage.css";

import { useNavigate } from "react-router-dom";

const ServicesPage: React.FC = () => {
  const navigate = useNavigate();

  const prices = ["Ksh 50000", "Ksh 10000", "Ksh 20000"];
  const [servicesImageLoaded, setServicesImageLoaded] = useState<boolean>(false);
  const [massageImageLoaded, setMassageImageLoaded] = useState<boolean>(false);
  const [wellnessImageLoaded, setWellnessImageLoaded] = useState<boolean>(false);
  const [beautyImageLoaded, setBeautyImageLoaded] = useState<boolean>(false);

  useEffect(() => {
    // Function to handle services image loading
    const handleServicesImageLoad = () => {
      console.log("Services image loaded");
      setServicesImageLoaded(true);
    };

    // @ts-ignore
    const servicesImageElement = new Image();
    servicesImageElement.src = servicesimage;
    servicesImageElement.addEventListener("load", handleServicesImageLoad);

    // Cleanup function to remove event listener
    return () => {
      servicesImageElement.removeEventListener("load", handleServicesImageLoad);
    };
  }, []);

  // Similar useEffect for massage image loading
  useEffect(() => {
    const handleMassageImageLoad = () => {
      console.log("Massage image loaded");
      setMassageImageLoaded(true);
    };

    // @ts-ignore
    const massageImageElement = new Image();
    massageImageElement.src = massageimage;
    massageImageElement.addEventListener("load", handleMassageImageLoad);

    return () => {
      massageImageElement.removeEventListener("load", handleMassageImageLoad);
    };
  }, []);

  // Similar useEffect for wellness image loading
  useEffect(() => {
    const handleWellnessImageLoad = () => {
      console.log("Wellness image loaded");
      setWellnessImageLoaded(true);
    };

    // @ts-ignore
    const wellnessImageElement = new Image();
    wellnessImageElement.src = wellnessimage;
    wellnessImageElement.addEventListener("load", handleWellnessImageLoad);

    return () => {
      wellnessImageElement.removeEventListener("load", handleWellnessImageLoad);
    };
  }, []);

  // Similar useEffect for beauty image loading
  useEffect(() => {
    const handleBeautyImageLoad = () => {
      console.log("Beauty image loaded");
      setBeautyImageLoaded(true);
    };

    // @ts-ignore
    const beautyImageElement = new Image();
    beautyImageElement.src = beautyimage;
    beautyImageElement.addEventListener("load", handleBeautyImageLoad);

    return () => {
      beautyImageElement.removeEventListener("load", handleBeautyImageLoad);
    };
  }, []);

  // Function to handle service click
  const handleServiceClick = (service: string) => {
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
      {/* @ts-ignore */}
      <NavBar /> 
      <div className="hero-container" id="services-container">
        {/* Animated header */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-white mt-5 mb-3"
          id="services-text"
        >
          Discover Our Luxurious Services
        </motion.h1>
        {/* Services image */}
        {servicesImageLoaded && (
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            src={servicesimage}
            alt="Hero Image"
            className="img-fluid hero-image"
          />
        )}
        <div className="overlay-services"></div>

        {/* Services container */}
        <div className="container mt-5" id="services">
          <div className="row">
            {/* Card for Beauty service */}
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
                  {/* @ts-ignore */}
                  {beautyImageLoaded && (
                    <img
                      loading="lazy"
                      src={beautyimage}
                      alt="Services"
                      className="img-fluid"
                      id="service"
                    />
                  )}
                  <h5 className="card-title text-white">Beauty</h5>
                  {/* @ts-ignore */}
                  <PriceBadge price={prices[0]} />
                </motion.div>
              </div>
            </div>
            {/* Card for Massage service */}
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
                  {/* @ts-ignore */}
                  {massageImageLoaded && (
                    <img
                      loading="lazy"
                      src={massageimage}
                      alt="Services"
                      className="img-fluid"
                    />
                  )}
                  <h5 className="card-title text-white">Massage</h5>
                  {/* @ts-ignore */}
                  <PriceBadge price={prices[1]} />
                </motion.div>
              </div>
            </div>
            {/* Card for Wellness service */}
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
                  {/* @ts-ignore */}
                  {wellnessImageLoaded && (
                    <img
                      loading="lazy"
                      src={wellnessimage}
                      alt="Services"
                      className="img-fluid"
                    />
                  )}
                  <h5 className="card-title text-white">Wellness</h5>
                  {/* @ts-ignore */}
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
