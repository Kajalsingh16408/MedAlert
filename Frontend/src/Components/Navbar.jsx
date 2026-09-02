import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Context } from "../main";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const handleLogout = async () => {
    try {
      const res = await axios.get('https://medalert-3thk.onrender.com/api/v1/user/patient/logout', {
        withCredentials: true,
      });
      toast.success(res.data.message);
      setIsAuthenticated(false);
      setShow(false); // close menu after logout
    } catch (err) {
      toast.error(err.response?.data?.message || "Logout failed.");
    }
  };

  const gotoLogin = () => {
    setShow(false); // close menu before redirect
    window.location.href = '/login';
  };

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (show && !e.target.closest(".navLinks") && !e.target.closest(".hamburger")) {
        setShow(false);
      }
    };
    const handleEsc = (e) => e.key === "Escape" && setShow(false);

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [show]);

  // Prevent background scroll when menu open
  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "";
  }, [show]);

  return (
    <nav className="container">
      <div className="logo">
        <img src="/MedAlert.png" alt="MedAlert Logo" className="logo-img" />
      </div>

      <div className={show ? 'navLinks showmenu' : 'navLinks'}>
        <div className="links">
          <Link to="/" onClick={() => setShow(false)}>Home</Link>
          <Link to="/appointment" onClick={() => setShow(false)}>Appointment</Link>
          <Link to="/about" onClick={() => setShow(false)}>About Us</Link>
          <Link to="/nearby-hospitals" onClick={() => setShow(false)}>Search </Link>
          
        </div>

        {isAuthenticated ? (
          <button className="logoutBtn" onClick={handleLogout}>LOGOUT</button>
        ) : (
          <button className="loginBtn" onClick={gotoLogin}>LOGIN</button>
        )}
      </div>

      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
