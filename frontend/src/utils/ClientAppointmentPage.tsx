import React, { useState } from "react";
import supabase from "../databases/supabase"; // Importing supabase for database interaction
import { toast, Toaster } from "react-hot-toast"; // Importing toast for notifications

import { useNavigate } from "react-router"; // Importing useNavigate for programmatic navigation

import "../styles/AppointmentForm.css"; // Importing CSS styles

interface FormData {
  firstname: string;
  surname: string;
  age: string | number;
  gender: string;
  date: string;
  phoneNumber: string;
  email: string;
  description: string;
  service: string;
}

const ClientAppointmentPage: React.FC = () => {
  const navigate = useNavigate(); // Initializing useNavigate hook for navigation

  // State for form data
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    surname: "",
    age: "",
    gender: "",
    date: "",
    phoneNumber: "",
    email: "",
    description: "",
    service: "",
  });

  // Function to handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Parsing age as integer
    const parsedValue = name === "age" ? parseInt(value, 10) || "" : value;

    // Updating form data state
    setFormData((prevState) => ({
      ...prevState,
      [name]: parsedValue,
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Checking if any field is empty
    const isEmptyField = Object.values(formData).some((value) => value === "");
    if (isEmptyField) {
      // Displaying error toast if any field is empty
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      // Inserting form data into the database
      const { data, error } = await supabase.from("appointments").insert([formData]);
      if (error) {
        // Logging error message if there's an error
        console.error("Error submitting appointment:", error.message);
      } else {
        // Logging success message and displaying success toast
        console.log("Appointment submitted successfully:", data);
        toast.success("Form submitted successfully.");

        // Navigating to payments page after 2 seconds
        setTimeout(() => {
          navigate("/payments");
        }, 2000);

        // Resetting form data after submission
        setFormData({
          firstname: "",
          surname: "",
          age: "",
          gender: "",
          date: "",
          phoneNumber: "",
          email: "",
          description: "",
          service: "",
        });
      }
    } catch (error) {
      // Logging error message if there's an error
      console.error("Error submitting appointment:", error.message);
    }
  };

  return (
    <div className="container mt-5" id="appointment-form">
      <h1 className="mb-4">Book an Appointment</h1>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">First Name:</label>
            <input
              type="text"
              className="form-control"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Surname:</label>
            <input
              type="text"
              className="form-control"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Date:</label>
            <input
              type="date"
              className="form-control"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number:</label>
          <input
            type="tel"
            className="form-control"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age:</label>
          <input
            type="number"
            className="form-control"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Gender:</label>
          <select
            className="form-control"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Service:</label>
          <select
            className="form-control"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select Service</option>
            <option value="massage">Massage</option>
            <option value="wellness">Wellness</option>
            <option value="beauty">Beauty</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Description:</label>
          <textarea
            className="form-control"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={1}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <Toaster /> {/* Toast component for displaying notifications */}
    </div>
  );
};

export default ClientAppointmentPage;
