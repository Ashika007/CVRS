import React, { useState, useEffect } from "react";
import "./viewRecord.css";

const ViewRecords = () => {
  // Dummy records for demonstration; replace with actual backend data fetching logic.
  const [records, setRecords] = useState([]);
  const [selectedChild, setSelectedChild] = useState(null);

  // Dummy vaccine schedule data for child with ID 001
  const [vaccineRecords, setVaccineRecords] = useState({
    BCG: ["", "-", "-", "-", "-", "-", "-"],
    rota: ["-", "", "", "-", "-", "-", "-"],
    OPV: ["-", "", "", "", "-", "-", "-"],
    FIPV: ["-", "-", "-", "", "", "-", "-"],
    PCV: ["-", "", "", "-", "", "-", "-"],
    DPT: ["-", "", "", "", "-", "-", "-"],
    measles: ["-", "-", "-", "-", "", "-", ""],
    JE: ["-", "-", "-", "-", "-", "", "-"],
    TCV: ["-", "-", "-", "-", "-", "-", ""],
  });

  // Fetch data for child accounts (replace with your own fetch logic)
  useEffect(() => {
    const fetchData = async () => {
      // Mock data - replace with actual API call
      const mockData = [
        {
          childId: "001",
          name: "Ashika",
          gender: "Female",
          dob: "2023-05-05",
          weight: "3.0 kg",
          motherName: "Sushmita Shrestha",
          fatherName: "Ashika Balami",
          zone: "Gandaki",
          nagarGaunPalika: "Pokhara",
          wardNumber: "12",
          villageTol: "Lakeside",
          phoneNumber: "9876543210",
          email: "ashika.balami@example.com",
          healthInstitution: "Pokhara Health Center",
          healthWorker: "Dr. Shrestha",
          doCard: "2023-06-10",
          password: "password123",
        },
      ];
      setRecords(mockData);
    };

    fetchData();
  }, []);

  // Handle clicking on a child account
  const handleSelectChild = (childId) => {
    // In a real-world scenario, you would fetch the vaccine data for the selected child here
    if (childId === "001") {
      setVaccineRecords({
        BCG: ["", "-", "-", "-", "-", "-", "-"],
        rota: ["-", "", "", "-", "-", "-", "-"],
        OPV: ["-", "", "", "", "-", "-", "-"],
        FIPV: ["-", "-", "-", "", "", "-", "-"],
        PCV: ["-", "", "", "-", "", "-", "-"],
        DPT: ["-", "", "", "", "-", "-", "-"],
        measles: ["-", "-", "-", "-", "", "-", ""],
        JE: ["-", "-", "-", "-", "-", "", "-"],
        TCV: ["-", "-", "-", "-", "-", "-", ""],
      });
    }
    setSelectedChild(childId);
  };

  return (
    <div className="view-record">
      <h2>Child Accounts</h2>
      <div className="child-accounts">
        <h3>Select a Child Account:</h3>
        <ul>
          {records.map((record) => (
            <li key={record.childId}>
              <button onClick={() => handleSelectChild(record.childId)}>
                {record.name} (ID: {record.childId})
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Display vaccine records for the selected child */}
      {selectedChild && (
        <>
          <h3>
            Vaccine Schedule for{" "}
            {records.find((child) => child.childId === selectedChild).name}
          </h3>
          <table className="vaccine-table">
            <thead>
              <tr>
                <th>Vaccines</th>
                <th>At Birth</th>
                <th>6 Weeks</th>
                <th>10 Weeks</th>
                <th>14 Weeks</th>
                <th>9 Months</th>
                <th>12 Months</th>
                <th>15 Months</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(vaccineRecords).map((vaccine, vaccineIndex) => (
                <tr key={vaccineIndex}>
                  <td>{vaccine}</td>
                  {vaccineRecords[vaccine].map((weekValue, weekIndex) => (
                    <td key={weekIndex}>
                      <input type="text" value={weekValue} readOnly />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default ViewRecords;
