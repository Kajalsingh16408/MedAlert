import { useState } from "react";
import HospitalMap from "./HospitalMap.jsx";

const HospitalCard = ({ hospital }) => {
  const handleCardClick = () => {
    console.log("Clicked hospital:", hospital);

    if (hospital.location?.coordinates?.length === 2) {
      const [longitude, latitude] = hospital.location.coordinates;
      const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
      window.open(mapUrl, "_blank");
    } else {
      // ✅ Fallback: open Google Maps search if no coordinates are found
      const query = `${hospital.name} ${hospital.area} ${hospital.city}`;
      const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
      window.open(mapUrl, "_blank");
    }  
  };

  return (
    <div
      onClick={handleCardClick}
      className="hospital-card cursor-pointer hover:scale-105 transition-transform bg-white shadow-md rounded-xl p-4 w-72"
    >
      <img
        src={hospital.image || "https://via.placeholder.com/150"}
        alt={hospital.name}
        className="w-full h-40 object-cover rounded-lg"
      />
      <h2 className="text-lg font-semibold mt-2">{hospital.name}</h2>
      <p className="text-gray-600 text-sm">
        {hospital.area}, {hospital.city}
      </p>
      <p className="text-sm text-gray-500">
        ⭐ Rating: {hospital.rating ?? "No rating yet"}
      </p>

      {hospital.doctors?.length > 0 && (
        <div className="mt-1">
          <p className="text-sm font-semibold">🩺 Doctors:</p>
          <ul className="text-sm list-disc ml-5">
            {hospital.doctors.map((doc, idx) => (
              <li key={idx}>
                {doc.name} ({doc.specialty})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const NearbyHospitals = () => {
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [radius, setRadius] = useState("5");
  const [doctor, setDoctor] = useState("");
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setMessage("Searching...");
    setResults([]);

    if (!city || !area || !radius) {
      setMessage("❌ Please fill city, area, and radius.");
      return;
    }

    try {
      const res = await fetch(
        `https://medalert-3thk.onrender.com/api/hospitals/nearby?city=${city}&area=${area}&radius=${radius}&doctor=${doctor}`
      );
      const data = await res.json();
      setResults(data);
      setMessage(data.length ? "✅ Results found!" : "❗ No hospitals found nearby.");
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to fetch hospitals.");
    }
  };

  return (
    <div className="search-container">
      <h2 className="form-title">🏥 Nearby Hospital Search</h2>

      <form onSubmit={handleSearch} className="search-form">
        <label>City:</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />

        <label>Area:</label>
        <input
          type="text"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          required
        />

        <label>Radius (km):</label>
        <input
          type="number"
          value={radius}
          onChange={(e) => setRadius(e.target.value)}
          required
        />

        <label>Doctor/Specialty (optional):</label>
        <input
          type="text"
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
        />

        <button type="submit" className="primary-btn">
          🔍 Search
        </button>
      </form>

      <p className="search-message">{message}</p>

      {/* ✅ Cards in a responsive grid layout */}
      <div className="hospital-results flex flex-wrap justify-start gap-6 mt-4">
        {results.map((hospital) => (
          <HospitalCard key={hospital._id} hospital={hospital} />
        ))}
      </div>

      {results.length > 0 && (
        <HospitalMap hospitals={results} center={[city, area]} />
      )}
    </div>
  );
};

export default NearbyHospitals;
