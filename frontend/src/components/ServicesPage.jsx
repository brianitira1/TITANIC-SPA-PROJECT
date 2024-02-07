import React, { useEffect, useState } from "react";
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
  const [servicesImageLoaded, setServicesImageLoaded] = useState(false);
  const [massageImageLoaded, setMassageImageLoaded] = useState(false);
  const [wellnessImageLoaded, setWellnessImageLoaded] = useState(false);
  const [beautyImageLoaded, setBeautyImageLoaded] = useState(false);

  useEffect(() => {
    const handleServicesImageLoad = () => {
      setServicesImageLoaded(true);
    };

    const servicesImageElement = new Image();
    servicesImageElement.src = servicesimage;
    servicesImageElement.addEventListener("load", handleServicesImageLoad);

    return () => {
      servicesImageElement.removeEventListener("load", handleServicesImageLoad);
    };
  }, []);

  useEffect(() => {
    const handleMassageImageLoad = () => {
      setMassageImageLoaded(true);
    };

    const massageImageElement = new Image();
    massageImageElement.src = massageimage;
    massageImageElement.addEventListener("load", handleMassageImageLoad);

    return () => {
      massageImageElement.removeEventListener("load", handleMassageImageLoad);
    };
  }, []);

  useEffect(() => {
    const handleWellnessImageLoad = () => {
      setWellnessImageLoaded(true);
    };

    const wellnessImageElement = new Image();
    wellnessImageElement.src = wellnessimage;
    wellnessImageElement.addEventListener("load", handleWellnessImageLoad);

    return () => {
      wellnessImageElement.removeEventListener("load", handleWellnessImageLoad);
    };
  }, []);

  useEffect(() => {
    const handleBeautyImageLoad = () => {
      setBeautyImageLoaded(true);
    };

    const beautyImageElement = new Image();
    beautyImageElement.src = beautyimage;
    beautyImageElement.addEventListener("load", handleBeautyImageLoad);

    return () => {
      beautyImageElement.removeEventListener("load", handleBeautyImageLoad);
    };
  }, []);

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

        <div className="container mt-5" id="services">
          <div className="row">
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
                  <PriceBadge price={prices[0]} />
                </motion.div>
              </div>
            </div>

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
                  {massageImageLoaded && (
                    <img
                      loading="lazy"
                      src={massageimage}
                      alt="Services"
                      className="img-fluid"
                    />
                  )}
                  <h5 className="card-title text-white">Massage</h5>
                  <PriceBadge price={prices[1]} />
                </motion.div>
              </div>
            </div>

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
                  {wellnessImageLoaded && (
                    <img
                      loading="lazy"
                      src={wellnessimage}
                      alt="Services"
                      className="img-fluid"
                    />
                  )}
                  <h5 className="card-title text-white">Wellness</h5>
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
