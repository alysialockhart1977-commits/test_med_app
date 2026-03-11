import React from "react";
import "./ReviewForm.css";

const ReviewForm = () => {
    // Sample consultation data
    const reviews = [
        {
        id: 1,
        doctorName: "Dr. John Doe",
        speciality: "Cardiology",
        reviewGiven: false,
        },
        {
        id: 2,
        doctorName: "Dr. Jane Smith",
        speciality: "Dermatology",
        reviewGiven: false,
        },
    ];

    // Function to handle button click
    const HandleFeedbackClick = (doctorName) => {
        alert('Open feedback form for &{doctorName}');
    };

    return (
      <div className="review-container">
        <h2>Reviews</h2>

        <table className="review-table">
            <thead>
                <tr>
                    <th>Serial Number</th>
                    <th>Doctor Name</th>
                    <th>Doctor speciality</th>
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
                        onClick={() => HandleFeedbackClick(review.doctorName)}
                        >
                            Click Here
                        </button>
                    </td>
                    <td>{review.reviewGiven ? "Yes" : ""}</td>
                </tr>
             ))}
             </tbody>
             </table>
             </div> 
    );
};

export default ReviewForm;
            
