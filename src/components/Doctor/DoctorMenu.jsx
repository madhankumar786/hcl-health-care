import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
const DoctorMenu = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar with linked navigation */}
      <aside className="sidebar">
        <h3>Bayer Health</h3>
        <ul>
          <li>
            <NavLink
              to="/doctor-dashboard"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/doctor-dashboard/patients"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Patient List
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/doctor-dashboard/appointments"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Appointments
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/doctor-dashboard/messages"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Messages
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/logout"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Logout
            </NavLink>
          </li> */}
        </ul>
      </aside>
      <div style={{ margin: "10px" }}>
        <Outlet />
      </div>

      {/* Define Routes to render the correct components */}
    </div>
  );
};

export default DoctorMenu;
