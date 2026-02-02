function HelloReact() {
  const codeString = `
function HelloReact() {
  return (
    <div className="HelloReact">
      <h1>Hello React!</h1>
    </div>
  );
}

export default HelloReact;
  `;

  return (
    <div className="HelloReact" style={{ padding: "20px", fontFamily: "Arial" }}>
      {/* Main Heading */}
      <h1>Your First React App</h1>

      {/* Code Window */}
      <pre
        style={{
          backgroundColor: "#1e1e1e",
          color: "#d4d4d4",
          padding: "16px",
          borderRadius: "8px",
          overflowX: "auto",
          marginTop: "16px",
          maxWidth: "600px",
        }}
      >
        <code>{codeString}</code>
      </pre>

      {/* Output Section */}
      <div style={{ marginTop: "20px" }}>
        <strong>Output:</strong>
        <h2>Hello React</h2>
      </div>
    </div>
  );
}

export default HelloReact;
