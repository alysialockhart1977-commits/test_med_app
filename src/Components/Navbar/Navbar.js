import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProfileCard from "../ProfileCard/ProfileCard";
import "./Navbar.css";

 
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // Create state for showing/hiding the dropdown
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const navigate = useNavigate();

  // Read user data from sessionStorage
  const authToken = sessionStorage.getItem("auth-token");
  const storedEmail = sessionStorage.getItem("email");
  const storedName = sessionStorage.getItem("name");
  const storedPhone = sessionStorage.getItem("phone");

  // Use stored name if available, otherwise derive it from email
  const username = useMemo()) => {
    if (storedName) return storedName;
    if (storedEmail) return storedEmail.split("@")[0];
 return "";
  }, [storedName, storedEmail]);

  // Toggle mobile menu
  const handleMenuToggle = () => {
    setIsOpen((prev) => !prev);
  };

  // Logout user
  const handleLogout = () => {
    sessionStorage.removeItem("auth-token");
    sessionStorage.rmoveItem("name");
    sessionStorage.removeItem("phone");
    sessionStorage.removeItem("email");

    navigate("/login");
    window.location.reload();
  };

  // Toggle profile dropdown
  const handleProfileToggle = () => {
    setShowProfileDropdown((prev) => !prev);
  };

  return (
     <div className="navbar">
      <nav>
        <div className="nav_logo">
          <Link to="/">
            StayHealthy
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="26"
              width="26"
              viewBox="0 0 1000 1000"
              style={{ fill: "#3685fb" }}
            >
              <title>Doctor With Stethoscope SVG icon</title>
              <g>
                <g>
                    <path d="M499.8,10c91.7,0,166,74.3,166,166c0,91.7-74.3,166-166,166c-91.7,0-166-74.3-166-166C333.8,84.3,408.1,10,499.8,10z" />
                  <path d="M499.8,522.8c71.2,0,129.1-58.7,129.1-129.1H370.6C370.6,464.1,428.6,522.8,499.8,522.8z" />
                  <path d="M693.2,395c-0.7,94.9-70.3,173.7-160.8,188.9v155.9c0,80.3-60.7,150.8-140.8,155.3c-83,4.7-152.7-58.9-157.6-139.7c-22-12.8-35.6-38.5-30.3-66.7c4.7-25.1,25.5-45.6,50.8-49.9c39.7-6.7,74.1,23.7,74.1,62.1c0,23-12.3,43-30.7,54.1c4.7,45.4,45.1,80.4,92.6,76c44.6-4,77.2-44...." />
                </g>
              </g>
            </svg>
          </Link>
          <span>.</span>
        </div>

        <div className="nav__icon" onClick={handleMenuToggle}>
          <i className="fa fa-times fa fa-bars"></i>
        </div>

        <ul className={`nav__links ${isOpen ? "active" : ""}`}>
          <li className="link">
            <Link to="/">Home</Link>
          </li>
          <li className="link">
            <Link to="/appointments">Appointments</Link>
          </li>

          {/* If logged in, show Welcome + Logout */}
          {authToken ? (
            <>
              <li className="link profile-menu">
                <span className="welcome-user" onClick={handleProfileToggle}>
                Welcome, {username}
                </span>

              {showProfileDropdown && (
                <div className="profile-dropdown">

                    {/* ProfileCard inside dropdown */}
                    <ProfileCard />
                    </div>
              )}
              </li>

              <li className="link">
                <button className="btn2" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="link">
               <Link to="/signup">
                  <button className="btn1">Sign Up</button>
                </Link>
              </li>

              <li className="link">
                <Link to="/login">
                  <button className="btn1">Login</button>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar; 