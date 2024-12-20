import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example: Hardcoded login check for username and password
    if (formData.username === "admin" && formData.password === "password") {
      // Redirect to Dashboard page after successful login
      history.push("/dashboard");
    } else {
      alert("Invalid username or password!");
    }
  };

  return (
    <div className="login-container">
      <h2>Login to Child Vaccination Record System</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
