import React from "react";
import "./global.css"; // Ensure the path to your css file is correct

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h1 className="dashboard-heading">React Tutorial</h1>
        
        <p className="dashboard-text">
          <strong>Learn React:</strong> React is a JavaScript library for 
          building user interfaces. React is used to build single-page 
          applications. React allows us to create reusable UI components.
        </p>

        <blockquote className="quote-text">
          "Take the first step in faith. You don't have to see the whole staircase, just take the first step."
          <span className="quote-author">- Martin Luther King Jr.</span>
        </blockquote>
      </div>
    </div>
  );
};

export default Dashboard;