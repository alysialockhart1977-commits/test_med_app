import React, { useState } from 'react';

const AppointmentFormIC = ({ doctorName, doctorSpeciality, onSubmit }) => {
    // State for form fields
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [appointmentDate, setAppointment] = useState('');
    const [timeSlot, setTimeSlot] = useState('');

    // State for error message
    const [error, setError] = useState('');

    // Get today's date in YYY-MM-DD format for min date validation
    const today = new Date().toISOString().split("T")[0];

    // Function to handle form submision
    const handleFormSubmit = (e) => {
      e.preventDefault();

      // Clear previous error
      setError("");

      // Validate name
      if (name.trim() === "") {
        setError("Please enter your name.");
        return;
      }

      // Validate phone number (exactly 10 digits)
      if (!/^\d{10}$/.test(phoneNumber)) {
        setError("Phone number must be exactly 10 digits.");
        return;
    }

    // Validate appointment date 
    if (!appointmentDate) {
        setError("Please select an appointment date.")
        return;
    }
    if (appointmentDate < today) {
        setError("Please select today or a future date.");
        return;
    }

    // Validate time slot
    if (!timeSlot) {
     setError("Please select a time slot.");
     return;   
    }
    
    // If all validations pass, send form data to parent component
      onSubmit({ 
        name, phoneNumber, appointmentDate, timeSlot
    });

      // Reset form fields after successful submission
      setName('');
      setPhoneNumber('');
      setAppointmentDate('');
      setTimeSlot('');
    };
    return (
      <form onSubmit={handleFormSubmit} className="appointment-form">
        {/* Display validation error message */}
        {error && (
            <div style={{ color: "red", marginBotton: "10px", textAlign: "center" }}>
            {error}
            </div>
        )}

        {/* Name field */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
             required
          />
          </div>

          {/* Phone number field */}
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => 
                setPhoneNumber(e.target.value.replace(/\D/g, "").slice(0, 10))
            }
            placeholder="Enter your pnone number"
            required
            inputMode="numeric"
            pattern="[0-9]{10}"
            maxLength={10}
            title="Phone number must be exactly 10 digits"
          />
        </div>

        {/* Appointment date field */}
        <div className="form-group">
            <label htmlFor="appointmentDate">Date of Appointment:</label>
            <input
            type="date"
            id="appointmentDate"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            min={today}
            required
            />
            </div>

            {/* Time slot selection field */}
            <div className="form-group">
                <label htmlFor="timeSlot">Book Time Slot:</label>
                <select
                id="timeSlot"
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                required
        >
            <option value="">Select a time slot</option>
            <option value="09:00 AM">09:00 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="02:00 PM">02:00 PM</option>
            <option value="03:00 PM">03:00 PM</option>
            <option value="04:00 PM">04:00 PM</option>
            </select>
        </div>

    {/* Submit button */}
  <button type="submit">Book Now</button>
      </form>
    );
  };

export default AppointmentFormIC;
