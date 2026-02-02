function JSXIntro() {
  const examples = [
    {
      title: "1. What is JSX?",
      description:
        "JSX allows us to write HTML-like syntax inside JavaScript. It makes React code more readable.",
      code: `const element = <h1>Hello JSX!</h1>;`,
      output: <h2>Hello JSX!</h2>,
    },
    {
      title: "2. JSX in a Component",
      description:
        "JSX is commonly used inside React function components.",
      code: `function Welcome() {
  return <h2>Welcome to React</h2>;
}`,
      output: <h2>Welcome to React</h2>,
    },
    {
      title: "3. JSX with Expressions",
      description:
        "You can use JavaScript expressions inside JSX using curly braces {}.",
      code: `const name = "Deepanshu";

function App() {
  return <h2>Hello, {name}</h2>;
}`,
      output: <h2>Hello, Deepanshu</h2>,
    },
    {
      title: "4. Multiple Elements in JSX",
      description:
        "JSX must return a single parent element. Wrap elements inside a div.",
      code: `function Info() {
  return (
    <div>
      <h3>React</h3>
      <p>JSX makes UI easy</p>
    </div>
  );
}`,
      output: (
        <div>
          <h3>React</h3>
          <p>JSX makes UI easy</p>
        </div>
      ),
    },
    {
      title: "5. JSX with Styling",
      description:
        "Inline styles in JSX are written as JavaScript objects.",
      code: `<h2 style={{ color: "green", fontSize: "22px" }}>
  Styled JSX Text
</h2>`,
      output: (
        <h2 style={{ color: "green", fontSize: "22px" }}>
          Styled JSX Text
        </h2>
      ),
    },
  ];

  return (
    <div style={{ padding: "32px", fontFamily: "Arial" }}>
      {/* Page Heading */}
      <h1>React JSX Introduction</h1>
      <p>
        JSX (JavaScript XML) allows you to write UI code in a simple and readable
        way inside React.
      </p>

      {/* Examples Section */}
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

export default JSXIntro;
