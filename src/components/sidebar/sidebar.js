// Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/create-account">Create New Account</Link>
        </li>
        <li>
          <Link to="/update-account">Update Account</Link>
        </li>
        <li>
          <Link to="/delete-account">Delete Account</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
