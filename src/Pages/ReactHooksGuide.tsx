import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";

/* ------------------------------------------------------------------ */
/* Context setup for useContext demo */
/* ------------------------------------------------------------------ */

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

function ThemePreview() {
  const context = useContext(ThemeContext);

  if (!context) {
    return <p>Theme context is not available.</p>;
  }

  const { theme } = context;

  return (
    <div
      style={{
        padding: 16,
        borderRadius: 8,
        border: "1px solid #ccc",
        background: theme === "light" ? "#ffffff" : "#1f2937",
        color: theme === "light" ? "#111827" : "#f9fafb",
      }}
    >
      Current theme from context: <strong>{theme}</strong>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* useReducer setup */
/* ------------------------------------------------------------------ */

type CounterState = {
  count: number;
};

type CounterAction =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" };

function counterReducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

/* ------------------------------------------------------------------ */
/* React.memo child for useCallback demo */
/* ------------------------------------------------------------------ */

const CallbackChild = React.memo(function CallbackChild({
  onAdd,
}: {
  onAdd: () => void;
}) {
  const renderCountRef = useRef(0);
  renderCountRef.current += 1;

  return (
    <div style={outputBoxStyle}>
      <button style={buttonStyle} onClick={onAdd}>
        Increment from child
      </button>
      <p style={{ marginTop: 10 }}>Child renders: {renderCountRef.current}</p>
    </div>
  );
});

/* ------------------------------------------------------------------ */
/* Custom Hook */
/* ------------------------------------------------------------------ */

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue((prev) => !prev);
  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);

  return { value, toggle, setTrue, setFalse };
}

/* ------------------------------------------------------------------ */
/* Slow function for useMemo demo */
/* ------------------------------------------------------------------ */

function slowSquare(num: number) {
  let result = 0;

  for (let i = 0; i < 6000000; i++) {
    result = num * num;
  }

  return result;
}

/* ------------------------------------------------------------------ */
/* Reusable section */
/* ------------------------------------------------------------------ */

function Section({
  title,
  description,
  code,
  children,
}: {
  title: string;
  description: string;
  code: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginTop: 40 }}>
      <h2>{title}</h2>
      <p>{description}</p>

      <pre style={codeStyle}>
        <code>{code}</code>
      </pre>

      <strong>Output:</strong>
      <div style={outputStyle}>{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Main Component */
/* ------------------------------------------------------------------ */

function ReactHooksGuide() {
  /* ---------------- useState ---------------- */
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  /* ---------------- useEffect ---------------- */
  const [seconds, setSeconds] = useState(0);
  const [effectCount, setEffectCount] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  /* ---------------- useContext ---------------- */
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  /* ---------------- useRef ---------------- */
  const inputRef = useRef<HTMLInputElement>(null);
  const [refCount, setRefCount] = useState(0);
  const previousCountRef = useRef(0);

  useEffect(() => {
    previousCountRef.current = refCount;
  }, [refCount]);

  /* ---------------- useReducer ---------------- */
  const [reducerState, dispatch] = useReducer(counterReducer, { count: 0 });

  /* ---------------- useCallback ---------------- */
  const [callbackCount, setCallbackCount] = useState(0);
  const [unrelatedValue, setUnrelatedValue] = useState(false);

  const handleAdd = useCallback(() => {
    setCallbackCount((prev) => prev + 1);
  }, []);

  /* ---------------- useMemo ---------------- */
  const [memoNumber, setMemoNumber] = useState(5);
  const [memoText, setMemoText] = useState("");

  const squaredValue = useMemo(() => {
    return slowSquare(memoNumber);
  }, [memoNumber]);

  /* ---------------- Custom Hook ---------------- */
  const modal = useToggle(false);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ padding: 32, fontFamily: "Arial, sans-serif" }}>
        <h1>React Hooks Detailed Guide</h1>
        <p>
          This page demonstrates <strong>useState</strong>,{" "}
          <strong>useEffect</strong>, <strong>useContext</strong>,{" "}
          <strong>useRef</strong>, <strong>useReducer</strong>,{" "}
          <strong>useCallback</strong>, <strong>useMemo</strong>, and{" "}
          <strong>Custom Hooks</strong>.
        </p>

        <Section
          title="1. useState"
          description="useState is used to create and update local state inside a functional component. When the state changes, React re-renders the component."
          code={`const [count, setCount] = useState(0);
const [name, setName] = useState("");

<button onClick={() => setCount(count + 1)}>Increment</button>
<input value={name} onChange={(e) => setName(e.target.value)} />`}
        >
          <div style={outputBoxStyle}>
            <p>Count: {count}</p>
            <button style={buttonStyle} onClick={() => setCount(count + 1)}>
              Increment
            </button>
            <button style={buttonStyle} onClick={() => setCount(count - 1)}>
              Decrement
            </button>
            <button style={buttonStyle} onClick={() => setCount(0)}>
              Reset
            </button>

            <div style={{ marginTop: 16 }}>
              <input
                style={inputStyle}
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <p>Hello, {name || "Guest"} 👋</p>
            </div>
          </div>
        </Section>

        <Section
          title="2. useEffect"
          description="useEffect runs side effects in your component, such as timers, API calls, event listeners, or updating the document title. It can also clean up when the component unmounts."
          code={`useEffect(() => {
  const intervalId = setInterval(() => {
    setSeconds((prev) => prev + 1);
  }, 1000);

  return () => clearInterval(intervalId);
}, []);

const titleDemoText = \`Clicked \${effectCount} times\`;`}
        >
          <div style={outputBoxStyle}>
            <p>Timer running: {seconds} seconds</p>
            <p>The browser tab title stays React Tutorial.</p>
            <p>Title demo text: Clicked {effectCount} times</p>
            <button
              style={buttonStyle}
              onClick={() => setEffectCount((prev) => prev + 1)}
            >
              Increase demo count
            </button>
          </div>
        </Section>

        <Section
          title="3. useContext"
          description="useContext lets you share data between components without passing props manually at every level. It is useful for theme, authentication, language, and global settings."
          code={`const ThemeContext = createContext(null);

function ThemePreview() {
  const context = useContext(ThemeContext);
  return <div>Current theme: {context?.theme}</div>;
}

<ThemeContext.Provider value={{ theme, toggleTheme }}>
  <ThemePreview />
</ThemeContext.Provider>`}
        >
          <div style={outputBoxStyle}>
            <button style={buttonStyle} onClick={toggleTheme}>
              Toggle Theme
            </button>
            <div style={{ marginTop: 16 }}>
              <ThemePreview />
            </div>
          </div>
        </Section>

        <Section
          title="4. useRef"
          description="useRef stores a mutable value that does not trigger a re-render when changed. It is commonly used to access DOM elements or keep previous values between renders."
          code={`const inputRef = useRef<HTMLInputElement>(null);
const previousCountRef = useRef(0);

<button onClick={() => inputRef.current?.focus()}>
  Focus Input
</button>`}
        >
          <div style={outputBoxStyle}>
            <input
              ref={inputRef}
              style={inputStyle}
              type="text"
              placeholder="Focus me using useRef"
            />
            <div style={{ marginTop: 12 }}>
              <button
                style={buttonStyle}
                onClick={() => inputRef.current?.focus()}
              >
                Focus Input
              </button>
            </div>

            <div style={{ marginTop: 16 }}>
              <p>Current count: {refCount}</p>
              <p>Previous count: {previousCountRef.current}</p>
              <button
                style={buttonStyle}
                onClick={() => setRefCount((prev) => prev + 1)}
              >
                Increase Count
              </button>
            </div>
          </div>
        </Section>

        <Section
          title="5. useReducer"
          description="useReducer is useful when state logic becomes more complex. Instead of updating state directly, you dispatch actions and a reducer decides how the state should change."
          code={`function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

const [state, dispatch] = useReducer(counterReducer, { count: 0 });`}
        >
          <div style={outputBoxStyle}>
            <p>Reducer count: {reducerState.count}</p>
            <button
              style={buttonStyle}
              onClick={() => dispatch({ type: "increment" })}
            >
              Increment
            </button>
            <button
              style={buttonStyle}
              onClick={() => dispatch({ type: "decrement" })}
            >
              Decrement
            </button>
            <button
              style={buttonStyle}
              onClick={() => dispatch({ type: "reset" })}
            >
              Reset
            </button>
          </div>
        </Section>

        <Section
          title="6. useCallback"
          description="useCallback memoizes a function so React does not recreate it on every render. This is helpful when passing functions to memoized child components."
          code={`const handleAdd = useCallback(() => {
  setCallbackCount((prev) => prev + 1);
}, []);

const CallbackChild = React.memo(({ onAdd }) => {
  return <button onClick={onAdd}>Increment from child</button>;
});`}
        >
          <div style={outputBoxStyle}>
            <p>Parent count: {callbackCount}</p>
            <button
              style={buttonStyle}
              onClick={() => setUnrelatedValue((prev) => !prev)}
            >
              Change unrelated state
            </button>
            <p style={{ marginTop: 10 }}>
              Unrelated value: {unrelatedValue ? "true" : "false"}
            </p>
            <p>
              Because <code>handleAdd</code> is wrapped in{" "}
              <code>useCallback</code>, the memoized child does not receive a
              new function on every unrelated render.
            </p>

            <CallbackChild onAdd={handleAdd} />
          </div>
        </Section>

        <Section
          title="7. useMemo"
          description="useMemo memoizes a computed value. It is useful when the calculation is expensive and should only run when specific dependencies change."
          code={`const squaredValue = useMemo(() => {
  return slowSquare(memoNumber);
}, [memoNumber]);`}
        >
          <div style={outputBoxStyle}>
            <label>
              Number:
              <input
                style={{ ...inputStyle, marginLeft: 10, width: 120 }}
                type="number"
                value={memoNumber}
                onChange={(e) => setMemoNumber(Number(e.target.value) || 0)}
              />
            </label>

            <div style={{ marginTop: 16 }}>
              <input
                style={inputStyle}
                type="text"
                placeholder="Type here"
                value={memoText}
                onChange={(e) => setMemoText(e.target.value)}
              />
              <p>Unrelated input: {memoText}</p>
            </div>

            <p>Memoized square: {squaredValue}</p>
            <p>
              Typing in the text input updates state, but the slow calculation
              only re-runs when the number changes.
            </p>
          </div>
        </Section>

        <Section
          title="8. React Custom Hooks"
          description="A custom hook is a reusable function that starts with 'use' and can use other hooks inside it. It helps you share logic across components."
          code={`function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = () => setValue((prev) => !prev);
  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);

  return { value, toggle, setTrue, setFalse };
}

const modal = useToggle(false);`}
        >
          <div style={outputBoxStyle}>
            <p>Modal status: {modal.value ? "Open" : "Closed"}</p>
            <button style={buttonStyle} onClick={modal.toggle}>
              Toggle
            </button>
            <button style={buttonStyle} onClick={modal.setTrue}>
              Open
            </button>
            <button style={buttonStyle} onClick={modal.setFalse}>
              Close
            </button>
          </div>
        </Section>
      </div>
    </ThemeContext.Provider>
  );
}

/* ------------------------------------------------------------------ */
/* Styles */
/* ------------------------------------------------------------------ */

const codeStyle: React.CSSProperties = {
  background: "#1e1e1e",
  color: "#d4d4d4",
  padding: 16,
  borderRadius: 8,
  maxWidth: 900,
  overflowX: "auto",
  lineHeight: 1.5,
};

const outputStyle: React.CSSProperties = {
  marginTop: 10,
  padding: 12,
  border: "1px solid #ccc",
  borderRadius: 6,
  maxWidth: 900,
};

const outputBoxStyle: React.CSSProperties = {
  padding: 8,
};

const inputStyle: React.CSSProperties = {
  padding: "10px 12px",
  border: "1px solid #ccc",
  borderRadius: 6,
  width: 260,
};

const buttonStyle: React.CSSProperties = {
  marginRight: 10,
  marginTop: 10,
  padding: "8px 14px",
  border: "none",
  borderRadius: 6,
  background: "#2563eb",
  color: "#fff",
  cursor: "pointer",
};

export default ReactHooksGuide;
