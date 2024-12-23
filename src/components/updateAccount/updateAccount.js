import React, { useState, useEffect } from "react";
import "./updateAccount.css";

const UpdateRecord = () => {
  // Dummy data for child accounts
  const [children, setChildren] = useState([
    { childId: "001", name: "Ashika" },
    // You can add more dummy children here if needed
  ]);

  // Selected child account
  const [selectedChild, setSelectedChild] = useState(null);

  // Vaccine schedule for the selected child
  const [formData, setFormData] = useState({
    BCG: ["", "-", "-", "-", "-", "-", "-"], // Default value for "At Birth"
    rota: ["-", "", "", "-", "-", "-", "-"], // Default value for "6 Weeks"
    OPV: ["-", "", "", "", "-", "-", "-"], // Default value for "10 Weeks"
    FIPV: ["-", "-", "-", "", "", "-", "-"],
    PCV: ["-", "", "", "-", "", "-", "-"],
    DPT: ["-", "", "", "", "-", "-", "-"],
    measles: ["-", "-", "-", "-", "", "-", ""],
    JE: ["-", "-", "-", "-", "-", "", "-"],
    TCV: ["-", "-", "-", "-", "-", "-", ""],
  });

  // Fetch the vaccine schedule when a child is selected (currently using dummy data)
  useEffect(() => {
    if (selectedChild) {
      if (selectedChild.childId === "001") {
        setFormData({
          BCG: ["", "-", "-", "-", "-", "-", "-"], // Default value for "At Birth"
          rota: ["-", "", "", "-", "-", "-", "-"], // Default value for "6 Weeks"
          OPV: ["-", "", "", "", "-", "-", "-"], // Default value for "10 Weeks"
          FIPV: ["-", "-", "-", "", "", "-", "-"],
          PCV: ["-", "", "", "-", "", "-", "-"],
          DPT: ["-", "", "", "", "-", "-", "-"],
          measles: ["-", "-", "-", "-", "", "-", ""],
          JE: ["-", "-", "-", "-", "-", "", "-"],
          TCV: ["-", "-", "-", "-", "-", "-", ""],
        });
      }
    }
  }, [selectedChild]);

  // Handle checkbox changes for vaccine records
  const handleCheckboxChange = (e, vaccine, weekIndex) => {
    const newFormData = { ...formData };
    newFormData[vaccine][weekIndex] = e.target.checked ? "✔️" : ""; // Store checked as "✔️" or empty string
    setFormData(newFormData);
  };

  // Handle form submission (saving updates)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Vaccine Schedule for", selectedChild.name, formData);
    alert("Vaccine schedule updated successfully!");
  };

  return (
    <div className="update-record">
      <h2>Update Vaccine Schedule</h2>

      {/* Child Selection */}
      <div className="child-selection">
        <h3>Select Child Account:</h3>
        <ul>
          {children.map((child) => (
            <li key={child.childId}>
              <button onClick={() => setSelectedChild(child)}>
                {child.name} (ID: {child.childId})
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Vaccine Schedule Form for selected child */}
      {selectedChild && (
        <>
          <h3>
            Update Schedule for {selectedChild.name} (ID:{" "}
            {selectedChild.childId})
          </h3>
          <form onSubmit={handleSubmit}>
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
                {Object.keys(formData).map((vaccine) => (
                  <tr key={vaccine}>
                    <td>{vaccine}</td>
                    {formData[vaccine].map((weekValue, weekIndex) => (
                      <td key={weekIndex}>
                        {/* Render checkboxes for empty cells */}
                        {weekValue === "" ? (
                          <input
                            type="checkbox"
                            checked={weekValue === "✔️"}
                            onChange={(e) =>
                              handleCheckboxChange(e, vaccine, weekIndex)
                            }
                          />
                        ) : (
                          <input type="text" value={weekValue} readOnly />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <button type="submit" className="update-button">
              Update Schedule
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default UpdateRecord;

// import React, { useState, useEffect } from "react";
// import "./updateAccount.css";

// const UpdateRecord = () => {
//   // Dummy data for child accounts
//   const [children, setChildren] = useState([
//     { childId: "001", name: "Ashika" },
//     // You can add more dummy children here if needed
//   ]);

//   // Selected child account
//   const [selectedChild, setSelectedChild] = useState(null);

//   // Vaccine schedule for the selected child
//   const [formData, setFormData] = useState({
//     BCG: ["", "-", "-", "-", "-", "-", "-"], // Default value for "At Birth"
//     rota: ["-", "", "", "-", "-", "-", "-"], // Default value for "6 Weeks"
//     OPV: ["-", "", "", "", "-", "-", "-"], // Default value for "10 Weeks"
//     FIPV: ["-", "-", "-", "", "", "-", "-"],
//     PCV: ["-", "", "", "-", "", "-", "-"],
//     DPT: ["-", "", "", "", "-", "-", "-"],
//     measles: ["-", "-", "-", "-", "", "-", ""],
//     JE: ["-", "-", "-", "-", "-", "", "-"],
//     TCV: ["-", "-", "-", "-", "-", "-", ""],
//   });

//   // Fetch the vaccine schedule when a child is selected (currently using dummy data)
//   useEffect(() => {
//     if (selectedChild) {
//       if (selectedChild.childId === "001") {
//         setFormData({
//           BCG: ["", "-", "-", "-", "-", "-", "-"], // Default value for "At Birth"
//           rota: ["-", "", "", "-", "-", "-", "-"], // Default value for "6 Weeks"
//           OPV: ["-", "", "", "", "-", "-", "-"], // Default value for "10 Weeks"
//           FIPV: ["-", "-", "-", "", "", "-", "-"],
//           PCV: ["-", "", "", "-", "", "-", "-"],
//           DPT: ["-", "", "", "", "-", "-", "-"],
//           measles: ["-", "-", "-", "-", "", "-", ""],
//           JE: ["-", "-", "-", "-", "-", "", "-"],
//           TCV: ["-", "-", "-", "-", "-", "-", ""],
//         });
//       }
//     }
//   }, [selectedChild]);

//   // Handle input changes for vaccine records
//   const handleChange = (e, vaccineIndex, weekIndex) => {
//     const newFormData = { ...formData };
//     newFormData[`vaccine${vaccineIndex}`][weekIndex] = e.target.value;
//     setFormData(newFormData);
//   };

//   // Handle form submission (saving updates)
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Updated Vaccine Schedule for", selectedChild.name, formData);
//     alert("Vaccine schedule updated successfully!");
//   };

//   return (
//     <div className="update-record">
//       <h2>Update Vaccine Schedule</h2>

//       {/* Child Selection */}
//       <div className="child-selection">
//         <h3>Select Child Account:</h3>
//         <ul>
//           {children.map((child) => (
//             <li key={child.childId}>
//               <button onClick={() => setSelectedChild(child)}>
//                 {child.name} (ID: {child.childId})
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Vaccine Schedule Form for selected child */}
//       {selectedChild && (
//         <>
//           <h3>
//             Update Schedule for {selectedChild.name} (ID:{" "}
//             {selectedChild.childId})
//           </h3>
//           <form onSubmit={handleSubmit}>
//             <table className="vaccine-table">
//               <thead>
//                 <tr>
//                   <th>Vaccines</th>
//                   <th>At Birth</th>
//                   <th>6 Weeks</th>
//                   <th>10 Weeks</th>
//                   <th>14 Weeks</th>
//                   <th>9 Months</th>
//                   <th>12 Months</th>
//                   <th>15 Months</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {Object.keys(formData).map((vaccine, vaccineIndex) => (
//                   <tr key={vaccine}>
//                     <td>{`Vaccine ${vaccineIndex + 1}`}</td>
//                     {formData[vaccine].map((weekValue, weekIndex) => (
//                       <td key={weekIndex}>
//                         {/* Make cells read-only if they contain default values */}
//                         <input
//                           type="text"
//                           value={weekValue}
//                           onChange={(e) =>
//                             handleChange(e, vaccineIndex + 1, weekIndex)
//                           }
//                           readOnly={weekValue !== ""}
//                         />
//                       </td>
//                     ))}
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             <button type="submit" className="update-button">
//               Update Schedule
//             </button>
//           </form>
//         </>
//       )}
//     </div>
//   );
// };

// export default UpdateRecord;
