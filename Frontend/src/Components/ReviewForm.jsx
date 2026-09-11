import { useState, useEffect } from "react";
import axios from "axios";

const ReviewForm = ({ hospitalId }) => {
  const [hospital, setHospital] = useState(null);
  const [comment, setComment] = useState("");
  const [user, setUser] = useState("");
  const [rating, setRating] = useState(0);

  // Fetch hospital data
  useEffect(() => {
    const fetchHospital = async () => {
      try {
        const { data } = await axios.get(
          `https://medalert-backend-nxwy.onrender.com/api/hospitals/${hospitalId}`
        );
        setHospital(data);
      } catch (err) {
        console.error("Failed to fetch hospital:", err);
      }
    };

    fetchHospital();
  }, [hospitalId]);

  const submitReview = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`https://medalert-backend-nxwy.onrender.com/api/hospitals/${hospitalId}/review`, {
        user,
        comment,
        rating: Number(rating),
      });
      alert("Review added!");
      setUser("");
      setComment("");
      setRating(0);
      // Refresh reviews
      const { data } = await axios.get(
        `https://medalert-backend-nxwy.onrender.com/api/hospitals/${hospitalId}`
      );
      setHospital(data);
    } catch (err) {
      console.error("Review error:", err);
      alert("Something went wrong");
    }
  };

  if (!hospital) return <p>Loading reviews...</p>;

  return (
    <div className="review-box">
      <h2>Reviews for {hospital.name}</h2>
      <p>⭐ Average Rating: {hospital.rating ?? "No rating yet"}</p>

      <form onSubmit={submitReview} className="review-form">
        <input
          type="text"
          placeholder="Your name"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
        />
        <textarea
          placeholder="Write a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
        <input
          type="number"
          min="1"
          max="5"
          placeholder="Rating (1–5)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <button type="submit">Submit Review</button>
      </form>

      <ul className="comment-list">
        {hospital.comments?.map((c, i) => (
          <li key={i}>
            <strong>{c.user}</strong>: {c.comment}{" "}
            <small>({new Date(c.date).toLocaleDateString()})</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewForm;
