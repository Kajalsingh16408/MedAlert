// import React, { useState } from "react";

// const SOSFloatingButton = () => {
//   const [loading, setLoading] = useState(false);

//   const handleSOS = () => {
//     const confirmSOS = window.confirm(
//       "🚨 Emergency SOS\n\nThis will share your live location with nearby hospitals.\nDo you want to continue?"
//     );

//     if (!confirmSOS) return;

//     if (!navigator.geolocation) {
//       alert("Geolocation is not supported by your browser");
//       return;
//     }

//     setLoading(true);

//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const emergencyData = {
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//           timestamp: new Date().toISOString(),
//         };

//         console.log("🚑 SOS Triggered:", emergencyData);

//         alert("✅ SOS sent successfully!\nHelp is being notified.");
//         setLoading(false);
//       },
//       (error) => {
//         alert("❌ Unable to access location. Please enable GPS.");
//         setLoading(false);
//       },
//       { enableHighAccuracy: true }
//     );
//   };

//   return (
//     <button
//       onClick={handleSOS}
//       className="sos-floating-btn"
//       disabled={loading}
//     >
//       {loading ? "Sending..." : "SOS"}
//     </button>
//   );
// };

// export default SOSFloatingButton;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SOSFloatingButton = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSOS = () => {
    const confirmSOS = window.confirm(
      "🚨 Emergency SOS\n\nThis will share your live location with nearby hospitals.\nDo you want to continue?"
    );

    if (!confirmSOS) return;

    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          // 🔥 Backend call
          const { data } = await axios.post(
            "http://localhost:4000/api/v1/sos/create",
            { latitude, longitude },
            { withCredentials: true }
          );

          // ✅ Navigate to /sos page with data
          navigate("/sos", {
             state: {
              distance: data.distance,
              eta: data.eta,
            },
          });

        }// catch (error) {
        //   alert("❌ SOS failed. Please try again.");
        // }
        catch (error) {
          console.log("FULL ERROR:", error);
          console.log("RESPONSE:", error.response);
          console.log("DATA:", error.response?.data);
          alert(error.response?.data?.message || "SOS failed");
        }


        setLoading(false);
      },
      () => {
        alert("❌ Unable to access location. Please enable GPS.");
        setLoading(false);
      },
      { enableHighAccuracy: true }
    );
  };

  return (
    <button
      onClick={handleSOS}
      className="sos-floating-btn"
      disabled={loading}
    >
      {loading ? "Sending..." : "SOS"}
    </button>
  );
};

export default SOSFloatingButton;
