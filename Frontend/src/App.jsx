import React, { useContext, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home.jsx";
import Appointment from "../pages/Appointment.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import SearchPage from "../pages/SearchPage.jsx";
import NotFound from "../pages/NotFound.jsx";
import AboutUs from "../pages/AboutUs.jsx";
import HospitalDetails from "../pages/HospitalDetails.jsx";
import AddReviewPage from "../pages/AddReviewPage.jsx";
import SOS from "../pages/SOS.jsx";

import SOSFloatingButton from "./Components/SOSFloatingButton.jsx";
import ReviewForm from "./Components/ReviewForm.jsx";
import Navbar from "./Components/Navbar.jsx";
import DoctorForm from "./Components/DoctorForm.jsx";
import Footer from "./Components/Footer.jsx";
import AllDoctor from "./Components/AllDoctor.jsx";
import ProtectedRoute from "./Components/ProtectedRoute.jsx";

import { ToastContainer } from "react-toastify";
import { Context } from "./main.jsx";
import axios from "axios";

const App = () => {
  const { setIsAuthenticated, setUser } = useContext(Context);


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "https://medalert-3thk.onrender.com/api/v1/user/patient/me",
          { withCredentials: true }
        );

        setIsAuthenticated(true);
        setUser(response.data.user);

      } catch (error) {
        // ❌ silently fail (no console error spam)
        setIsAuthenticated(false);
        setUser(null);
      }
    };

    fetchUser();
  }, []);


  return (
    <>
      <Navbar />
      <SOSFloatingButton />

      <div className="main-content">
        <Routes>
          {/* 🔓 Public */}
          <Route path="/sos" element={<SOS />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login role="Patient" />} />
          <Route path="/admin/login" element={<Login role="Admin" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<AboutUs />} />

          {/* 🔒 Protected */}
          <Route
            path="/appointment"
            element={
              <ProtectedRoute>
                <Appointment />
              </ProtectedRoute>
            }
          />

          <Route
            path="/nearby-hospitals"
            element={
              <ProtectedRoute>
                <SearchPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/hospital/:id"
            element={
              <ProtectedRoute>
                <HospitalDetails />
              </ProtectedRoute>
            }
          />

          <Route
            path="/add-review"
            element={
              <ProtectedRoute>
                <AddReviewPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/review"
            element={
              <ProtectedRoute>
                <ReviewForm hospitalId="dummyId" onSubmitSuccess={() => { }} />
              </ProtectedRoute>
            }
          />

          <Route
            path="/doctors"
            element={
              <ProtectedRoute>
                <AllDoctor />
              </ProtectedRoute>
            }
          />

          <Route
            path="/doctorform"
            element={
              <ProtectedRoute>
                <DoctorForm />
              </ProtectedRoute>
            }
          />

          {/* ❌ 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
      <ToastContainer position="top-center" />
    </>
  );
};

export default App;

