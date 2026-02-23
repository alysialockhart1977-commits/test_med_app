// Import React
import React from "react";

// Import CSS
import "./App.css";

// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Navbar
import Navbar from './components/Navbar';  // adjust path if needed
import Landing_Page from './components/Landing_Page';
import Login from './components/Login';
import Sign_Up from './components/Sign_Up';


function App() {
  return (
    <BrowserRouter>
      <Navbar />  {/* Navation Bar visible on all pages */}
      <Routes>
        {/* Your Route components */}
        <Route path="/" element={<Landing_Page />} />
        <Route path="/" element={<Navbar />} />
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Sign_Up />} />
        
      </Routes>
    </BrowserRouter>
  );
}
// Export the App component as the default export
export default App;