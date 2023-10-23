import React from "react";
import {
  FaBookOpen,
  FaChartArea,
  FaChevronRight,
  FaListAlt,
  FaRegCalendarAlt,
  FaRegChartBar,
  FaRegSun,
  FaStickyNote,
  FaTable,
  FaTachometerAlt,
  FaWrench,
} from "react-icons/fa";
import "../Css/SideBar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1 className="sidebar-title">MrEngineer</h1>
      </div>
      <div className="sidebar-section">
        <p className="sidebar-text">CORE</p>
        <div className="sidebar-subsection">
          <FaTachometerAlt className="sidebar-icon" />
          <p className="sidebar-text">Dashboard</p>
        </div>
      </div>
      <div className="sidebar-section">
        <p className="sidebar-text">INTERFACE</p>
        <div className="sidebar-subsection">
          <div className="sidebar-subsection-link">
            <div className="sidebar-subsection">
              <FaListAlt className="sidebar-icon" />
              <p className="sidebar-text">Layouts</p>
            </div>
            <FaChevronRight className="sidebar-chevron" />
          </div>
        </div>
        <div className="sidebar-subsection">
          <div className="sidebar-subsection-link">
            <div className="sidebar-subsection">
              <FaBookOpen className="sidebar-icon" />
              <p className="sidebar-text">Pages</p>
            </div>
            <FaChevronRight className="sidebar-chevron" />
          </div>
        </div>
      </div>
      <div className="sidebar-section">
        <p className="sidebar-text">ADDONS</p>
        <div className="sidebar-subsection-link">
          <div className="sidebar-subsection">
            <FaChartArea className="sidebar-icon" />
            <p className="sidebar-text">
              <a className="sidebar-subsection-link" href="/charts">
                Charts
              </a>
            </p>
          </div>
        </div>
        <div className="sidebar-subsection-link">
          <div className="sidebar-subsection">
            <FaTable className="sidebar-icon" />
            <p className="sidebar-text">
              <a className="sidebar-subsection-link" href="/tables">
                Tables
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
