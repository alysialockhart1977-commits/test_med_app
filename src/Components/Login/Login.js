import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
    return (
    <div className="container">
        {/* Login grid layout */}
        <div className="login-grid">

            {/* Title */}
            <div className="login-text">
            <h2>Login Page</h2>
            </div>

            {/* Link to Sign Up */}
            <div className="login-text">
                Are you a new member?{" "}
                <span>
                    <Link to="/signup" style={{ color: "#2190FF" }}>
                        Sign Up Here
                        </Link>
                        </span>
                        </div>

            <br />

            {/* Login form */}
            <div className="login-form">
                <form>

            {/* Email */}
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                type="email" name="email" id="email"
                className="form-control" placeholder="Enter your email" aria-describedby="helpId"/>
                </div>

                {/* Password */}
                <div className="form-group">
                    <label htmmlFor="password">Password</label>
                    <input
                    type="password" name="password" id="password" className="form-control" placeholder="Enter your password" aria-describedby="helpId"
                    />
                    </div>

                    {/* Buttons */}
                    <div className="btn-group">
                        <button
                        type="submit"
                        className="btn btn-primary mb-2 mr-1 waves-effect waves-light">
                            Login
                            </button>

                            <button
                            type="reset"
                            className="btn btn-danger mb-2 waves-effect waves-light">
                                Reset
                                </button>
                                </div>

                                <br />

                                {/* Forgot Password */}
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