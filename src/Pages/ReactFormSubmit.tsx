import React, { useState } from "react";

function ReactFormSubmit() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState("");

  const examples = [
    {
      title: "1. Basic Submit",
      description:
        "onSubmit handles form submission. We prevent refresh using preventDefault().",
      code: `function handleSubmit(e) {
  e.preventDefault();
  setSubmitted(email);
}`,
      output: (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(email);
          }}
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
          <button type="submit">Submit</button>

          {submitted && <p>Submitted: {submitted}</p>}
        </form>
      ),
    },
  ];

  return (
    <div style={{ padding: 32, fontFamily: "Arial" }}>
      <h1>Submitting Forms</h1>

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

export default ReactFormSubmit;