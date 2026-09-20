import React, { useEffect, useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Dashboard from "./Components/Dashboard";
import AddNewAdmin from "./Components/AddNewAdmin";
import AddNewDoctor from "./Components/AddNewDoctor";
import Doctors from "./Components/Doctors";
import Login from "./Components/Login";
import Message from "./Components/Message";
import Sidebar from "./Components/Sidebar";

import axios from "axios";
import "./App.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Context } from "./main";

const API_URL = import.meta.env.VITE_API_URL;

const App = () => {
  const {
    isAuthenticated,
    setIsAuthenticated,
    setUser,
  } = useContext(Context);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "https://medalert-backend-nxwy.onrender.com/api/v1/user/admin/me",
          {
            withCredentials: true,
          }
        );

        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        console.log(
          "Admin fetch failed:",
          error.response?.data?.message
        );

        setIsAuthenticated(false);
        setUser({});
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [setIsAuthenticated, setUser]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      {isAuthenticated && <Sidebar />}

      <Routes>
        {/* Admin Login / Home */}
        <Route
          path="/"
          element={
            isAuthenticated ? <Dashboard /> : <Login />
          }
        />

        {/* Login */}
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/" />
            ) : (
              <Login />
            )
          }
        />

        {/* Add Doctor */}
        <Route
          path="/doctor/addnew"
          element={
            isAuthenticated ? (
              <AddNewDoctor />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Add Admin */}
        <Route
          path="/admin/addnew"
          element={
            isAuthenticated ? (
              <AddNewAdmin />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Messages */}
        <Route
          path="/messages"
          element={
            isAuthenticated ? (
              <Message />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Doctors */}
        <Route
          path="/doctors"
          element={
            isAuthenticated ? (
              <Doctors />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>

      <ToastContainer position="top-center" />
    </Router>
  );
};

export default App;