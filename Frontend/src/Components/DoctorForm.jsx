// src/components/DoctorForm.jsx
import { useEffect, useState } from "react";

const DoctorForm = () => {
  const [hospitals, setHospitals] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    availability: false,
    hospitalId: "",
  });
  const [message, setMessage] = useState("");

  // ✅ Fetch hospitals on load
  useEffect(() => {
    fetch("https://medalert-backend-nxwy.onrender.com/api/hospitals")
      .then((res) => res.json())
      .then((data) => setHospitals(data))
      .catch((err) => console.error("Failed to fetch hospitals", err));
  }, []);

  // ✅ Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ✅ Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch("https://medalert-backend-nxwy.onrender.com/api/doctors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (res.ok) {
        setMessage("✅ Doctor added successfully!");
        setFormData({
          name: "",
          specialty: "",
          availability: false,
          hospitalId: "",
        });
      } else {
        setMessage(`❌ ${result.error || "Failed to add doctor"}`);
      }
    } catch (error) {
      setMessage("❌ Network error");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Add New Doctor</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label>Doctor Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Specialty:</label>
        <input
          type="text"
          name="specialty"
          value={formData.specialty}
          onChange={handleChange}
          required
        />

        <label>
          <input
            type="checkbox"
            name="availability"
            checked={formData.availability}
            onChange={handleChange}
          />
          Available?
        </label>

        <label>Select Hospital:</label>
        <select
          name="hospitalId"
          value={formData.hospitalId}
          onChange={handleChange}
          required
        >
          <option value="">Select...</option>
          {hospitals.map((h) => (
            <option key={h._id} value={h._id}>
              {h.name}
            </option>
          ))}
        </select>

        <button type="submit">Add Doctor</button>

        <div style={{ marginTop: "1rem", color: message.startsWith("✅") ? "green" : "red" }}>
          {message}
        </div>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    background: "#f4f6fa",
    borderRadius: "8px",
    maxWidth: "500px",
    margin: "auto",
    marginTop: "3rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  },
};

export default DoctorForm;
