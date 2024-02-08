import React, { useEffect, useState } from "react";
import { GoEye } from "react-icons/go";
import { GrClose } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import supabase from "../databases/supabase"; // Importing supabase client

import NavBar from "./NavBar"; // Importing NavBar component

import "../styles/AdminDashboard.css"; // Importing CSS file

// @ts-ignore
import dashboardimage from "../assets/images/dashboardimage.jpg"; // Importing dashboard image

interface Appointment {
  id: string;
  firstname: string;
  surname: string;
  age: number;
  description: string;
  date: string;
  phoneNumber: string;
  email: string;
  gender: string;
  service: string;
}

const AdminDashboard: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]); // State for storing appointments
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null); // State for storing selected appointment
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState<boolean>(false); // State for showing delete confirmation modal
  const [imageLoaded, setImageLoaded] = useState<boolean>(false); // State for tracking image loading status

  // Effect to fetch appointments from the database
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data, error } = await supabase
        // @ts-ignore
          .from<Appointment>("appointments")
          .select(
            "firstname, surname, age, description, date, phoneNumber, email, id, gender, service",
          );

        if (error) {
          throw error;
        }

        setAppointments(data || []); // Setting fetched appointments in state
      } catch (error) {
        console.error("Error fetching appointments:", error.message); // Logging error if fetching appointments fails
      }
    };

    fetchAppointments(); // Calling fetchAppointments function
  }, []);

  // Effect to handle image loading
  useEffect(() => {
    const handleImageLoad = () => {
      setImageLoaded(true); // Setting image loading status to true when the image is loaded
    };

    const image = new Image(); // Creating a new image element
    image.src = dashboardimage; // Setting image source
    image.addEventListener("load", handleImageLoad); // Adding event listener for image load

    return () => {
      image.removeEventListener("load", handleImageLoad); // Cleaning up by removing event listener on unmount
    };
  }, []);

  // Function to handle deletion of appointment
  const handleDeleteAppointment = async () => {
    if (!selectedAppointment) return; // If no appointment is selected, return

    try {
      const { error } = await supabase
        // @ts-ignore
        .from<Appointment>("appointments")
        .delete()
        .eq("id", selectedAppointment.id);

      if (error) {
        throw error;
      }

      setAppointments((prevAppointments) =>
        prevAppointments.filter(
          (appointment) => appointment.id !== selectedAppointment.id,
        ),
      ); // Filtering out the deleted appointment from the state

      setSelectedAppointment(null); // Resetting selected appointment
      setShowDeleteConfirmation(false); // Hiding delete confirmation modal
    } catch (error) {
      console.error("Error deleting appointment:", error.message); // Logging error if deleting appointment fails
    }
  };

  // Function to close modal
  const handleCloseModal = () => {
    setSelectedAppointment(null); // Resetting selected appointment
    setShowDeleteConfirmation(false); // Hiding delete confirmation modal
  };

  // Function to render appointment items
  const renderAppointmentItems = () => {
    return appointments.map((appointment) => (
      <li
        key={appointment.id}
        className="list-group-item d-flex justify-content-between align-items-center appointment-item"
      >
        <div>
          <h5>
            {appointment.firstname} {appointment.surname}
          </h5>
          <p>Date: {appointment.date}</p>
          <p>Age: {appointment.age}</p>
          <p>Service: {appointment.service}</p>
        </div>
        <div>
          {/* Icon to view appointment details */}
          <GoEye
            style={{
              color: "rgb(60, 179, 113)",
              cursor: "pointer",
              fontSize: "39px",
              marginRight: "8px",
            }}
            onClick={() => setSelectedAppointment(appointment)}
          />
          {/* Icon to delete appointment */}
          <MdDelete
            style={{
              color: "#ff6347",
              cursor: "pointer",
              fontSize: "38px",
            }}
            onClick={() => {
              setSelectedAppointment(appointment);
              setShowDeleteConfirmation(true);
            }}
          />
        </div>
      </li>
    ));
  };

  return (
    <div className="container" id="admin-dashboard">
      {/* @ts-ignore */}
      <NavBar /> {/* Rendering NavBar component */}
      {!imageLoaded && <div>Loading...</div>} {/* Displaying loading message if image is not loaded */}
      {imageLoaded && (
        <img
          loading="lazy"
          src={dashboardimage}
          alt="Hero Image"
          className="img-fluid hero-image"
        />
      )}
      <div className="overlay-dashboard"></div>
      <h1 className="text-center my-4 ">Admin Dashboard</h1>
      <div className="row">
        <div className="col-md-8">
          <h2>Appointments</h2>
          <ul className="list-group">
            {renderAppointmentItems()} {/* Rendering appointment items */}
          </ul>
        </div>
        <div className="col-md-4">
          <h2>Selected Appointment</h2>
          {selectedAppointment && (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  {selectedAppointment.firstname} {selectedAppointment.surname}
                </h5>
                <p>Date: {selectedAppointment.date}</p>
                <p>Age: {selectedAppointment.age}</p>
                <p>Description: {selectedAppointment.description}</p>
                <p>Phone Number: {selectedAppointment.phoneNumber}</p>
                <p>Email: {selectedAppointment.email}</p>
                <p>Gender: {selectedAppointment.gender}</p>
                <p>Service: {selectedAppointment.service}</p>
                {/* Icon to close modal */}
                <GrClose
                  style={{
                    color: "#ff6347",
                    cursor: "pointer",
                    fontSize: "24px",
                    marginTop: "16px",
                  }}
                  onClick={handleCloseModal}
                />
                {/* Icon to confirm appointment deletion */}
                {showDeleteConfirmation && (
                  <MdDelete
                    style={{
                      color: "red",
                      cursor: "pointer",
                      fontSize: "24px",
                      marginTop: "16px",
                    }}
                    onClick={handleDeleteAppointment}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
