// import React from "react";
// import { useLocation } from "react-router-dom";   // ✅ to read state passed from SearchPage
// import Hero from "../src/Components/Hero";
// import AppointmentForm from "../src/Components/AppointmentForm";

// const Appointment = () => {
//   const location = useLocation();
//   const hospital = location.state?.hospital;   // ✅ hospital info passed from SearchPage

//   return (
//     <>
//       <Hero
//         title={
//           hospital
//             ? `Book Appointment at ${hospital.name} | MedAlert`
//             : "Schedule Your Appointment | MedAlert"
//         }
//         imageUrl={"signin.png"}
//       />

//       {hospital ? (
//         <div className="hospital-details">
//           <p><strong>Hospital:</strong> {hospital.name}</p>
//           <p><strong>City:</strong> {hospital.city}</p>
//           <p><strong>Area:</strong> {hospital.area}</p>
//           <p><strong>Rating:</strong> {hospital.rating || "N/A"}</p>
//         </div>
//       ) : (
//         <p style={{ textAlign: "center" }}>
//           Please select a hospital from the search page.
//         </p>
//       )}

//       {/* ✅ Pass hospital info into AppointmentForm if needed */}
//       <AppointmentForm hospital={hospital} />
//     </>
//   );
// };

// export default Appointment;

import React from "react";
import { useLocation } from "react-router-dom";
import Hero from "../src/Components/Hero";
import AppointmentForm from "../src/Components/AppointmentForm";


const Appointment = () => {
  const location = useLocation();
  const hospital = location.state?.hospital;

  return (
    <>
      <Hero
        title={
          hospital
            ? `Book Appointment at ${hospital.name} | MedAlert`
            : "Schedule Your Appointment | MedAlert"
        }
        imageUrl={"signin.png"}
      />

      {hospital ? (
        <div className="hospital-overview">
          <h2>{hospital.name}</h2>

          <div className="overview-grid">
            <p><strong>City:</strong> {hospital.city}</p>
            <p><strong>Area:</strong> {hospital.area}</p>
            <p><strong>Rating:</strong> ⭐ {hospital.rating || "N/A"}</p>
          </div>
        </div>
      ) : (
        <p style={{ textAlign: "center", marginTop: "40px" }}>
          Please select a hospital from the search page.
        </p>
      )}

      {/* <h2 className="appointment-title">Appointment</h2> */}

      <AppointmentForm hospital={hospital} />
    </>
  );
};

export default Appointment;
