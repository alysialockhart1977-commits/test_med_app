import React from "react";
import { Link } from "react-router-dom";
import "./ProfileCard.css";

const ProfileCard = () => {
    return (
        <div className="profile-card">
            {/* Profile option */}
            <Link to="/profile" className="profile-menu-item">
              Your Profile
              </Link>
                
            {/* Reports option */}
            <Link to="/reports" className="profile-menu-item">
                Your Reports
                </Link>
        </div>
    );
};

export default ProfileCard;