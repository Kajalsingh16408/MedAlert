// models/Doctor.js
import mongoose from "mongoose";

// Define the Doctor schema with reference to Hospital
const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  specialty: String,
  availability: {
    type: Boolean,
    default: true,
  },
  hospital_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hospital",
    required: true,
  },
});

export default mongoose.model("Doctor", doctorSchema);
