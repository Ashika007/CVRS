import React, { useState } from "react";
import CreateAccount from "../../components/createAccount/createAcc.js";
import ViewRecords from "../../components/viewRecord/viewRecord.js";
import UpdateRecord from "../../components/updateAccount/updateAccount.js";
import "./dashboard.css";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("create");

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <ul className="sidebar-menu">
          <li>
            <button
              onClick={() => setActiveTab("create")}
              className={activeTab === "create" ? "active" : ""}
            >
              Create Account
            </button>
          </li>
          <li>
            <button
              className={activeTab === "view" ? "active" : ""}
              onClick={() => setActiveTab("view")}
            >
              View record
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("update")}
              className={activeTab === "update" ? "active" : ""}
            >
              Update Account
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Heading */}
        <h1 className="dashboard-heading">Child Vaccination Record System</h1>
        {/* Form content based on active tab */}
        {activeTab === "create" && <CreateAccount />}
        {activeTab === "view" && <ViewRecords />}
        {activeTab === "update" && <UpdateRecord />}
      </div>
    </div>
  );
};

export default Dashboard;

// // import React, { useState } from "react";
// // import "./dashboard.css";
// // import CreateAccount from "./components/createAccount/createAcc.js";
// // import ViewRecords from "./components/viewRecord/viewRecord.js";

// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState("create");

//   return (
//     <div className="dashboard">
//       <h1 className="dashboard-heading">Child Vaccination Record System</h1>
//       <div className="tabs">
//         <button
//           className={activeTab === "create" ? "active" : ""}
//           onClick={() => setActiveTab("create")}
//         >
//           Create Account
//         </button>
//         <button
//           className={activeTab === "view" ? "active" : ""}
//           onClick={() => setActiveTab("view")}
//         >
//           View Records
//         </button>
//       </div>
//       <div className="tab-content">
//         {activeTab === "create" && <CreateAccount />}
//         {activeTab === "view" && <ViewRecords />}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
