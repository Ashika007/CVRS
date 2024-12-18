import React, { useState } from "react";
import "./dashboard.css";
import CreateAccount from "./components/createAccount/createAcc.js";
import ViewRecords from "./components/viewRecord/viewRecord.js";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("create");

  return (
    <div className="dashboard">
      <h1 className="dashboard-heading">Child Vaccination Record System</h1>
      <div className="tabs">
        <button
          className={activeTab === "create" ? "active" : ""}
          onClick={() => setActiveTab("create")}
        >
          Create Account
        </button>
        <button
          className={activeTab === "view" ? "active" : ""}
          onClick={() => setActiveTab("view")}
        >
          View Records
        </button>
      </div>
      <div className="tab-content">
        {activeTab === "create" && <CreateAccount />}
        {activeTab === "view" && <ViewRecords />}
      </div>
    </div>
  );
};

export default Dashboard;
