import { useEffect, useState } from "react";
import supabase from "../databases/supabase";

const AdminDashboardPage = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data, error } = await supabase
          .from("appointments")
          .select("firstname, surname, age, description, date");

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

  return (
    <div>
      <h1>Welcome to the Admin Dashboard!</h1>
      <h2>Appointments</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            {appointment.firstname} {appointment.surname} - {appointment.date}{" "}
            {appointment.age} - {appointment.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboardPage;
