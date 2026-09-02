import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaLocationArrow } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="footer-container">
      <hr/>
      <div className="footer-grid">
        <div className="footer-logo">
          <img src="/MedAlert.png" alt="MedAlert Logo" className="logo-img" />
          <p className="brand-tagline">Care at your fingertips.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/appointment">Appointment</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p><FaPhone /> 999-999-999</p>
          <p><MdEmail /> medalert@example.com</p>
          <p><FaLocationArrow /> 123 Health St, Wellness City</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;











