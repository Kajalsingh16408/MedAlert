import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllDoctor = () => {
  const [doctors, setDoctors] = useState([]);
  const [specialty, setSpecialty] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    axios
      .get("https://medalert-3thk.onrender.com/api/doctors")
      .then((res) => {
        setDoctors(res.data);
        setFiltered(res.data);
      })
      .catch((err) => console.error("Error fetching doctors", err));
  }, []);

  const handleFilter = () => {
    const result = doctors.filter((doc) =>
      doc.specialty.toLowerCase().includes(specialty.toLowerCase())
    );
    setFiltered(result);
  };

  return (
    <div className="doctor-page">
      <h2>🩺 All Available Doctors</h2>

      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search by specialty (e.g., cardio)"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
        />
        <button onClick={handleFilter}>Filter</button>
      </div>

      <div className="doctor-grid">
        {filtered.map((doc) => (
          <div key={doc._id} className="doctor-card">
            <h3>{doc.name}</h3>
            <p>🩻 Specialty: {doc.specialty}</p>
            <p>🏥 Hospital ID: {doc.hospital_id}</p>
            <p>
              🔗 <Link to={`/hospital/${doc.hospital_id}`}>View Hospital</Link>
            </p>
            <p>🟢 {doc.availability ? "Available" : "Unavailable"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllDoctor;
