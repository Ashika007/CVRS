import React from "react";
import createAcc from "./components/createAccount/createAcc.js";
import CreateAccount from "./components/createAccount/createAcc.js";
import ViewRecord from "./components/viewRecord/viewRecord.js";

const App = () => {
  return (
    <div className="App">
      <h1>Child Vaccination Record System</h1>
      <CreateAccount />

      <ViewRecord />
    </div>
  );
};

export default App;
