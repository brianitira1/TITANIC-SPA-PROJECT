import React from "react";
import { motion } from "framer-motion";

import "../styles/Footer.css";

const Footer = () => {
  // Variants for animation
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      className="custom-footer py-5"
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      <div className="container footer-content">
        <motion.div
          className="row"
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <motion.div
            className="col-lg-4 mb-4 mb-lg-0"
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <h5 className="mb-3">About Titanic SPA</h5>
            <p>
              Titanic SPA is a luxurious retreat inspired by the grandeur of the
              legendary ship. Unwind and rejuvenate in our state-of-the-art
              facilities.
            </p>
          </motion.div>
          <motion.div
            className="col-lg-4 mb-4 mb-lg-0"
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <h5 className="mb-3">Connect with Us</h5>
            <ul className="list-unstyled">
              <li>
                <i className="fab fa-facebook-f"></i> Facebook
              </li>
              <li>
                <i className="fab fa-twitter"></i> Twitter
              </li>
              <li>
                <i className="fab fa-instagram"></i> Instagram
              </li>
            </ul>
          </motion.div>
          <motion.div
            className="col-lg-4"
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <h5 className="mb-3">Contact Us</h5>
            <p>Email: brianitira@programmer.net</p>
            <p>Phone: +254 (784) 49-1054</p>
          </motion.div>
        </motion.div>
        <motion.hr
          className="border-light"
          initial="hidden"
          animate="visible"
          variants={variants}
        />
        <motion.div
          className="row"
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          <motion.div
            className="col-md-6 text-center text-md-left mb-3 mb-md-0"
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <p>
              &copy; {new Date().getFullYear()} Titanic SPA. All rights
              reserved.
            </p>
          </motion.div>
          <motion.div
            className="col-md-6 text-center text-md-right"
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
