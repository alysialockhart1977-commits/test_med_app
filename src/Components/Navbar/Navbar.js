import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [welcomeName, setWelcomeName] = useState("");

  // Run once on load + whenever storage changes (same tab updates handled below too)
  useEffect(() => {
    const token = sessionStorage.getItem("auth-token");
    const email = sessionStorage.getItem("email") || "";

    setIsLoggedIn(!!token);

    // Extract name from email before @ (fallback to sessionStorage "name" if you prefer)
    if (email.includes("@")) {
      setWelcomeName(email.split("@")[0]);
    } else {
      // fallback if email not present
      const storedName = sessionStorage.getItem("name") || "";
      setWelcomeName(storedName);
    }
  }, []);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLogout = () => {
    sessionStorage.clear();         // remove token + name + email + phone
    setIsLoggedIn(false);
    setWelcomeName("");
    navigate("/login");             // or navigate("/")
  };

  return (
    <div className="navbar">
      <nav>
        {/* Logo */}
        <div className="nav__logo">
          <Link to="/" style={{ textDecoration: "none" }}>
            StayHealthy
          </Link>
          <span>.</span>
        </div>

        {/* Mobile icon */}
        <div className="nav__icon" onClick={handleClick}>
          <i className="fa fa-bars" />
        </div>

        {/* Links */}
        <ul className={`nav__links ${isOpen ? "active" : ""}`}>
          <li className="link">
            <Link to="/">Home</Link>
          </li>

          <li className="link">
            <Link to="/appointments">Appointments</Link>
          </li>

          {/* If NOT logged in -> show Sign Up + Login */}
          {!isLoggedIn && (
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

          {/* If logged in -> show Welcome + Logout */}
          {isLoggedIn && (
            <>
              <li className="link" style={{ fontWeight: 600 }}>
                Welcome, {welcomeName}
              </li>

              <li className="link">
                <button className="btn1" type="button" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;