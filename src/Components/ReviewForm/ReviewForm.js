import React, { useState } from "react";
import "./ReviewForm.css";
import GiveReviews from "./GiveReviews";

const ReviewForm = () => {
    // Sample consultation data with review status/message
    const [reviews, setReviews] = useState([
        {
        id: 1,
        doctorName: "Dr. John Doe",
        speciality: "Cardiology",
        reviewGiven: false,
        reviewMessage: "",
        },
        {
        id: 2,
        doctorName: "Dr. Jane Smith",
        speciality: "Dermatology",
        reviewGiven: false,
        reviewMessage: "",
        },
    ]);

    // Track which doctor form is open
    const [selectedDoctorId, setSelectedDoctorId] = useState(null);

    // Open feedback form for selected doctor
    const handleFeedbackClick = (doctorId) => {
        setSelectedDoctorId(selectedDoctorId);
    };

    // Close review form
    const closeForm = () => {
        setSelectedDoctorId(null);
    };

    // Save submitted into the correct row
    const handleReviewSubmit = (doctorId, submittedData) => {
        const updatedReviews = reviews.map((review) =>
        review.id === doctorId
        ? {
            ...review,
            reviewGiven: true,
            reviewMessage: "Review Submitted",
            submittedReview: submittedData,
        }
        : review
    );

    setReviews(updatedReviews);
    setSelectedDoctorId(null);
  };

     return (
      <div className="review-container">
        <h2>Reviews</h2>

        <table className="review-table">
            <thead>
                <tr>
                    <th>Serial Number</th>
                    <th>Doctor Name</th>
                    <th>Doctor Speciality</th>
                    <th>Provide feedback</th>
                    <th>Review Given</th>
                </tr>
            </thead>

            <tbody>
             {reviews.map((review) => (
                <tr key={review.id}>
                    <td>{review.id}</td>
                    <td>{review.doctorName}</td>
                    <td>{review.speciality}</td>

                    <td>
                        <button
                        className="feedback-btn"
                        onClick={() => handleFeedbackClick(review.id)}
                        disabled={review.reviewGiven}
                        >
                            {review.reviewGiven ? "Submitted" : "Click Here"}
                        </button>
                    </td>

                    <td classNumber="review-given-cell">
                        {review.reviewMessage}
                    </td>
                </tr>
             ))}
             </tbody>
             </table>

             {/* Show review form when button clicked */}
             {selectedDoctorId && (
                <GiveReviews
                doctor={reviews.find((review) => review.id === selectedDoctorId)}
                onClose={closeForm}
                onSubmitReview={handleReviewSubmit}
                />
             )}
             </div> 
    );
};

export default ReviewForm;
            
