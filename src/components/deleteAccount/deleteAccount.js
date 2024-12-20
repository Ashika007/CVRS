// // DeleteAccount.js
// import React, { useState, useEffect } from "react";
// import "./DeleteAccount.css";

// const DeleteAccount = () => {
//   const [records, setRecords] = useState([]);

//   // Fetch records from the backend
//   useEffect(() => {
//     fetch("http://localhost:5000/api/records")
//       .then((response) => response.json())
//       .then((data) => setRecords(data))
//       .catch((error) => console.error("Error fetching records:", error));
//   }, []);

//   // Delete a record
//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this record?")) {
//       fetch(`http://localhost:5000/api/records/${id}`, {
//         method: "DELETE",
//       })
//         .then((response) => {
//           if (response.ok) {
//             alert("Record deleted successfully!");
//             setRecords(records.filter((record) => record.id !== id));
//           } else {
//             alert("Failed to delete the record.");
//           }
//         })
//         .catch((error) => console.error("Error deleting record:", error));
//     }
//   };

//   return (
//     <div className="delete-account">
//       <h2>Delete Account</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Child ID</th>
//             <th>Name</th>
//             <th>Gender</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {records.map((record) => (
//             <tr key={record.id}>
//               <td>{record.childId}</td>
//               <td>{record.name}</td>
//               <td>{record.gender}</td>
//               <td>
//                 <button
//                   className="delete-button"
//                   onClick={() => handleDelete(record.id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DeleteAccount;
