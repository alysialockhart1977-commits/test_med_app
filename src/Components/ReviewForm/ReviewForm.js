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
        submittedReview: null,
        },
        {
        id: 2,
        doctorName: "Dr. Jane Smith",
        speciality: "Dermatology",
        reviewGiven: false,
        reviewMessage: "",
        submittedReview: null,
        },
    ]);

    // Track which doctor is selected for review form
    const [selectedDoctorId, setSelectedDoctorId] = useState(null);

    // Open feedback form for selected doctor
    const handleFeedbackClick = (doctorId) => {
        setSelectedDoctorId(doctorId);
    };

    // Return to table view without submitting
    const handleBackToReviews = () => {
        setSelectedDoctorId(null);
    };

    // Save submitted review, disable button, return to table
    const handleReviewSubmit = (doctorId, submittedData) => {
        const updatedReviews = reviews.map((review) =>
        review.id === doctorId
        ? {
            ...review,
            reviewGiven: true,
            reviewMessage: submittedData.review,
            submittedReview: submittedData,
        }
        : review
    );

    setReviews(updatedReviews);
    setSelectedDoctorId(null);
  };

  const selectedDoctor = reviews.find(
    (review) => review.id === selectedDoctorId
  );
     return (
      <div className="review-container">
        {/* Table View */}
        {!selectedDoctor && (
            <>
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
                        {review.reviewGiven ? review.reviewMessage : ""}                  
                    </td>                             
                   </tr>
                 ))}
            </tbody>
         </table>
         </>
        )}
        {/* Form View */}
        {selectedDoctor && (
            <GiveReviews
            doctor={selectedDoctor}
            onSubmitReview={handleReviewSubmit}
            onBack={handleBackToReviews}
            />
        )}
      </div>

    );
};

export default ReviewForm;
            
