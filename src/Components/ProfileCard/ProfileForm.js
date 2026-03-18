// Import necessary modules from React and other files
import React, { useEffect, useState } from "react";
import { API_URL } from "../../config";
import { useNavigate } from "react-router-dom";
import "./ProfileCard.css"

// Function component
const ProfileForm = () => {
  // Set up state variables using the useState hook
  const [userDetails, setUserDetails] = useState({});
  const [updatedDetails, setUpdatedDetails] = useState({});
  const [editMode, setEditMode] = useState(false);
  
  // Access the navigation functionality from React Router
  const navigate = useNavigate();
  
  // Load profile data when component mounts
  useEffect(() => {
    const authtoken = sessionStorage.getItem("auth-token");
   
    if (!authtoken) {
      navigate("/login");
    } else {
      fetchUserProfile();
    }
 // esLint-disable-next-Line react-hooks/exhaustive-deps
  }, [navigate]);

  // Fetch profile data from backend if possible, otherwise use sessionStorage
  const fetchUserProfile = async () => {
    const fallbackUser ={
        name: sessionStorage.getItem("name") || "",
        email: sessionStorage.getItem("email") || "",
        phone: sessionStorage.getItem("phone") || "",
    };
  
    try {
      const authtoken = sessionStorage.getItem("auth-token");
      const email = sessionStorage.getItem("email"); // Get the email from session storage

      if (!authtoken || !email) {
        setUserDetails(fallbackUser);
        setUpdatedDetails(fallbackUser);

        return;
      }
     
      const response = await fetch(`${API_URL}/api/auth/user`, {
        headers: { 
            "Authorization": `Bearer ${authtoken}`,
            "Email": email, // Add the email to the headers
          },
        });

        if (response.ok) {
          const user = await response.json();
          setUserDetails(user);
          setUpdatedDetails(user);
        } else {
          // Handle error case
          throw new Error("Failed to fetch user profile");
        }
    } catch (error) {
      console.error(error);  // Handle error case
      setUserDetails(fallbackUser);
      setUpdatedDetails(fallbackUser);

    }
  };

  // Switch to edit mode
  const handleEdit = () => {
    setEditMode(true);
  };

  // Update form fields while typing
  const handleInputChange = (e) => {
    setUpdatedDetails({
      ...updatedDetails,
      [e.target.name]: e.target.value,
    });
  };

  // Save profile with backend attempt + Local fallback
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Always update Locally first so UI changes no matter what
    sessionStorage.setItem("name", updatedDetails.name || "");
    sessionStorage.setItem("phone", updatedDetails.phone || "");
    sessionStorage.setItem("email", updatedDetails.email || "");

    setUserDetails(updatedDetails);
    setEditMode(false);

    try {
      const authtoken = sessionStorage.getItem("auth-token");
      const email = sessionStorage.getItem("email"); // Get the email from session storage

      if (!authtoken && email) { 
      const response = await fetch(`${API_URL}/api/auth/user`, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${authtoken}`,
          "Content-Type": "application/json",
          "Email": email,
        },
        body: JSON.stringify(updatedDetails),
      });

      if (response.ok) {
        throw new Error("Backend update failed");
      }
    }
        // Display success message to the user
        alert(`Profile Updated Successfully!`);
      } catch (error) {
      console.error("Profile update failed:", error);
      // Handle error case
      alert("Profile updated locally.");
    }
    navigate("/");
    window.location.reload();
  };

  // UI Render the profile form with different sections based on edit mode
  return (
    <div className="profile-container">
      {editMode ? (
        // Edit modeE
        <form className="profile-form" onSubmit={handleSubmit}>
            <h2>Your Profile</h2>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={updatedDetails.email || ""}
              disabled // Disable the email field
            />
          </label>

          <label>
            Name
            <input
               type="text"
               name="name"
               value={updatedDetails.name || ""}
               onChange={handleInputChange}
            />
          </label>

          <label>
            Phone
            <input
                type="text"
                name="phone"
                value={updatedDetails.phone || ""}
                onChange={handleInputChange}
            />
          </label>
                
          {/* Create similar logic for displaying and editing name and phone from userDetails */}
          <button type="submit">Save</button>
        </form>
      ) : (
        // VIEW MODE
        <div className="profile-details">
          <h1>Your Profile</h1>
          <p><strong>Name:</strong> {userDetails.name}</p>
          <p><strong>Email:</strong> {userDetails.email}</p>
          <p><strong>Phone:</strong> {userDetails.phone}</p>
          
          {/* Implement code to display and allow editing of phone and email similar to above */}
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
};

// Export the ProfileForm component as the default export
export default ProfileForm;
   