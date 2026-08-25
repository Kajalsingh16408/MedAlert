// src/pages/HospitalDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const HospitalDetails = () => {
  const { id } = useParams(); // Get hospital ID from URL
  const [hospital, setHospital] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newReview, setNewReview] = useState({ user: "", comment: "", rating: 0 });

  useEffect(() => {
    const fetchHospital = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/hospitals/${id}`);
        setHospital(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching hospital:", err);
      }
    };

    fetchHospital();
  }, [id]);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:4000/api/hospitals/${id}/review`, newReview);
      alert("Review submitted!");
      setNewReview({ user: "", comment: "", rating: 0 });
    } catch (err) {
      console.error("Error posting review:", err);
    }
  };

  if (loading) return <p>Loading hospital details...</p>;
  if (!hospital) return <p>Hospital not found.</p>;

  return (
    <div className="hospital-details-container">
      <h2>{hospital.name}</h2>
      <p><strong>Address:</strong> {hospital.address}</p>
      <p><strong>Rating:</strong> {hospital.rating || "No rating yet"}</p>

      <h3>Doctors at this hospital:</h3>
      {hospital.doctors?.length > 0 ? (
        <ul>
          {hospital.doctors.map((doc) => (
            <li key={doc._id}>
              {doc.name} – {doc.specialty} – {doc.availability ? "Available" : "Not Available"}
            </li>
          ))}
        </ul>
      ) : (
        <p>No doctors listed.</p>
      )}

      <h3>Reviews:</h3>
      {hospital.comments?.length > 0 ? (
        <ul>
          {hospital.comments.map((rev, idx) => (
            <li key={idx}>
              <strong>{rev.user}</strong>: {rev.comment}
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews yet.</p>
      )}

      <h3>Add Your Review:</h3>
      <form onSubmit={handleReviewSubmit}>
        <input
          type="text"
          name="user"
          placeholder="Your name"
          value={newReview.user}
          onChange={(e) => setNewReview({ ...newReview, user: e.target.value })}
          required
        />
        <textarea
          placeholder="Your comment"
          value={newReview.comment}
          onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
          required
        />
        <input
          type="number"
          min="1"
          max="5"
          value={newReview.rating}
          onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
          placeholder="Rating (1-5)"
        />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default HospitalDetails;
