import React, { useState } from "react";
import "./createAcc.css";
const CreateAccount = () => {
  const [formData, setFormData] = useState({
    childId: "",
    name: "",
    gender: "",
    dob: "",
    weight: "",
    motherName: "",
    fatherName: "",
    zone: "",
    nagarGaunPalika: "",
    wardNumber: "",
    villageTol: "",
    phoneNumber: "",
    email: "",
    healthInstitution: "",
    healthWorker: "",
    doCard: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New account created:", formData);
    // send the form data to your backend or state management system
    setFormData({
      childId: "",
      name: "",
      gender: "",
      dob: "",
      weight: "",
      motherName: "",
      fatherName: "",
      zone: "",
      nagarGaunPalika: "",
      wardNumber: "",
      villageTol: "",
      phoneNumber: "",
      email: "",
      healthInstitution: "",
      healthWorker: "",
      doCard: "",
      password: "",
    });
    alert("Account created successfully!");
  };

  return (
    <div className="create-account">
      <h2>Create New Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="childId">Child ID:</label>
          <input
            type="text"
            id="childId"
            name="childId"
            value={formData.childId}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="gender"></label>
          <label for="male">Male</label>
          <input
            type="radio"
            id="male"
            name="male"
            value={formData.gender.male}
            onChange={handleChange}
            required
          />
          <label for="female">Female</label>
          <input
            type="radio"
            id="female"
            name="female"
            value={formData.gender.female}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="weight">Weight during Birth:</label>
          <input
            type="text"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="motherName">Mother's Name:</label>
          <input
            type="text"
            id="motherName"
            name="motherName"
            value={formData.motherName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="fatherName">Father's Name</label>
          <input
            type="text"
            id="fatherName"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="province">Province</label>
          <select name="province" id="province">
            <option value="gandaki">Gandaki</option>
            <option value="lumbini">Lumbini</option>
            <option value="karnali">Karnali</option>
            <option value="sudurpashchim">Sudurpaschim</option>
            <option value="madhesh">Madhesh</option>
            <option value="koshi">Koshi</option>
            <option value="bagmati">Bagmati</option>
          </select>
        </div>
        <div>
          <label htmlFor="nagarGaunpalika">Nagarpalika/ Gaunpalika</label>
          <input
            type="text"
            id="nagarGaunpalika"
            name="nagarGaunpalik"
            value={formData.nagarGaunpalika}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="wardNumber">Ward No.</label>
          <input
            type="text"
            id="wardNumber"
            name="wardNumber"
            value={formData.wardNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="villageTol">Village/ Tol</label>
          <input
            type="text"
            id="villageTol"
            name="villageTol"
            value={formData.wardNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="healthInstitution">Health Institution's Name</label>
          <input
            type="text"
            id="healthInstitution"
            name="healthInstitution"
            value={formData.healthInstitution}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="healthWorker">Health Worker Assigned</label>
          <input
            type="text"
            id="healthWorker"
            name="healthWorker"
            value={formData.healthWorker}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="doCard">Date of card made</label>
          <input
            type="date"
            id="doCard"
            name="doCard"
            value={formData.doCard}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Temporary Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default CreateAccount;
