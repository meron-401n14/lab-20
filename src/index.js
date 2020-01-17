import React from "react";
import ReactDOM from "react-dom";
import ManageContact from "./App.js";

function App() {
  return (
    <div className="col-md-6">
      <h2>Share Your Contact Details!</h2>
      <ManageContact />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
