import { useEffect, useState } from "react";
import supabase from "../databases/supabase";

import "../styles/AdminDashboard.css";

const AdminDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

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

      // Close the modal after deleting appointment
      setSelectedAppointment(null);
    } catch (error) {
      console.error("Error deleting appointment:", error.message);
    }
  };

  return (
    <div className="container-fluid">
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
                  <button
                    className="btn btn-danger me-2"
                    onClick={() => setSelectedAppointment(appointment)}
                  >
                    Delete
                  </button>
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
                <button
                  className="btn btn-danger"
                  onClick={handleDeleteAppointment}
                >
                  Confirm Delete
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
