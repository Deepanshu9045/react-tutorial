function ReactComponents() {
  const examples = [
    {
      title: "1. What is a React Component?",
      description:
        "A React component is a reusable piece of UI. Components let you split the UI into independent parts.",
      code: `function Hello() {
  return <h2>Hello from Component</h2>;
}`,
      output: <h2>Hello from Component</h2>,
    },
    {
      title: "2. Functional Component",
      description:
        "Functional components are JavaScript functions that return JSX.",
      code: `function Welcome() {
  return <p>Welcome to React</p>;
}`,
      output: <p>Welcome to React</p>,
    },
    {
      title: "3. Using a Component",
      description:
        "Once a component is created, it can be reused like an HTML tag.",
      code: `function Greeting() {
  return <h3>Hello User</h3>;
}

function App() {
  return <Greeting />;
}`,
      output: <h3>Hello User</h3>,
    },
    {
      title: "4. Reusable Components",
      description:
        "Components can be reused multiple times with the same structure.",
      code: `function Button() {
  return <button>Click Me</button>;
}

function App() {
  return (
    <div>
      <Button />
      <Button />
      <Button />
    </div>
  );
}`,
      output: (
        <div>
          <button>Click Me</button>
          <button>Click Me</button>
          <button>Click Me</button>
        </div>
      ),
    },
    {
      title: "5. Component with Props",
      description:
        "Props allow data to be passed into components dynamically.",
      code: `function User(props) {
  return <p>Hello, {props.name}</p>;
}

function App() {
  return <User name="Deepanshu" />;
}`,
      output: <p>Hello, Deepanshu</p>,
    },
    {
      title: "6. Component Composition",
      description:
        "Components can be combined to build complex UIs.",
      code: `function Header() {
  return <h2>Header</h2>;
}

function Footer() {
  return <h2>Footer</h2>;
}

function App() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}`,
      output: (
        <div>
          <h2>Header</h2>
          <h2>Footer</h2>
        </div>
      ),
    },
  ];

  return (
    <div style={{ padding: "32px", fontFamily: "Arial" }}>
      {/* Page Heading */}
      <h1>React Components</h1>
      <p>
        Components are the building blocks of React applications. Each component
        returns JSX and can be reused throughout the app.
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

export default ReactComponents;
