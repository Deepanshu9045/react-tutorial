function JSXAttributes() {
  const examples = [
    {
      title: "1. What are JSX Attributes?",
      description:
        "JSX attributes are used to pass information to elements. They are similar to HTML attributes but follow JavaScript rules.",
      code: `<h2 className="title">Hello JSX Attributes</h2>`,
      output: <h2 className="title">Hello JSX Attributes</h2>,
    },
    {
      title: "2. className instead of class",
      description:
        "In JSX, 'class' is a reserved keyword in JavaScript, so we use 'className' instead.",
      code: `<div className="box">This is a styled box</div>`,
      output: (
        <div style={{ border: "1px solid #000", padding: "8px" }}>
          This is a styled box
        </div>
      ),
    },
    {
      title: "3. Using JavaScript Expressions as Attributes",
      description:
        "You can use JavaScript expressions inside attributes using curly braces {}.",
      code: `const isActive = true;

<button disabled={!isActive}>
  Click Me
</button>`,
      output: <button disabled={false}>Click Me</button>,
    },
    {
      title: "4. Inline Styles as Attributes",
      description:
        "Inline styles in JSX are written as objects with camelCase properties.",
      code: `<h3 style={{ color: "blue", fontSize: "20px" }}>
  Styled Heading
</h3>`,
      output: (
        <h3 style={{ color: "blue", fontSize: "20px" }}>
          Styled Heading
        </h3>
      ),
    },
    {
      title: "5. Boolean Attributes",
      description:
        "Boolean attributes can be written as true or false values.",
      code: `<input type="checkbox" checked={true} />`,
      output: <input type="checkbox" checked readOnly />,
    },
    {
      title: "6. Event Attributes",
      description:
        "JSX uses camelCase for event attributes like onClick and onChange.",
      code: `<button onClick={() => alert("Button Clicked!")}>
  Click Me
</button>`,
      output: (
        <button onClick={() => alert("Button Clicked!")}>
          Click Me
        </button>
      ),
    },
  ];

  return (
    <div style={{ padding: "32px", fontFamily: "Arial" }}>
      {/* Page Heading */}
      <h1>React JSX Attributes</h1>
      <p>
        JSX attributes allow you to pass values, styles, and events to elements
        in a React-friendly way.
      </p>

      {/* Examples */}
      {examples.map((item, index) => (
        <div
          key={index}
          style={{
            marginTop: "40px",
            paddingBottom: "24px",
            borderBottom: "1px solid #ddd",
          }}
        >
          <h2>{item.title}</h2>
          <p>{item.description}</p>

          {/* Code Box */}
          <pre
            style={{
              backgroundColor: "#1e1e1e",
              color: "#d4d4d4",
              padding: "16px",
              borderRadius: "8px",
              maxWidth: "600px",
              overflowX: "auto",
              marginTop: "12px",
            }}
          >
            <code>{item.code}</code>
          </pre>

          {/* Output */}
          <div style={{ marginTop: "16px" }}>
            <strong>Output:</strong>
            <div
              style={{
                marginTop: "8px",
                padding: "12px",
                border: "1px solid #ccc",
                borderRadius: "6px",
                maxWidth: "600px",
              }}
            >
              {item.output}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default JSXAttributes;
