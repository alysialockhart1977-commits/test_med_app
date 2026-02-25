// Import React
import React from "react";

// Import CSS
import "./App.css";

// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Navbar
import Navbar from './Components/Navbar/Navbar';  // adjust path if needed
import LandingPage from './Components/Landing_Page/LandingPage';
import Login from './Components/Login/Login';
import SignUp from './Components/Sign_Up/Sign_Up';
const Appointments = () => <h1>Appointments Page</h1>;

function App() {
  return (
    <BrowserRouter>
      <Navbar />  {/* Navation Bar visible on all pages */}
      <Routes>
        {/* Your Route components */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/appointments" element={<Appointments />} />
        
      </Routes>
    </BrowserRouter>
  );
}
// Export the App component as the default export
export default App;