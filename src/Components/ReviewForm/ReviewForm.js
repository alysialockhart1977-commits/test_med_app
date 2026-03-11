import React from "react";
import "./ReviewForm.css";
import GiveReviews from "./GiveReviews";

const ReviewForm = () => {

    const [selectedDoctor, setSelectedDoctor] = useState(null);

    // Sample consultation data
    const reviews = [
        {
        id: 1,
        doctorName: "Dr. John Doe",
        speciality: "Cardiology",
        },
        {
        id: 2,
        doctorName: "Dr. Jane Smith",
        speciality: "Dermatology",
        }
    ];

    // Function to handle button click
    const handleFeedbackClick = (doctorName) => {
        setSelectedDoctor(doctorName);
    };

    const closeForm = () => {
        setSelectedDoctor(null);
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
                        onClick={() => handleFeedbackClick(review.doctorName)}
                        >
                            Click Here
                        </button>
                    </td>

                    <td></td>
                </tr>
             ))}

             </tbody>

             </table>

             {/* Show review form when button clicked */}

             {selectedDoctor $$ (
                <GiveReviews
                doctorName={selectedDoctor}
                onClose={closeForm}
                />

             )

             </div> 
    );
};

export default ReviewForm;
            
