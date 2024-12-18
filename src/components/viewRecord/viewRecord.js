import React, { useState, useEffect } from "react";
import "./viewRecord.css";

const ViewRecords = () => {
  // Dummy records for demonstration; replace with actual backend data fetching logic.
  // Mock data for demonstration. Replace this with actual data fetched from your backend or state.
  const [records, setRecords] = useState([]);

  useEffect(() => {
    // Example: Fetch data from backend (replace this with actual fetch logic).
    const fetchData = async () => {
      // Simulate fetching data
      const mockData = [
        {
          childId: "001",
          name: "Anish Balami",
          gender: "Male",
          dob: "2023-01-01",
          weight: "3.5 gm",
          motherName: "Sushmita Shrestha",
          fatherName: "Ashika Balami",
          zone: "Gandaki",
          nagarGaunPalika: "Pokhara",
          wardNumber: "12",
          villageTol: "Lakeside",
          phoneNumber: "9876543210",
          email: "john.doe@example.com",
          healthInstitution: "Pokhara Health Center",
          healthWorker: "Dr. Shrestha",
          doCard: "2023-01-02",
          password: "password123",
        },
      ];
      setRecords(mockData);
    };

    fetchData();
  }, []);

  return (
    <div className="view-record">
      <h2>All Child Records</h2>
      <table className="records-table">
        <thead>
          <tr>
            <th>Child ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Weight</th>
            <th>Mother's Name</th>
            <th>Father's Name</th>
            <th>Zone</th>
            <th>Nagar/Gaun Palika</th>
            <th>Ward No.</th>
            <th>Village/Tol</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Health Institution</th>
            <th>Health Worker</th>
            <th>Date of Card</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {records.length > 0 ? (
            records.map((record, index) => (
              <tr key={index}>
                <td>{record.childId}</td>
                <td>{record.name}</td>
                <td>{record.gender}</td>
                <td>{record.dob}</td>
                <td>{record.weight}</td>
                <td>{record.motherName}</td>
                <td>{record.fatherName}</td>
                <td>{record.zone}</td>
                <td>{record.nagarGaunPalika}</td>
                <td>{record.wardNumber}</td>
                <td>{record.villageTol}</td>
                <td>{record.phoneNumber}</td>
                <td>{record.email}</td>
                <td>{record.healthInstitution}</td>
                <td>{record.healthWorker}</td>
                <td>{record.doCard}</td>
                <td>{record.password}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="17" style={{ textAlign: "center" }}>
                No records available.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ViewRecords;
