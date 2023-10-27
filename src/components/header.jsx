import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import JobApplicationForm from "./JobApplicationform";
import LOGO from "./Images/AIMHS.png";
import "../App.css";
import SearchJob from "./SearchJob";
import { useAuth } from "./Authentication/AuthContext";
import "./css/Header.css";

function Header() {
  const { user, logout, employer, employerLogout } = useAuth();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };
  // console.log(employer, "emp");

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeJobPostModal = () => {
    setIsFormOpen(false);
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Do you want to logout?");
    if (confirmLogout) {
      logout();
      employerLogout();
    }
  };
  return (
    <header className="header" style={{ width: "100%" }}>
      <div className="header-1">
        <a href="#" className="logo">
          <img src={LOGO} alt="AIMHS Logo" />
        </a>

        <div className="icons">
          {user || employer ? (
            <>
              <p
                style={{
                  textDecoration: "none",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                Welcome , {user?.username || employer?.username}
              </p>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <a
              href="#"
              style={{
                textDecoration: "none",
                fontSize: "1.5rem",
                fontWeight: "bold",
                width: "100%",
              }}
              onClick={toggleForm}
            >
              Looking For Job
            </a>
          )}
        </div>
        <button className="menu-icon" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </button>
        <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
          <a href="#joblist">Jobs</a>
          <a href="#database">Database</a>
          <a href="#salesEnquiry">Sales Enquiry</a>
          <a href="#reviews">Reviews</a>
          <a href="#blog">Blog</a>
        </nav>
      </div>

      <div className="header-2">{/* Content for header-2 */}</div>

      {isFormOpen && <JobApplicationForm onClose={closeJobPostModal} />}
    </header>
  );
}

export default Header;
