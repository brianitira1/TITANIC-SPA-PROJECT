import React, { useState } from "react";
import { motion } from "framer-motion"; // Importing motion from framer-motion for animation
import { useNavigate } from "react-router-dom"; // Importing useNavigate for navigation

interface CustomFormProps {
  onClose: () => void;
}



/**
 * Function component for a custom form with authentication and navigation.
 *
 * @param {CustomFormProps} onClose - function to handle form closure
 * @return {ReactNode} the custom form component
 */
const CustomForm: React.FC<CustomFormProps> = ({ onClose }) => {
  const navigate = useNavigate(); // Initializing useNavigate hook for navigation
  const [name, setName] = useState<string>(""); // State for storing name input
  const [password, setPassword] = useState<string>(""); // State for storing password input

  // Function to handle form submission
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Preventing default form submission behavior
    console.log("Name:", name); // Logging name input
    console.log("Password:", password); // Logging password input
    // Checking if name and password match expected values for authentication
    if (name === "brian" || name === "newton" && password === "nomad" || password === "ninja") {
      navigate("/admin-dashboard"); // Navigating to admin dashboard if authentication succeeds
    } else {
      alert("Invalid credentials"); // Showing alert for invalid credentials
    }
  };

  return (
    <motion.div
      className="custom-form-container container mt-5"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Form title */}
      <h2 className="text-center mb-4">Welcome Administrators/Staff</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          {/* Form */}
          <form onSubmit={handleFormSubmit}>
            {/* Name input field */}
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  console.log("Name changed to:", e.target.value); // Logging name change
                  setName(e.target.value); // Updating name state
                }}
              />
            </div>
            {/* Password input field */}
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  console.log("Password changed to:", e.target.value); // Logging password change
                  setPassword(e.target.value); // Updating password state
                }}
              />
            </div>
            {/* Submit button */}
            <button type="submit" className="btn btn-primary me-2">
              Submit
            </button>
            {/* Cancel button */}
            <button
              type="button"
              className="btn btn-secondary mt-2"
              onClick={onClose}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default CustomForm;
