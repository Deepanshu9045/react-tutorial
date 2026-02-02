function JSXExpressions() {
  const examples = [
    {
      title: "1. What are JSX Expressions?",
      description:
        "JSX expressions allow you to embed JavaScript values directly inside JSX using curly braces {}.",
      code: `const name = "React";

function App() {
  return <h2>Welcome to {name}</h2>;
}`,
      output: <h2>Welcome to React</h2>,
    },
    {
      title: "2. Variables in JSX",
      description:
        "You can display variables inside JSX using curly braces.",
      code: `const user = "Deepanshu";

function Profile() {
  return <p>Hello, {user}</p>;
}`,
      output: <p>Hello, Deepanshu</p>,
    },
    {
      title: "3. Expressions & Calculations",
      description:
        "JSX supports JavaScript expressions like calculations and function calls.",
      code: `function Sum() {
  return <p>2 + 3 = {2 + 3}</p>;
}`,
      output: <p>2 + 3 = 5</p>,
    },
    {
      title: "4. Function Calls in JSX",
      description:
        "You can call JavaScript functions directly inside JSX expressions.",
      code: `function getGreeting(name) {
  return "Hello " + name;
}

function App() {
  return <h3>{getGreeting("Developer")}</h3>;
}`,
      output: <h3>Hello Developer</h3>,
    },
    {
      title: "5. Conditional Expressions (Ternary)",
      description:
        "JSX does not support if-else directly, but you can use ternary operators.",
      code: `function Status() {
  const isLoggedIn = true;

  return (
    <p>
      {isLoggedIn ? "Welcome Back!" : "Please Login"}
    </p>
  );
}`,
      output: <p>Welcome Back!</p>,
    },
    {
      title: "6. Rendering Arrays in JSX",
      description:
        "You can render arrays of data using JavaScript map() inside JSX.",
      code: `function List() {
  const items = ["HTML", "CSS", "React"];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}`,
      output: (
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>React</li>
        </ul>
      ),
    },
  ];

  return (
    <div style={{ padding: "32px", fontFamily: "Arial" }}>
      {/* Page Heading */}
      <h1>React JSX Expressions</h1>
      <p>
        JSX Expressions allow you to use JavaScript logic directly inside your
        UI using curly braces <strong>{`{}`}</strong>.
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

export default JSXExpressions;
