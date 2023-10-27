import React, { useState } from "react";
import { FaEnvelope, FaRegBell, FaSearch } from "react-icons/fa";
import profile from "../../components/Images/ReviewsImage/honey.jpeg";
import "../Css/DashBoardView.css";
import Sidebar from "./Sidebar";

const Dashboardview = () => {
  const [open, setOpen] = useState(false);

  const showDropDown = () => {
    setOpen(!open);
  };

  return (
    <div className=" bg-dashboard " style={{ display: "flex" }}>
      <div className="input-container">
        <input
          tupe="text"
          className="search-input"
          placeholder="Search for..."
        />
        <div className="search-button">
          <FaSearch color="white" />
        </div>
      </div>
      <div
        className="bell-envelope-container"
        onClick={showDropDown}
        style={{ marginLeft: "auto" }}
      >
        <div className="bell-envelope-container">
          <FaRegBell />
          <FaEnvelope />
        </div>
        <div className="profile-info">
          <p>Honey Kumar</p>
          <div className="profile-image-container">
            <img src={profile} alt="Image" className="profile-image" />
          </div>
          {open && (
            <div className="dropdown" style={{ backgroundColor: "black" }}>
              <p className="cursor-pointer hover:text-blue font-semibold">
                Profile
              </p>
              <p className="cursor-pointer hover:text-[blue] font-semibold">
                Settings
              </p>
              <p className="cursor-pointer hover:text-[blue] font-semibold">
                Logout
              </p>
            </div>
          )}
        </div>
      </div>
      {/* <Sidebar /> */}
    </div>
  );
};

export default Dashboardview;
