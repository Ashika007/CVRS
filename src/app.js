import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login/login.js";
import Dashboard from "./pages/dashboard/dashboard.js";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default route for Login */}
        <Route path="/" element={<Login />} />
        {/* Route for Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
