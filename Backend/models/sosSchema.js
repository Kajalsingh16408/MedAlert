import mongoose from "mongoose";

const sosSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  location: {
    latitude: Number,
    longitude: Number,
  },
  address: String,
  emergencyType: {
    type: String,
    default: "Medical Emergency",
  },
  status: {
    type: String,
    enum: ["ACTIVE", "RESOLVED"],
    default: "ACTIVE",
  },
}, { timestamps: true });

export const SOS = mongoose.model("SOS", sosSchema);
