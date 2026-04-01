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
    { name: "React Class Components", key: "ReactClassComponents" },
    { name: "React Props", key: "ReactProps" },
    { name: "React Destructuring Props", key: "ReactDestructuringProps" },
    { name: "React Children And Events", key: "ReactChildrenAndEvents"},
    { name: "React Events", key: "ReactEvents"},
    { name: "React Conditional Rendering", key: "ReactConditionalRendering"},
    { name: "React Lists", key: "ReactLists"},
    { name: "React Form", key: "ReactForm"},
    { name: "React Form Elements", key: "ReactFormSElements"},
    { name: "React Portal & Suspense", key: "ReactPortalSuspense"},
    { name: "React Router & Transitions", key: "ReactRouterTransitions"},
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <div className="sidebar__eyebrow">Frontend Lab</div>
        <h2 className="sidebar__logo">React Tutorial</h2>
        <p className="sidebar__description">
          Learn the core pieces of React through small, focused examples.
        </p>
      </div>

      <div className="sidebar__section-label">Lessons</div>

      <nav className="sidebar__nav">
        {menuItems.map((item, index) => (
          <button
            key={item.key}
            type="button"
            className={`sidebar-item ${
              activePage === item.key ? "active" : ""
            }`}
            onClick={() => setActivePage(item.key)}
          >
            <span className="sidebar-item__index">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{item.name}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar__footer">
        <span className="sidebar__footer-label">Current view</span>
        <strong>{menuItems.find((item) => item.key === activePage)?.name}</strong>
      </div>
    </aside>
  );
};

export default Sidebar;
