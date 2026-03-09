// Following code has been commented with appropriate comments for your reference.
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Notification.css';

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

  // Load stored Login, doctor, and appointment details on first render
  useEffect(() => {
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    const storedAppointmetData = JSON.parse(
        localStorage.getItem(storedDoctorData?.name)
    );

    // If user is Logged in update state
    if (storedUsername) {
        setIsLoggedIn(true);    
    }  
    
    if (storedDoctorData) {
        setDoctorData(storedDoctorData);
    }

    if (storedAppointmentData) {
        setAppointmentData(storedAppointmentData);
        setShowNotification(true);
    }
}, []);

// Listen for booking event and show notification immediately
useEffect(() => {
    const handleBooked = () => {
        const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
        const storedAppointmentData = JSON.parse(
            localStorage.getItem(storedDoctorData?.name)
        );

        if (storedDoctorDate) {
            setDoctorDate(storedDoctorData);
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

// Listen for cancelation event and hide notification
useEffect(() => {
    const handleCancel = () => {
        setShowNotification(false);
        setAppointmentData(null);
    };

    window.addEventListener('appointmentCancelled', handleCancel);

    return () => {
        window.removeEventListener('appointmentCancelled', handleCancel);
    };
}; []);

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

