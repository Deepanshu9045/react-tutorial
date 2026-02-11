import React, { useState } from "react";

function ReactFormsIntro() {
  const [name, setName] = useState("");
  

  const examples = [
    {
      title: "1. Controlled Input",
      description:
        "React controls the input value using state. Whatever user types updates the state.",
      code: `const [name, setName] = useState("");

<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>`,
      output: (
        <div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
          <p>Name: {name}</p>
        </div>
      ),
    },
    {
      title: "2. Textarea Example",
      description: "Textarea is also controlled using state.",
      code: `const [msg, setMsg] = useState("");

<textarea
  value={msg}
  onChange={(e) => setMsg(e.target.value)}
/>`,
      output: <p>Check code for textarea usage 👆</p>,
    },
    {
      title: "3. Select Dropdown",
      description: "Select fields work the same way as inputs.",
      code: `const [city, setCity] = useState("");

<select onChange={(e) => setCity(e.target.value)}>
  <option>Delhi</option>
  <option>Mumbai</option>
</select>`,
      output: <p>Check code for select usage 👆</p>,
    },
  ];

  return (
    <div style={{ padding: 32, fontFamily: "Arial" }}>
      <h1>React Forms</h1>
      <p>Forms in React are usually controlled by state.</p>

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

export default ReactFormsIntro;