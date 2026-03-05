import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { API_URL } from "../../config";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showerr, setShowerr] = useState("");

  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();

    const response = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const json = await response.json();

    if (json.authtoken) {

      // THESE LINES MAKE THE NAVBAR CHANGE
      sessionStorage.setItem("auth-token", json.authtoken);
      sessionStorage.setItem("email", email);

      navigate("/");
      window.location.reload();

    } else {
      setShowerr(json.error || "Invalid login credentials");
    }
  };

  return (
    <div className="container">

      <div className="login-grid">

        <div className="login-text">
          <h2>Login Page</h2>
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

          <form onSubmit={loginUser}>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                required
                className="form-control"
                placeholder="Enter your email"
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
                required
                className="form-control"
                placeholder="Enter your password"
                minLength={8}
              />
            </div>

            {showerr && (
              <div style={{ color: "red", marginTop: "10px" }}>
                {showerr}
              </div>
            )}

            <div className="btn-group">
              <button
                type="submit"
                className="btn btn-primary mb-2 mr-1 waves-effect waves-light"
              >
                Login
              </button>

              <button
                type="reset"
                className="btn btn-danger mb-2 waves-effect waves-light"
              >
                Reset
              </button>
            </div>

            <div className="login-text">
              Forgot Password?
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;