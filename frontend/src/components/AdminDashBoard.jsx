import { useEffect, useState } from "react";
import { GoEye } from "react-icons/go";
import { GrClose } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import supabase from "../databases/supabase";

import NavBar from "../components/NavBar";

import "../styles/AdminDashboard.css";
import dashboardimage from "../assets/images/dashboardimage.jpg";

const AdminDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data, error } = await supabase
          .from("appointments")
          .select(
            "firstname, surname, age, description, date, phoneNumber, email, id, gender, service",
          );

        if (error) {
          throw error;
        }

        setAppointments(data);
      } catch (error) {
        console.error("Error fetching appointments:", error.message);
      }
    };

    fetchAppointments();
  }, []);

  const handleDeleteAppointment = async () => {
    if (!selectedAppointment) return;

    try {
      const { error } = await supabase
        .from("appointments")
        .delete()
        .eq("id", selectedAppointment.id);

      if (error) {
        throw error;
      }

      setAppointments((prevAppointments) =>
        prevAppointments.filter(
          (appointment) => appointment.id !== selectedAppointment.id,
        ),
      );

      setSelectedAppointment(null);
      setShowDeleteConfirmation(false);
    } catch (error) {
      console.error("Error deleting appointment:", error.message);
    }
  };

  const handleCloseModal = () => {
    setSelectedAppointment(null);
    setShowDeleteConfirmation(false);
  };

  return (
    <div className="container" id="admin-dashboard">
      <NavBar />
      <img
        loading="lazy"
        src={dashboardimage}
        alt="Hero Image"
        className="img-fluid hero-image"
      />
      <div className="overlay-dashboard"></div>
      <h1 className="text-center my-4">Admin Dashboard</h1>
      <div className="row">
        <div className="col-md-8">
          <h2>Appointments</h2>
          <ul className="list-group">
            {appointments.map((appointment) => (
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
                  <GoEye
                    style={{
                      color: "rgb(60, 179, 113)",
                      cursor: "pointer",
                      fontSize: "39px",
                      marginRight: "8px",
                    }}
                    onClick={() => setSelectedAppointment(appointment)}
                  />
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
            ))}
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
                <GrClose
                  style={{
                    color: "#ff6347",
                    cursor: "pointer",
                    fontSize: "24px",
                    marginTop: "16px",
                  }}
                  onClick={handleCloseModal}
                />
                {showDeleteConfirmation && (
                  <FaTrash
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
