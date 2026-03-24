// Import React
import React from "react";
import"./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";



// Import InstantConsultation.js
import InstantConsultation from "./Components/InstantConsultation/InstantConsultation";

// Import ReviewFormApp.js
import ReviewFormApp from "./Components/ReviewForm/ReviewFormApp";

// Import ProfileForm.js
import ProfileForm from "./Components/ProfileCard/ProfileForm";

// Import ReportsLayout.js
import ReportsLayout from "./Components/ReportsLayout/ReportsLayout";

// Import components
import LandingPage from "./Components/Landing_Page/LandingPage";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Sign_Up/Sign_Up";
import Notification from "./Components/Notification/Notification";

// Temporary page
const Appointments = () => <h1>Appointments Page</h1>;

function App() {
  return (
    <BrowserRouter>

      {/* Notification wrapper */}
      <Notification>
  
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/instant-consultation" element={<InstantConsultation />} />
        <Route path="/reviews" element={<ReviewFormApp />} />
        <Route path="/profile" element={<ProfileForm />} />
        <Route path="/reports" element={<ReportsLayout />} />
      </Routes>
    </Notification>
  </BrowserRouter>
 );

}

export default App;