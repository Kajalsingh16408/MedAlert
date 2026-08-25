import express from "express";
import mongoose from "mongoose";
import Doctor from "../models/Doctor.js";
import Hospital from "../models/Hospital.js";

const router = express.Router();

// ✅ POST /api/doctors — Add a new doctor to a hospital
router.post("/", async (req, res) => {
  const { name, specialty, availabzility, hospitalId } = req.body;

  // Log the incoming request
  console.log("Received doctor creation request:", req.body);

  // ✅ Validate required fields
  if (!name || !hospitalId) {
    return res.status(400).json({
      success: false,
      error: "Missing required fields: name and hospitalId",
    });
  }

  // ✅ Validate hospitalId format
  if (!mongoose.Types.ObjectId.isValid(hospitalId)) {
    return res.status(400).json({
      success: false,
      error: "Invalid hospitalId format",
    });
  }

  try {
    // ✅ Check if hospital exists
    const hospital = await Hospital.findById(hospitalId);
    if (!hospital) {
      return res.status(404).json({
        success: false,
        error: "Hospital not found for given hospitalId",
      });
    }

    // ✅ Create the doctor
    const doctor = new Doctor({
      name,
      specialty,
      availability: availability ?? true,
      hospital_id: hospital._id,
    });

    await doctor.save();

    res.status(201).json({
      success: true,
      message: "Doctor created successfully!",
      doctor,
    });
  } catch (err) {
    console.error("Error creating doctor:", err);
    res.status(500).json({
      success: false,
      error: "Internal server error",
      details: err.message,
    });
  }
});

export default router;
