// import React from 'react'
// import { Link } from 'react-router-dom'
// import {FaPhone, FaLocationArrow} from "react-icons/fa"
// import {MdEmail} from "react-icons/md"


// const Footer = () => {
//     const hours = [
//         {
//             id: 1,
//             day: "Monday",
//             time: "9:00 AM - 11:00 PM",
//         },
//         {
//             id: 2,
//             day: "Tuesday",
//             time: "12:00 PM - 12:00 AM",
//         },
//         {
//             id: 3,
//             day: "Wednesday",
//             time: "10:00 AM - 10:00 PM",
//         },
//         {
//             id: 4,
//             day: "Thursday",
//             time: "9:00 AM - 9:00 PM",
//         },
//         {
//             id: 5,
//             day: "Monday",
//             time: "3:00 PM - 9:00 PM",
//         },
//         {
//             id: 6,
//             day: "Saturday",
//             time: "9:00 AM - 3:00 PM",
//         },
//     ]
//     return (
//         <>
//             <footer className='container'>
//                 <hr />

//                 <div className="content">
//                     <div>
//                         <img src="/MedAlert.png" alt="MedAlert Logo" className="logo-img" />
//                     </div>
//                     <div>
//                         <h4>Quick Links</h4>
//                         <ul>
//                             <Link to={"/"}>Home</Link>
//                             <Link to={"/appointment"} >Appointment</Link>
//                             <Link to={"/about"}>About</Link>
//                         </ul>
//                     </div>
//                     <div>
//                         <h4>Hours</h4>
//                         {
//                             hours.map(element=>{
//                                 return(
//                                     <li key={element.id}>
//                                         <span>{element.day}</span>
//                                         <span>{element.time}</span>
//                                     </li>
//                                 )
//                             })
//                         }
//                     </div>
//                     <div>
//                        <h4>Contact</h4> 
//                        <div>
//                         <FaPhone/>
//                         <span>999-999-999</span>
//                        </div>
//                        <div>
//                         <MdEmail/>
//                         <span>medalert@gmail.com</span>
//                        </div>
//                        <div>
//                         <FaLocationArrow/>
//                         <span>Kanpur, India</span>
//                        </div>
//                     </div>
//                 </div>
//             </footer>
//         </>
//     )
// }

// export default Footer

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaPhone, FaLocationArrow } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";

// const hours = [
//   { id: 1, day: "Monday", time: "9:00 AM - 11:00 PM" },
//   { id: 2, day: "Tuesday", time: "12:00 PM - 12:00 AM" },
//   { id: 3, day: "Wednesday", time: "10:00 AM - 10:00 PM" },
//   { id: 4, day: "Thursday", time: "9:00 AM - 9:00 PM" },
//   { id: 5, day: "Friday", time: "3:00 PM - 9:00 PM" },
//   { id: 6, day: "Saturday", time: "9:00 AM - 3:00 PM" },
// ];

// const Footer = () => {
//   return (
//     <footer className="footer-container">
//       <hr />
//       <div className="footer-grid">
//         <div className="footer-logo">
//           <img src="/MedAlert.png" alt="MedAlert Logo" className="logo-img" />
//           <p className="brand-tagline">Care at your fingertips.</p>
//         </div>

//         <div className="footer-links">
//           <h4>Quick Links</h4>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/appointment">Appointment</Link></li>
//             <li><Link to="/about">About</Link></li>
//           </ul>
//         </div>

//         <div className="footer-hours">
//           <h4>Hours</h4>
//           <ul>
//             {hours.map(({ id, day, time }) => (
//               <li key={id}>
//                 <span>{day}</span>: <span>{time}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="footer-contact">
//           <h4>Contact</h4>
//           <p><FaPhone /> 999-999-999</p>
//           <p><MdEmail /> medalert@gmail.com</p>
//           <p><FaLocationArrow /> Kanpur, India</p>
//         </div>
//       </div>
//       <p className="footer-note">© 2025 MedAlert. All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footer;

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











