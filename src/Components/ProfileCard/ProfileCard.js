import React from "react";
import { Link } from "react-router-dom";
import "./ProfileCard.css";

const ProfileCard = ({ userName, email, phone }) => {
    return (
        <div className="profile-card">
            <h3>Your Profile</h3>

            <div className="profile-info">
               <p><strong>Name:</strong> {userName}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Phone:</strong> {phone}</p>
            </div>

            <Link to="/profile" className="profile-link-btn">
                Open Profile
                </Link>
        </div>
    );
};

export default ProfileCard;