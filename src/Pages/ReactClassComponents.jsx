import React from "react";

class ReactClassComponents extends React.Component {
  render() {
    const examples = [
      {
        title: "1. What is a React Class Component?",
        description:
          "A class component is a JavaScript class that extends React.Component and must have a render() method.",
        code: `class Hello extends React.Component {
  render() {
    return <h2>Hello from Class Component</h2>;
  }
}`,
        output: <h2>Hello from Class Component</h2>,
      },
      {
        title: "2. Basic Class Component",
        description:
          "Class components use render() to return JSX.",
        code: `class Welcome extends React.Component {
  render() {
    return <p>Welcome to React Class Components</p>;
  }
}`,
        output: <p>Welcome to React Class Components</p>,
      },
      {
        title: "3. Using a Class Component",
        description:
          "Once defined, a class component can be used like an HTML tag.",
        code: `class Greeting extends React.Component {
  render() {
    return <h3>Hello User</h3>;
  }
}

class App extends React.Component {
  render() {
    return <Greeting />;
  }
}`,
        output: <h3>Hello User</h3>,
      },
      {
        title: "4. Reusable Class Components",
        description:
          "Class components can be reused multiple times.",
        code: `class Button extends React.Component {
  render() {
    return <button>Click Me</button>;
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Button />
        <Button />
        <Button />
      </div>
    );
  }
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
        title: "5. Class Component with Props",
        description:
          "Props are accessed using this.props inside class components.",
        code: `class User extends React.Component {
  render() {
    return <p>Hello, {this.props.name}</p>;
  }
}

class App extends React.Component {
  render() {
    return <User name="Deepanshu" />;
  }
}`,
        output: <p>Hello, Deepanshu</p>,
      },
      {
        title: "6. Class Component with State",
        description:
          "State allows class components to manage dynamic data.",
        code: `class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}`,
        output: (
          <div>
            <p>Count: 0</p>
            <button>Increment</button>
          </div>
        ),
      },
      {
        title: "7. Component Composition (Class)",
        description:
          "Class components can be combined to build complex UIs.",
        code: `class Header extends React.Component {
  render() {
    return <h2>Header</h2>;
  }
}

class Footer extends React.Component {
  render() {
    return <h2>Footer</h2>;
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
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
        <h1>React Class Components</h1>
        <p>
          Class components are one of the ways to create components in React.
          They use ES6 classes and provide access to state and lifecycle methods.
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
}

export default ReactClassComponents;
