import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../main.jsx"; // ✅ Correct path

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(Context);

  if (!isAuthenticated) {
    // 🚫 Not logged in → redirect to login
    return <Navigate to="/login" replace />;
  }

  // ✅ Logged in → show the page
  return children;
};

export default ProtectedRoute;
