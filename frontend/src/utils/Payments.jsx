import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/Payments.css";

import NavBar from "../components/NavBar";

import beautybg from "../assets/images/beautybg.jpg";

import axios from "axios";

const Payments = () => {
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");

  const handlePaymentSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://w54v58-5000.csb.app/token", {
        phone,
        amount,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <NavBar />
      <div
        className="
      hero-container"
      >
        <img src={beautybg} alt="Hero Image" className="img-fluid hero-image" />
        <div className="overlay-form"></div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="payments-container container "
        >
          <div className="payments-header">
            <h2 className="text-center mb-4">Make a Payment</h2>
            <p className="text-muted">Welcome to Titanic SPA Payment Portal</p>
          </div>
          <div className="payments-form">
            <form onSubmit={handlePaymentSubmit}>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phoneNumber"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="amount">Amount (Ksh)</label>
                <input
                  type="number"
                  className="form-control"
                  id="amount"
                  placeholder="Enter payment amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-success btn-block mt-3">
                Pay with M-Pesa
              </button>
            </form>
          </div>
          <div className="payments-footer">
            <p className="text-center text-muted mt-3">
              By proceeding, you agree to our{" "}
              <a href="#">Terms and Conditions</a>.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Payments;
