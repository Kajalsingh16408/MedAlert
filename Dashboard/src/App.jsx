import React, { useEffect, useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./Components/Dashboard";
import AddNewAdmin from "./Components/AddNewAdmin";
import AddNewDoctor from "./Components/AddNewDoctor";
import Doctors from "./Components/Doctors";
import Login from "./Components/Login";
import Message from "./Components/Message";
import Sidebar from './Components/Sidebar';
import axios from "axios";
import "./App.css";


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "./main";






const App = () => {

  const { isAuthenticated, setIsAuthenticated, user, setUser } = useContext(Context);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token"); // or from context
        const response = await axios.get(
          "http://localhost:4000/api/v1/user/admin/me",
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        console.log("Admin fetch failed:", error.response?.data?.message);
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  }, []);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:4000/api/v1/user/admin/me",
  //         {
  //           withCredentials: true,
  //         }
  //       );
  //       setIsAuthenticated(true);
  //       setUser(response.data.user);
  //     } catch (error) {
  //       setIsAuthenticated(false);
  //       setUser({});
  //     }
  //   };
  //   fetchUser();
  // }, [isAuthenticated]);

  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/doctor/addnew' element={<AddNewDoctor />} />
          <Route path='/admin/addnew' element={<AddNewAdmin />} />
          <Route path='/messages' element={<Message />} />
          <Route path='/doctors' element={<Doctors />} />
        </Routes>
        <ToastContainer position="top-center" />
      </Router>

    </>
  )
}

export default App
