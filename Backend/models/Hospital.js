import mongoose from "mongoose";

// Define the Hospital schema
const hospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  location: {
    type: {
      type: String,
      enum: ["Point"],
      default: "Point",
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      default: [0, 0],
    },
  },
  rating: {
    type: Number,
    default: null,
  },
  image: {
    type: String, // ✅ added field for image URL
    default: "",  // you can leave blank or add a placeholder
  },
  doctors: [
    {
      name: String,
      specialty: String,
    },
  ],
  comments: [
    {
      user: String,
      comment: String,
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

// Optional 2dsphere index for geo queries
hospitalSchema.index({ location: "2dsphere" });

export default mongoose.model("Hospital", hospitalSchema);
