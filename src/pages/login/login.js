import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Updated to useNavigate
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const navigate = useNavigate(); // Updated to useNavigate
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your actual authentication logic
    if (
      credentials.username === "admin" &&
      credentials.password === "password"
    ) {
      navigate("/dashboard"); // Updated to use navigate
    } else {
      alert("Invalid credentials. Try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        {/* <Link hrefLang="/dashboard"> */}
        <button type="submit">Login</button>
        {/* </Link> */}
      </form>
    </div>
  );
};

export default Login;
