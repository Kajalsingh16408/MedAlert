import express from "express";
import Hospital from "../models/Hospital.js";
import Doctor from "../models/Doctor.js";

const router = express.Router();

/**
 * GET /api/hospitals/nearby
 * Find hospitals within radius, filter by doctor/specialty
 * Query params: city, area, radius, doctor
 */
router.get("/nearby", async (req, res) => {
  const { city, area, radius, doctor } = req.query;

  if (!city || !area || !radius) {
    return res.status(400).json({ error: "city, area, and radius are required" });
  }

  try {
    // Match hospitals by city + area (case-insensitive)
    const matchQuery = {
      city: { $regex: city, $options: "i" },
      area: { $regex: area, $options: "i" },
    };

    let hospitals = await Hospital.find(matchQuery).lean();

    // Optional: filter by doctor or specialty
    if (doctor) {
      hospitals = hospitals.filter((h) =>
        h.doctors?.some(
          (d) =>
            d.name?.toLowerCase().includes(doctor.toLowerCase()) ||
            d.specialty?.toLowerCase().includes(doctor.toLowerCase())
        )
      );
    }

    // Add fake distance for demo (can replace with geo distance later)
    const withDistance = hospitals.map((h) => ({
      ...h,
      distance: `${(Math.random() * radius).toFixed(1)} km`, // clean readable format
    }));

    res.status(200).json(withDistance);
  } catch (err) {
    console.error("❌ Error fetching nearby hospitals:", err);
    res.status(500).json({ error: "Server error" });
  }
});

/**
 * POST /api/hospitals
 * Create a new hospital (with city, area, image, doctors, etc.)
 */
router.post("/", async (req, res) => {
  const { name, city, area, rating, doctors, image, address } = req.body;

  if (!name || !city || !area) {
    return res.status(400).json({ error: "Missing required fields (name, city, area)" });
  }

  try {
    const hospital = new Hospital({
      name,
      city,
      area,
      address: address || "Address not provided",
      image:
        image ||
        "https://cdn-icons-png.flaticon.com/512/2966/2966327.png", // ✅ fallback image
      rating: rating || null,
      doctors: doctors || [],
      comments: [],
    });

    await hospital.save();
    res.status(201).json({ message: "✅ Hospital created successfully", hospital });
  } catch (err) {
    console.error("❌ Error creating hospital:", err);
    res.status(500).json({ error: "Server error" });
  }
});

/**
 * POST /api/hospitals/:id/review
 * Add a review and optional rating
 */
router.post("/:id/review", async (req, res) => {
  const { user, comment, rating } = req.body;

  try {
    const hospital = await Hospital.findById(req.params.id);
    if (!hospital) {
      return res.status(404).json({ error: "Hospital not found" });
    }

    // Add comment
    hospital.comments.push({ user, comment });

    // Update rating (simple average)
    if (rating !== undefined && rating !== null) {
      hospital.rating = hospital.rating
        ? (hospital.rating + Number(rating)) / 2
        : Number(rating);
    }

    await hospital.save();
    res.json({ message: "✅ Review added successfully", hospital });
  } catch (err) {
    console.error("❌ Error adding review:", err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
