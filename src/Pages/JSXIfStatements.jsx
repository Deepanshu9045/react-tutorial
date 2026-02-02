function JSXIfStatements() {
  const examples = [
    {
      title: "1. Why If Statements in JSX?",
      description:
        "JSX does not support traditional if-else statements directly. Instead, we use JavaScript logic outside JSX or expressions inside JSX.",
      code: `// ❌ This will NOT work inside JSX
// { if (isLoggedIn) { ... } }`,
      output: <p>Use conditional rendering methods instead.</p>,
    },
    {
      title: "2. If Statement Before Return",
      description:
        "You can use a normal if statement before returning JSX.",
      code: `function Welcome({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h3>Welcome Back!</h3>;
  }
  return <h3>Please Login</h3>;
}`,
      output: <h3>Welcome Back!</h3>,
    },
    {
      title: "3. Ternary Operator in JSX",
      description:
        "The ternary operator is the most common way to use conditions inside JSX.",
      code: `function Status() {
  const isLoggedIn = false;

  return (
    <p>
      {isLoggedIn ? "Welcome User" : "Please Login"}
    </p>
  );
}`,
      output: <p>Please Login</p>,
    },
    {
      title: "4. Logical AND (&&) Operator",
      description:
        "Use && when you want to render something only if a condition is true.",
      code: `function Notification() {
  const hasMessage = true;

  return (
    <div>
      {hasMessage && <p>You have new messages</p>}
    </div>
  );
}`,
      output: <p>You have new messages</p>,
    },
    {
      title: "5. Using If-Else with Functions",
      description:
        "You can move conditional logic into a helper function.",
      code: `function getGreeting(isMorning) {
  if (isMorning) {
    return <h3>Good Morning</h3>;
  }
  return <h3>Good Evening</h3>;
}

function App() {
  return getGreeting(true);
}`,
      output: <h3>Good Morning</h3>,
    },
    {
      title: "6. Conditional Styling",
      description:
        "Conditions can also be used to change styles dynamically.",
      code: `function Box() {
  const isActive = true;

  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: isActive ? "green" : "gray",
        color: "white",
      }}
    >
      Status Box
    </div>
  );
}`,
      output: (
        <div
          style={{
            padding: "10px",
            backgroundColor: "green",
            color: "white",
          }}
        >
          Status Box
        </div>
      ),
    },
  ];

  return (
    <div style={{ padding: "32px", fontFamily: "Arial" }}>
      {/* Page Heading */}
      <h1>React JSX If Statements</h1>
      <p>
        Conditional rendering allows you to show or hide UI elements based on
        conditions in React.
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

export default JSXIfStatements;
