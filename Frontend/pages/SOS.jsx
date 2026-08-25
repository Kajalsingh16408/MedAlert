// import React, { useState } from "react";

// const SOS = () => {
//   const [location, setLocation] = useState(null);
//   const [status, setStatus] = useState("");

//   const handleSOS = () => {
//     if (!navigator.geolocation) {
//       setStatus("Geolocation is not supported by your browser.");
//       return;
//     }

//     setStatus("Fetching your live location...");

//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const userLocation = {
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//         };

//         setLocation(userLocation);
//         setStatus("🚑 Emergency alert triggered!");
//         console.log("Live Location:", userLocation);
//       },
//       () => {
//         setStatus("Location access denied. Please enable it.");
//       }
//     );
//   };

//   return (
//     <div className="sos-container">
//       <h1 className="sos-heading"> MedAlert SOS</h1>

//       <p className="sos-subtext">
//         Tap the SOS button to share your live location with nearby hospitals.
//       </p>
//       <button className="sos-button" onClick={handleSOS}>
//         SOS
//       </button>

//       {status && <p className="sos-status">{status}</p>}
//       {location && (
//         <div className="location-box">
//           <p><strong>Latitude:</strong> {location.latitude}</p>
//           <p><strong>Longitude:</strong> {location.longitude}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SOS;

// import React, { useState } from "react";
// import axios from "axios";

// const SOS = () => {
//   const [status, setStatus] = useState("");
//   const [distance, setDistance] = useState(null);
//   const [eta, setEta] = useState(null);

//   const handleSOS = () => {
//     if (!navigator.geolocation) {
//       setStatus("Geolocation is not supported by your browser.");
//       return;
//     }

//     setStatus("Fetching your live location...");

//     navigator.geolocation.getCurrentPosition(
//       async (position) => {
//         const latitude = position.coords.latitude;
//         const longitude = position.coords.longitude;

//         try {
//           setStatus("Contacting nearest hospital...");

//           const { data } = await axios.post(
//             "http://localhost:4000/api/v1/sos/create",
//             { latitude, longitude },
//             { withCredentials: true }
//           );

//           setStatus(" Help is on the way!");
//           setDistance(data.distance);
//           setEta(data.eta);

//         } catch (error) {
//           setStatus("Failed to send SOS. Please try again.");
//         }
//       },
//       () => {
//         setStatus("Location access denied. Please enable it.");
//       }
//     );
//   };

//   return (
//     <div className="sos-container">
//       <div className="sos-card">
//         <h1 className="sos-heading">Emergency Assistance</h1>

//         <p className="sos-subtext">
//           Press the button below to instantly notify the nearest hospital and dispatch emergency support.
//         </p>

//         <button className="sos-button" onClick={handleSOS}>
//           SEND EMERGENCY ALERT
//         </button>

//         {status && <p className="sos-status">{status}</p>}

//         {distance && (
//           <div className="eta-box">
//             <p>Ambulance Distance: {distance} km</p>
//             <p>Estimated Arrival: {eta} minutes</p>
//           </div>
//         )}
//       </div>
//     </div>

//   );
// };

// export default SOS;







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







