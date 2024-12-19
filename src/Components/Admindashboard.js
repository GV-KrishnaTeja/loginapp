import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import './AdminDashboard.css'; // Assuming you create this CSS file

const Admindashboard = () => {
  const navigate = useNavigate();

  // Check if user is logged in and has the correct role
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const role = localStorage.getItem("role");

    if (!isLoggedIn || role !== "1") {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");
    navigate("/", { replace: true });
  };

    // // Get user data (example: username and image URL)
    // const userName = localStorage.getItem("username") || "Admin";
    // const userImage = localStorage.getItem("userImage") || "/default-profile.jpg"; // Replace with a default profile image if not available.
  

  return (
    <div className="admin-dashboard">

           {/* Navbar
           <nav className="navbar">
        <div className="navbar-content">
          <div className="user-info">
            <img src={userImage} alt="User" className="user-image" />
            <span className="user-name">{userName}</span>
          </div>
        </div>
      </nav> */}




      <div className="sidebar">
        <h2>Admin Dashboard</h2>
        <ul>
          <li>
            <Link to="">Home</Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
        <div className="logout-section">
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </div>

      <div className="main-content">
        <h1>Welcome to Admin Dashboard</h1>
        {/* Add your main dashboard content here */}
      </div>
    </div>
  );
};

export default Admindashboard;
