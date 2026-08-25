import { SOS } from "../models/sosSchema.js";
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";

export const createSOS = catchAsyncErrors(async (req, res, next) => {
  const { latitude, longitude, address, emergencyType } = req.body;

  if (!latitude || !longitude) {
    return next(new ErrorHandler("Location is required", 400));
  }

  const sos = await SOS.create({
    user: req.user._id,
    location: { latitude, longitude },
    address,
    emergencyType,
  });

  res.status(201).json({
    success: true,
    message: "SOS alert sent successfully",
    sos,
  });
});
