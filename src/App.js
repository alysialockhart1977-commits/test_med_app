// Import React
import React from "react";

// Import CSS
import "./App.css";

// Import routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import components
import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./Components/Landing_Page/LandingPage";
import Login from "./Components/Login/Login";
import Sign_Up from "./Components/Sign_Up/Sign_Up";

// Temporary page
const Appointments = () => <h1>Appointments Page</h1>;

function App() {
  return (
    <BrowserRouter>
      {/* Navbar appears at top of every page */}
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Sign_Up />} />
        <Route path="/appointments" element={<Appointments />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;