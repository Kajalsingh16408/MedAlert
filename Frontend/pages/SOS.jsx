import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SOS = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { distance, eta } = location.state || {};

  if (!distance) {
    return (
      <div className="sos-container">
        <div className="sos-card">
          <h2>No Active Emergency Request</h2>
          <button onClick={() => navigate("/")}>
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="sos-container">
      <div className="sos-card">
        <h1 className="sos-heading">🚑 Ambulance Dispatched</h1>

        <div className="eta-box">
          <p><strong>Distance:</strong> {distance} km</p>
          <p><strong>Estimated Arrival:</strong> {eta} minutes</p>
        </div>
      </div>
    </div>
  );
};

export default SOS;







