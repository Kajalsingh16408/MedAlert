MedAlert — Hospital & Patient Assistance System

A full-stack healthcare platform that helps patients discover hospitals and doctors, book appointments, and access healthcare assistance through a dedicated admin management system.

🚀 Live Demo

Patient Website:
https://medalert-frontend.onrender.com

Admin Dashboard:
https://medalert-admin.onrender.com

Backend API:
https://medalert-backend-nxwy.onrender.com

✨ Features
👤 Patient
Patient registration and login
Secure authentication
Search hospitals by location
Search doctors by specialty
Doctor availability
Book appointments
View appointment information
Patient profile
Logout
🏥 Hospital & Doctor Management
Hospital information management
Doctor information management
Doctor specialty and availability
Hospital/doctor search
🛠️ Admin Dashboard
Separate admin authentication
Admin dashboard
View appointments
Update appointment status
Add new doctors
Add new administrators
View doctors
View messages
Secure admin logout
🔐 Security
JWT-based authentication
Role-based access control
Separate Patient and Admin authentication
HTTP-only authentication cookies
Password hashing with bcrypt
Protected API routes
CORS configuration for production
🧑‍💻 Tech Stack
Frontend
React.js
Vite
CSS
Axios
React Router
Backend
Node.js
Express.js
MongoDB
Mongoose
JWT
bcrypt
Cloudinary
Development & Tools
Git
GitHub
Postman
MongoDB Compass
VS Code
Deployment
Render
MongoDB Atlas
Cloudinary
🏗️ Project Architecture
MedAlert
│
├── Frontend
│   ├── React
│   ├── Vite
│   └── CSS
│
├── Dashboard
│   ├── React
│   └── Vite
│
└── Backend
    ├── Node.js
    ├── Express.js
    ├── MongoDB
    ├── JWT Authentication
    └── REST APIs
🔑 Authentication

MedAlert uses role-based authentication for different users.

Patient
   ↓
Patient Login
   ↓
Protected Patient Routes


Admin
   ↓
Admin Login
   ↓
Admin Dashboard
   ↓
Protected Admin Routes

Patient and Admin authentication are handled separately to prevent unauthorized access to the Admin Dashboard.

📌 Main Modules
Module	Description
Authentication	Patient/Admin login and registration
Hospitals	Hospital search and information
Doctors	Doctor search and management
Appointments	Appointment booking and management
Admin Dashboard	Administrative operations
Messages	Patient/admin communication
SOS	Emergency assistance functionality
⚙️ Local Setup
1. Clone the repository
git clone https://github.com/Kajalsingh16408/MedAlert.git
cd MedAlert
2. Backend
cd Backend
npm install

Create:

Backend/config/config.env

Add your environment variables:

PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_jwt_secret
JWT_EXPIRE=7d
COOKIE_EXPIRE=7
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
FRONTEND_URL=http://localhost:5173
DASHBOARD_URL=http://localhost:5174

Start backend:

npm run dev
3. Frontend
cd Frontend
npm install
npm run dev
4. Admin Dashboard
cd Dashboard
npm install
npm run dev
📡 API

Backend REST API base URL:

/api/v1

Examples:

/api/v1/user
/api/v1/appointment
/api/v1/message
/api/v1/sos
/api/hospitals
/api/doctors

🌐 Deployment

The application is deployed using separate services:

Patient Frontend
       ↓
   Render
       ↓
    Backend
       ↓
 MongoDB Atlas


Admin Dashboard
       ↓
   Render
       ↓
    Backend
👩‍💻 Author

Kajal Singh

BCA Graduate | Aspiring Software Developer

GitHub:
https://github.com/Kajalsingh16408
