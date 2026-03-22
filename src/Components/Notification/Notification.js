// Following code has been commented with appropriate comments for your reference.
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Notification.css';

// Function component Notification to display user notifications
const Notification = ({ children }) => {
  // State variables to manage user authentication, username, doctor data, and appointment data
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);

  // Load stored appointment details when component first renders
  useEffect(() => {
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    
    const storedAppointmentData = storedDoctorData
    ? JSON.parse(localStorage.getItem(storedDoctorData.name))
    : null; // Prevents undefined lookups
    
    // If user is Logged in update state
    if (storedUsername) {
        setIsLoggedIn(true);   
    }  
    
    if (storedDoctorData) {
        setDoctorData(storedDoctorData)
    }

    if (storedAppointmentData) {
        setAppointmentData(storedAppointmentData);
        setShowNotification(true);
    }
}, []);

// Show notification immediately after booking
useEffect(() => {
    const handleBooked = () => {
        const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
        const storedAppointmentData = storedDoctorData
           ? JSON.parse(localStorage.getItem(storedDoctorData.name))
           : null;

        if (storedDoctorData) {
            setDoctorData(storedDoctorData);
        }

        if (storedAppointmentData) {
            setAppointmentData(storedAppointmentData);
            setShowNotification(true);
        }
    };

    window.addEventListener('appointmentBooked', handleBooked);

    return () => {
        window.removeEventListener('appointmentBooked', handleBooked);
    };
}, []);

// Hide notification after cancellation
useEffect(() => {
    const handleCancel = () => {
        setShowNotification(false);
        setAppointmentData(null);
    };

    window.addEventListener('appointmentCancelled', handleCancel);

    return () => {
        window.removeEventListener('appointmentCancelled', handleCancel);
    };
}, []);

return (
    <div>
        {/* Render Navbar component */}
        <Navbar />

        {/* Render child components */}
        {children}

        {/* Display appoinment details if user is Logged in and appoinmentData is available */}
        {isLoggedIn && showNotification && appointmentData && (
        <div className="notification-container">
          <div className="notification-card">
            <h2>Appointment Details</h2>

            <p><strong>Doctor:</strong> {doctorData?.name}</p>
            <p><strong>Speciality:</strong> {doctorData?.speciality}</p>
            <p><strong>Name:</strong> {appointmentData?.name}</p>
            <p><strong>Phone Number:</strong> {appointmentData?.phoneNumber}</p>
            <p><strong>Date of Appointment:</strong> {appointmentData?.appointmentDate}</p>
            <p><strong>Time Slot:</strong> {appointmentData?.timeSlot}</p>
          </div>
         </div>
        )}
        </div>
   );
};

// Export Notification component for use in other parts of the application
export default Notification;

