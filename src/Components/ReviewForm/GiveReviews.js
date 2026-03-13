import React, { useState } from "react";
import "./ReviewForm.css";

// Function component for giving reviews
function GiveReviews({ doctor, onSubmitReview, onBack}) {
   //State variables using useState hook
   const [showWarning, setShowWarning] = useState(false);
    
    const [formData, setFormData] = useState({
        name: "",
        review: "",
        rating: 0,
    });

    // Function to handle form input changes
    const handleChange = (e) => {
        // Update the form data based on user input
        setFormData({ ...formData, [e.target.name]: e.target.value, 
        });
    };

    // Function to handle rating star click
    const handleRatingClick = (value) => {
        setFormData({ ...formData, rating: value, 
        });
    };

    // Submit review and return to ReviewForm table
    const handleSubmit = (e) => {
        e.preventDefault();

    // Check if all required fields are filled before submission
    if (formData.name && formData.review && formData.rating > 0) {
        setShowWarning(false); 

        // Send review back to ReviewForm
        onSubmitReview(doctor.id, formData);

         // Reset form
      setFormData({
        name: "",
        review: "",
        rating: 0,
      });
    } else {
      setShowWarning(true);
    }
};

return (
    <div className="review-form-page">
        <div className="review-form-card">
      <h2>Give Your Review</h2>

      <div className="doctor-review-info">
        <p>
            <strong>Doctor:</strong> {doctor.doctorName}
            </p>
            <p>
            <strong>Speciality:</strong> {doctor.speciality}
            </p>
            </div>

      {/* Display warning message if not all fields are filled */}
      {showWarning && (
      <p className="warning">Please fill out all fields and select a rating.</p>
    )}

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="review">Review:</label>
        <textarea
          id="review"
          name="review"
          value={formData.review}
          onChange={handleChange}
        />
        
        <label>Rating:</label>
        <div className="rating-stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= formData.rating ? "star selected-star" : "star"}
              onClick={() => handleRatingClick(star)}
            >
              ★
            </span>
          ))}
        </div>

        {/* Submit button for form submission */}
        <button type="submit">Submit</button>
        <button type="button" className="back-btn" onClick={onBack}>
        Back
        </button>
      </form>
    </div>
    </div>
  );
}

export default GiveReviews;
