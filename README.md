# 🚑 MedAlert

MedAlert is a full-stack healthcare platform designed to help users quickly find nearby hospitals, explore available doctors and departments, book appointments, and access emergency assistance through an SOS feature.

The project focuses on providing a simple and accessible healthcare experience through hospital search, doctor information, appointment booking, ratings and reviews, and emergency location-based assistance.

---

## 🌟 Features

### 🏥 Hospital Search
- Search for hospitals based on location and availability.
- View hospital information and details.
- Find nearby hospitals using location-based search.
- View hospital ratings and reviews.

### 👨‍⚕️ Doctor Search
- Browse doctors associated with hospitals.
- Search doctors based on specialization.
- View doctor information and availability.

### 📅 Appointment Booking
- Select a hospital and book an appointment.
- View hospital information before scheduling an appointment.
- Appointment-related information is handled through the backend.

### 🚨 Emergency SOS
- Emergency SOS functionality for logged-in patients.
- Detects the user's current location using browser geolocation.
- Sends the emergency location to the backend.
- Designed to connect the user with nearby emergency assistance.
- Displays emergency assistance information such as estimated distance and arrival time when available.

### ⭐ Ratings & Reviews
- Users can submit ratings and reviews for hospitals.
- Hospital reviews can be displayed to other users.

### 🔐 Authentication
- Patient authentication.
- Admin authentication.
- Protected routes for authorized users.
- JWT-based authentication.
- Password hashing for secure user credentials.

### 🛠️ Admin Dashboard
- Dedicated dashboard for administrators.
- Manage hospital and doctor-related information.
- Manage application data and administrative operations.

### 📱 Responsive Design
- Responsive interface for desktop, tablet, and mobile devices.
- Healthcare-focused and user-friendly interface.

---

## 🧰 Tech Stack

### Frontend

- React.js
- Vite
- JavaScript
- HTML5
- CSS3
- Bootstrap
- React Router
- Axios

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt
- REST APIs

### Tools & Services

- Git
- GitHub
- Postman
- MongoDB
- MongoDB Compass
- Browser Geolocation API

---

## 📂 Project Structure

```text
MedAlert/
│
├── Backend/
│   ├── controller/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── utils/
│   ├── app.js
│   ├── server.js
│   └── package.json
│
├── Frontend/
│   ├── src/
│   │   ├── Components/
│   │   ├── Pages/
│   │   └── ...
│   ├── public/
│   ├── package.json
│   └── ...
│
├── Dashboard/
│   └── ...
│
├── .gitignore
└── README.md


⚙️ Installation & Setup
1. Clone the repository
git clone https://github.com/Kajalsingh16408/MedAlert.git

Navigate into the project:

cd MedAlert
🔹 Backend Setup

Navigate to the backend:

cd Backend

Install dependencies:

npm install

Create a .env file inside the Backend folder.

Example:

PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_jwt_secret

Add any other environment variables required by your backend configuration.

Start the backend:

npm run dev

or:

npm start

The backend will run on:

http://import.meta.env.VITE_API_URL
🔹 Frontend Setup

Open another terminal and navigate to the frontend:

cd Frontend

Install dependencies:

npm install

Start the development server:

npm run dev

The frontend will normally run on:

http://localhost:5173
🔹 Dashboard Setup

If the Dashboard has its own package configuration, open another terminal:

cd Dashboard

Install dependencies:

npm install

Then start it using the script defined in its package.json:

npm run dev
🔐 Environment Variables

Environment variables contain sensitive information and should never be committed to GitHub.

The project uses .gitignore to prevent .env files from being uploaded.

Example:

MONGO_URI=your_mongodb_uri
JWT_SECRET_KEY=your_secret_key
PORT=4000

Use your own credentials when running the project locally.

🔄 Application Flow
User
 │
 ▼
MedAlert Frontend
 │
 ├── Hospital Search
 ├── Doctor Search
 ├── Appointment Booking
 ├── Ratings & Reviews
 └── Emergency SOS
 │
 ▼
Node.js + Express Backend
 │
 ▼
MongoDB Database
Emergency SOS Flow
Patient
   │
   ▼
Clicks SOS
   │
   ▼
Browser requests location permission
   │
   ▼
Current latitude & longitude detected
   │
   ▼
SOS request sent to backend
   │
   ▼
Backend processes emergency request
   │
   ▼
Nearby emergency assistance
   │
   ▼
Distance / ETA information
🔒 Security

The application includes:

JWT-based authentication
Password hashing
Protected patient routes
Protected admin routes
Environment variables for sensitive configuration
Role-based access control
🚀 Future Improvements

Planned improvements include:

Real-time ambulance tracking
Live ambulance location on a map
Real-time ETA updates
Hospital emergency response notifications
Online appointment management
Doctor availability scheduling
Improved location-based hospital recommendations
Notifications for appointment and emergency updates
Production deployment
Enhanced admin analytics
🎯 Project Objective

The main objective of MedAlert is to create a centralized healthcare platform that makes it easier for users to discover healthcare facilities, find doctors, schedule appointments, and access emergency assistance when needed.

The project was developed as a practical full-stack application to demonstrate frontend development, backend API development, database integration, authentication, location-based services, and responsive UI design.

👩‍💻 Developer

Kajal Singh

BCA Graduate / Full-Stack Development Project

📌 Project Status

🚧 Currently under active development

New features, improvements, and production deployment are being added progressively.

⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.
