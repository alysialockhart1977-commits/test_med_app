// Following code has been commented with appropriate comments for your reference.
import React, { useState } from "react";
import "./Sign_Up.css";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../config";

// Function component for Sign Up form
const Sign_Up = () => {
  // State variables using useState hook
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showerr, setShowerr] = useState(""); // State to show error messages
  const navigate = useNavigate(); // Navigation hook from react-router

  // Function to handle form submission
  const register = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setShowerr("");

    // Basic client-side validation (optional but helpful)
    if (!/^\d{10}$/.test(phone)) {
      setShowerr("Phone number must be exactly 10 digits.");
      return;
    }
    if (password.length < 8) {
      setShowerr("Password must be at least 8 characters.");
      return;
    }

    // API Call to register user
    const response = await fetch(`${API_URL}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        phone: phone,
      }),
    });

    const json = await response.json(); // Parse the response JSON

    if (json.authtoken) {
      // Store user data in session storage
      sessionStorage.setItem("auth-token", json.authtoken);
      sessionStorage.setItem("name", name);
      sessionStorage.setItem("phone", phone);
      sessionStorage.setItem("email", email);

      // Redirect user to home page
      navigate("/");
      window.location.reload(); // Refresh the page
    } else {
      if (json.errors) {
        // show first error (or loop if you prefer)
        setShowerr(json.errors?.[0]?.msg || "Signup failed.");
      } else {
        setShowerr(json.error || "Signup failed.");
      }
    }
  };

  // JSX to render the Sign Up form
  return (
    <div className="container" style={{ marginTop: "5%" }}>
      <div className="signup-grid">
        <div className="signup-text">
          <h1>Sign Up</h1>
        </div>

        <div className="signup-text1" style={{ textAlign: "left" }}>
          Already a member?{" "}
          <span>
            <Link to="/login" style={{ color: "#2190FF" }}>
              Login
            </Link>
          </span>
        </div>

        <div className="signup-form">
          <form method="POST" onSubmit={register}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                id="name"
                className="form-control"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                value={phone}
                onChange={(e) =>
                  // keep only digits while typing
                  setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
                }
                type="tel"
                name="phone"
                id="phone"
                className="form-control"
                placeholder="Enter your phone number"
                required
                inputMode="numeric"
                pattern="[0-9]{10}"
                maxLength={10}
                title="Phone number must be exactly 10 digits" />
                </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                required
                minLength={8}
                title="Password must be at least 8 characters"
              />
            </div>

            {showerr && (
              <div className="err" style={{ color: "red", marginTop: "8px" }}>
                {showerr}
              </div>
            )}

            <div className="btn-group">
              <button
                type="submit"
                className="btn btn-primary mb-2 mr-1 waves-effect waves-light"
              onClick={() => {
                setName("");
                setPhone("");
                setEmail("");
                setPassword("");
                setShowerr("");
              }}
              >
                Reset
                </button>
              
            </div>
          </form>
        </div>
      </div>

      {/* Note: Sign up role is not stored in the database. Additional logic can be implemented for this based on your React code. */}
    </div>
  );
};

export default Sign_Up; // Export the Sign_Up component for use in other components
               
                