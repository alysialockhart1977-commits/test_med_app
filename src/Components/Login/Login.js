// Following code has been commented with appropriate comments for your reference.
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../config";
import "./Login.css";

function Login() {
  // State variables for email and password
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // Get navigation function from react-router-dom
  const navigate = useNavigate();

  // Check if user is already authenticated, then redirect to home page
  useEffect(() => {
    if (sessionStorage.getItem("auth-token")) {
      navigate("/");
    }
  }, [navigate]);

  // Function to handle login form submission
  const login = async (e) => {
    e.preventDefault();

    const res = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const json = await res.json();

    if (json.authtoken) {
      sessionStorage.setItem("auth-token", json.authtoken);
      sessionStorage.setItem("email", email);

      navigate("/");
      window.location.reload();
    } else {
      if (json.errors?.length) alert(json.errors[0].msg);
      else alert(json.error || "Login failed.");
        
      }
    };
  

  return (
    <div className="container">
      <div className="login-grid">
        <div className="login-text">
          <h2>Login</h2>
        </div>

        <div className="login-text">
          Are you a new member?{" "}
          <span>
            <Link to="/signup" style={{ color: "#2190FF" }}>
              Sign Up Here
            </Link>
          </span>
        </div>

        <div className="login-form">
          <form onSubmit={login}>
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
              />
            </div>

            {/* Login = blue, Reset = red */}
            <div className="btn-group">
              <button
                type="submit"
                className="btn btn-primary"
              >
                Login
              </button>
              <button type="reset" className="btn btn-danger">
                Reset
              </button>
            </div>

            <div className="login-text">Forgot Password?</div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

