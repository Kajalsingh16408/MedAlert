import { User } from "../models/userSchema.js";
import { catchAsyncErrors } from "./catchAsyncErrors.js";
import ErrorHandler from "./error.js";
import jwt from "jsonwebtoken";

// ================= ADMIN AUTH =================
export const isAdminAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const token = req.cookies.adminToken; // ✅ FIXED

  if (!token) {
    return next(new ErrorHandler("Admin not authenticated", 401));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  req.user = await User.findById(decoded.id);

  if (!req.user || req.user.role !== "Admin") {
    return next(new ErrorHandler("Not authorized as Admin", 403));
  }

  next();
});

// ================= PATIENT AUTH =================
export const isPatientAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const token = req.cookies.patientToken; // ✅ FIXED

  if (!token) {
    return next(new ErrorHandler("User not authenticated", 401));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  req.user = await User.findById(decoded.id);

  if (!req.user || req.user.role !== "Patient") {
    return next(new ErrorHandler("Not authorized as Patient", 403));
  }

  next();
});
