import React, { useState } from "react";
import "./viewRecord.css";

const ViewRecord = () => {
  // Sample data to simulate registered accounts
  const [records, setRecords] = useState([
    {
      id: "001",
      name: "Ashika Balami",
      dob: "2020-01-01",
      guardian: "Dummy data",
    },
    {
      id: "002",
      name: "Sami Mali",
      dob: "2019-05-15",
      guardian: "Dummy Data",
    },
    {
      id: "003",
      name: "Shija Pathak",
      dob: "2021-03-10",
      guardian: "Dummy Data",
    },
  ]);

  const handleViewMore = (id) => {
    alert(`Viewing details for Child ID: ${id}`);
    // Replace this alert with navigation or modal display logic for detailed records
  };

  return (
    <div className="view-record">
      <h2>Registered Accounts</h2>
      <table>
        <thead>
          <tr>
            <th>Child ID</th>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Guardian</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td>{record.id}</td>
              <td>{record.name}</td>
              <td>{record.dob}</td>
              <td>{record.guardian}</td>
              <td>
                <button onClick={() => handleViewMore(record.id)}>
                  View More
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewRecord;
