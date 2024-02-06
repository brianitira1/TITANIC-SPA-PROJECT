import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import SuccessPage from "./components/SuccessPage";
import AdminDashboard from "./components/AdminDashBoard";
import ServicesPage from "./components/ServicesPage";
import Massage from "./components/Massage";
import Beauty from "./components/Beauty";
import Wellness from "./components/Wellness";
import Footer from "./components/Footer";
import Payments from "./utils/Payments";

const app = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/massage" element={<Massage />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/wellness" element={<Wellness />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/payments" element={<Payments />} />
      </Routes>
    </Router>
  );
};

export default app;
