// Import React and useState hook
import React, { useState } from "react";

//Import CSS for styling
import "./ReviewForm.css";

// Function component to display the review form
function GiveReviews({ doctor, onSubmitReview }) {

    // Store to display warning message if form fields are incomplete
    const [showWarning, setShowWarning] = useState(false);

    // Store form input values
    const [formData, setFormData] = useState({
        name: "",
        review: "",
        rating: 0
    });

    // Function to handle text input changes
    const handleChange = (e) => {
        setFormData({
          ...formData,
         [e.target.name]: e.target.value
    });
  }; 
  
  // Function to handle star rating selection
  const handleRatingClick = (value) => {
    setFormData({
        ...formData,
        rating: value
    });
};

// Submit logic for form submission
const handleSubmit = (e) => {

    // Prevent page refresh
    e.preventDefault();

    // Validate required fields
    if (!formData.name || !formData.review || formData.rating === 0) {
      setShowWarning(true);
      return;
    }

    // Hide warning if validation passes
    setShowWarning(false);

    // Send review data to parent component (ReviewForm)
    onSubmitReview(doctor.id, formData);

    // Reset the form fields
    setFormData({
        name: "",
        review: "",
        rating: 0
    });
};

return (
    <div className="review-form-page">

        <div className="review-form-card">

            {/* Form Title */}
            <h2 className="give-review-title">Give Your Review</h2>

            {/* Warning message */}
            {showWarning && (
                <p className="warning">Please fill out all fields.</p>
            )}

            {/* Review Form */}
            <form onSubmit={handleSubmit}>

                {/* Name Input */}
                <label htmlFor="name">Name:</label>
                <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                />

                {/* Review Input */}
                <label htmlFor="review">Review:</label>
                <textarea
                id="review"
                name="review"
                value={formData.review}
                onChange={handleChange}
                />

                {/* Rating Selector */}
                <label>Rating:</label>
                <div className="rating-stars">

                    {/* Create 5 clickable stars */}
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button
                           type="button"
                           key={star}
                           className={
                            star <= formData.rating
                            ? "star selected-star"
                            : "star"
                     }
                     onClick={() => handleRatingClick(star)}
                     >
                       ★
              </button>
            ))}

            </div>

            {/* Submit Button */}
            <button type="submit" className="submit=btn">
                Submit
            </button>

            </form>
         
           </div>

         </div>

        );
    }

    // Export the component
    export default GiveReviews;











      


    


        