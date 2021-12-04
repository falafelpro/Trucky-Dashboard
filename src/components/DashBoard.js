import React from "react";

function DashBoard() {
  return (
    <div className="container">
      <div className="row">
        <div className="side-bar col-3">hello</div>
        <div
          className="dashboard-container col-9"
          style={{ backgroundColor: "red" }}
        >
          <div className="header">header</div>
          <div className="body">body</div>
          <div className="footer">footer</div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
