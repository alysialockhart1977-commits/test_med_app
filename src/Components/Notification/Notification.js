// Following code has been commented with appropriate comments for your reference.
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import ./Notification.css';

// Function component Notification to display user notifications
const Notification = ({ children }) => {
  // State variables to manage user authentication, username, doctor data, and appointment data
  // State to check if user is Logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // State to control when notification should appear
  const [showNotification, setShowNotification] = useState(false);
  
  // State to store doctor information
  const [doctorData, setDoctorData] = useState(null);

  // State to store appointment information
  const [appointmentData, setAppointmentData] = useState(null);

  // useEffect hook to perform side effects in the component
  useEffect(() => {
    // Retrieve stored username, doctor data, and appointment data from sessionStorage and localStorage
    // Get Logged in user
    const storedUsername = sessionStorage.getItem('email');
    // Retrieve doctor details
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    // Retrieve appointment data using doctor's name
    const storedAppointmentData = JSON.parse(localStorage.getItem(storedDoctorData?.name));

    // Set isLoggedIn state to true and update username if storedUsername exists
    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    // Set doctorData state if storedDoctorData exists
    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }

    // Set appointmentData state if storedAppointmentData exists
    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
      setShowNotification(true);
    }
  }, []); // Empty dependency array ensures useEffect runs only once after initial render

  // Listen for cancellation event and hide notification
  useEffect(() => {

    const handleCancel = () => {
        setShowNotification(false);
        setAppointmentData(null);
    };

    window.addEventListener("appointmentCancelled", handleCancel);

  // Return JSX elements to display Navbar, children components, and appointment details if user is logged in
  return (
    <div>
      {/* Render Navbar component */}
      <Navbar />
      {/* Render children components */}
      {children}
      {/* Display appointment details if user is logged in and appointmentData is available */}
      {isLoggedIn && showNotification && appointmentData && (
        <div className="notification-container">
        div className="notification-card">
        <h2>Appointment Details</h2>

        <p><strong>Doctor:</strong> {doctorData?.name}</p>
        <p>strong>Speciality:</strong> {doctorData?.speciality}</p>
        <p><strong>Name:</strong> {appointmentData?.name</p>
        <p><strong>Phone Number:</strong> {appointmentData?.phoneNumber}</p>
        <p><strong>Date of Appointment:</strong> {appointmentData?.appointmentDate}</p>
        <p><strong>Time Slot:</strong> {appointmentData?.timeSlot</p>

     </div>
     </div>
   }}
 </div>
);
};

// Export Notification component for use in other parts of the application
export default Notification;
