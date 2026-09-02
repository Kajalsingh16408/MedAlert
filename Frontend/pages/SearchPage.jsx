import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";   // ✅ import navigate

const SearchPage = () => {
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [radius, setRadius] = useState("5");
  const [doctor, setDoctor] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState([]);

  const navigate = useNavigate();   // ✅ hook for navigation

  const detectLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      () => {
        setError("Auto-detect works only for coordinates — please enter city and area manually.");
      },
      () => setError("Please allow location access to auto-fill.")
    );
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!city || !area) {
      setError("Please enter your city and area.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await axios.get(
        `https://medalert-3thk.onrender.com/api/hospitals/nearby?city=${city}&area=${area}&radius=${radius}&specialty=${doctor}`
      );
      setResults(res.data);
      console.log(res.data);
    } catch {
      setError("Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="search-container">
      {/* Banner */}
      <div className="search-banner">
        <div className="search-text">
          <h2>Search Nearby Hospitals | MedAlert</h2>
          <p>
            Quickly find hospitals near your location and check for available
            doctors or specialists. Enter your city and area manually or use
            auto-detect for faster results.
          </p>
        </div>
        <div className="search-image">
          <img src="/Search.png" alt="Search Illustration" className="animated-image" />
        </div>
      </div>

      {/* Form */}
      <div className="search-form-container">
        <h3 className="form-title">Search</h3>
        <form onSubmit={handleSearch} className="search-form">
          <div className="form-row">
            <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
            <input type="text" placeholder="Area" value={area} onChange={(e) => setArea(e.target.value)} />
          </div>

          <div className="form-row">
            <select value={radius} onChange={(e) => setRadius(e.target.value)}>
              <option value="3">3 km</option>
              <option value="5">5 km</option>
              <option value="10">10 km</option>
              <option value="20">20 km</option>
            </select>
            <input
              type="text"
              placeholder="Doctor or Specialist (optional)"
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
            />
          </div>

          <div className="form-row">
            <button type="submit" className="primary-btn">
              {loading ? "Searching..." : "Search"}
            </button>
            <button type="button" className="secondary-btn" onClick={detectLocation}>
              📍 Auto-detect
            </button>
          </div>

          {error && <p className="error">{error}</p>}
        </form>
      </div>

      {/* Hospital Results */}
      <div className="hospital-results">
        {results.map((h, index) => (
          <div
            key={index}
            className="hospital-card"
            onClick={() => navigate("/appointment", { state: { hospital: h } })}   // ✅ navigate with hospital data
          >
            <img
              src={h.image || "/hospital-default.jpg"}
              alt={h.name}
              className="hospital-image"
            />
            <h4>{h.name}</h4>
            <p><strong>City:</strong> {h.city}</p>
            <p><strong>Area:</strong> {h.area}</p>
            <p><strong>Distance:</strong> {h.distance || "2.3 km"} away</p>
            <div className="rating">
              ⭐ {h.rating ? h.rating.toFixed(1) : "4.5"}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SearchPage;
