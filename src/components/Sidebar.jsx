import React from "react";
import "./Sidebar.css";

const Sidebar = ({ setActivePage, activePage }) => {
  const menuItems = [
    { name: "Dashboard", key: "dashboard" },
    { name: "Page1", key: "page1" },
    { name: "Page2", key: "page2" },
  ];

  return (
    <div className="sidebar">
      <h2 className="logo">React Tutorial</h2>

      {menuItems.map((item) => (
        <div
          key={item.key}
          className={`sidebar-item ${
            activePage === item.key ? "active" : ""
          }`}
          onClick={() => setActivePage(item.key)}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
