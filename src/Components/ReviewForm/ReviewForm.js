// Import React and useState hook
import React, { useState } from "react";

// Import Css file for styling
import "./ReviewForm.css";

// Import the GiveReviews component which contains the feedback form
import GiveReviews from "./GiveReviews";

// Function component to display the Reviews page
const ReviewForm = () => {
   
    // Sample consultation data with review status/message
    const [reviews, setReviews] = useState([
        {
        id: 1,
        doctorName: "Dr. John Doe",
        speciality: "Cardiology",
        appointmentDate: "2026-03-10",
        reviewGiven: false,
        reviewMessage: "",
        },
        {
        id: 2,
        doctorName: "Dr. Jane Smith",
        speciality: "Dermatology",
        appointmentDate: "2026-03-12",
        reviewGiven: false,
        reviewMessage: "",
        },
        {
        id: 3, 
        doctorName: "Dr. Jio Yang",
        speciality: "General Practioner",
        appointmentDate: "2026-04-03",
        reviewGiven: false,
        reviewMessage: "",
        },
        {
        id: 4,
        doctorName: "Dr. Ramond Steel",
        speciality: "Chiropractor",
        appointmentDate: "2026-04-18",
        reviewGiven: false,
        reviewMessage: "",
        },
        {
        id: 4,
        doctorName: "Dr. Jio Yang",
        speciality: "General Practioner",
        appointmentDate: "2026-04-30",
        reviewGiven: false,
        reviewMessage: "",
        }
    ]);

    // Track which doctor review form is currently open
    const [selectedDoctorId, setSelectedDoctorId] = useState(null);

    // Function triggered when the "Click Here" button is pressed
    // Open feedback/review form for selected doctor
    const handleFeedbackClick = (doctorId) => {
        setSelectedDoctorId(doctorId);
    };

    // Function to receive submitted review data from GiveReviews component
    const handleReviewSubmit = (doctorId, formData) => {

        // Update the review list by marking the review as submitted
        const updatedReviews = reviews.map((review) => {
        if (review.id === doctorId) {
            return {
            ...review,
            reviewGiven: true,                      // Mark review as submitted
            reviewMessage: formData.review          // Store the review text    
        };
    }
    return review;
 });

 // Update the reviews state    
 setReviews(updatedReviews);

 // Close the review form and return to reviews pate
 setSelectedDoctorId(null);
};

// Find the doctor whose review form should currently be displayed
  const selectedDoctor = reviews.find(
    (review) => review.id === selectedDoctorId
  );

     return (
      <div className="review-container">

        {/* Display the Reviews table only when the form is not open */}
        {!selectedDoctor && (
            <>
            {/* Page Title */}
            <h2 className="review-title">Reviews</h2>
     
            {/* Reviews Table */}
            <table className="review-table">

            <thead>
                <tr>
                    <th>Serial Number</th>
                    <th>Doctor Name</th>
                    <th>Doctor Speciality</th>
                    <th>Appointment Date</th>
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
                    <td>{review.appointmentDate}</td>

                    {/* Feedback Button */}
                    <td>
                        <button
                        className="feedback-btn"
                        onClick={() => handleFeedbackClick(review.id)}
                            disabled={review.reviewGiven}
                        >
                            {review.reviewGiven ? "Submitted" : "Click Here"}
                        </button>
                    </td>

                    {/* Display sumbitted review message */}
                    <td classNumber="review-given-cell">
                        {review.reviewGiven ? review.reviewMessage : ""}                  
                    </td>                             
                   </tr>
                 ))}
            </tbody>
         </table>
         </>
        )}
        {/* Display the GiveReviews form when a doctor is selected */}
        {selectedDoctor && (
            <GiveReviews
            doctor={selectedDoctor}
            onSubmitReview={handleReviewSubmit}
            />
        )}
      </div>

    );
};

export default ReviewForm;
            
