import React, { useState } from "react";
import "./ReviewForm.css";

// Coponent that displays the feedback form
function GiveReviews({ doctorName, onClose }) {

    // Form state
    const [formData, setFormData] = useState({
        name: "",
        review: ""
    });

    const [showWarning, setShowWarning] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.review) {
      alert("Review Submitted Successfully!");

     // Reset form
      setFormData({
        name: "",
        review: ""
      });

      setShowWarning(false);
      
      // Close form
      onClose();
    } else {
      setShowWarning(true);
    }
  };

  return (
    <div className="review-form-card">

      <h2>Give Your Review</h2>

      {showWarning && (
        <p className="warning">Please fill out all fields.</p>
      )}

      <form onSubmit={handleSubmit}>

        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label>Review:</label>
        <textarea
          name="review"
          value={formData.review}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>

      </form>

    </div>
  );
}

export default GiveReviews;