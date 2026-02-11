import React from "react";

function ReactLists() {
  const users = ["Deepanshu", "Aman", "Priya"];

  const examples = [
    {
      title: "1. Rendering a List",
      description: "We use map() to display arrays in JSX.",
      code: `const users = ["Deepanshu", "Aman", "Priya"];

{users.map((user) => (
  <li>{user}</li>
))}`,
      output: (
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      ),
    },
    {
      title: "2. Why Keys?",
      description:
        "Keys help React identify which items changed, added, or removed.",
      code: `<li key={id}>{name}</li>`,
      output: <p>Keys improve performance & avoid warnings.</p>,
    },
  ];

  return (
    <div style={{ padding: 32, fontFamily: "Arial" }}>
      <h1>React Lists & Keys</h1>

      {examples.map((item, index) => (
        <div key={index} style={{ marginTop: 40 }}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>

          <pre style={codeStyle}>
            <code>{item.code}</code>
          </pre>

          <strong>Output:</strong>
          <div style={outputStyle}>{item.output}</div>
        </div>
      ))}
    </div>
  );
}

const codeStyle: React.CSSProperties = {
  background: "#1e1e1e",
  color: "#d4d4d4",
  padding: 16,
  borderRadius: 8,
  maxWidth: 600,
  overflowX: "auto",
};

const outputStyle = {
  marginTop: 10,
  padding: 12,
  border: "1px solid #ccc",
  borderRadius: 6,
  maxWidth: 600,
};


export default ReactLists;