import React from "react";
import "./Sidebar.css";

const Sidebar = ({ setActivePage, activePage }) => {
  const menuItems = [
    { name: "Dashboard", key: "dashboard" },
    { name: "Hello React", key: "HelloReact" },
    { name: "JSX Intro", key: "JSXIntro" },
    { name: "JSX Expressions", key: "JSXExpressions" },
    { name: "JSX Attributes", key: "JSXAttributes" },
    { name: "JSX If Statements", key: "JSXIfStatements" },
    { name: "React Components", key: "ReactComponents" },
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
