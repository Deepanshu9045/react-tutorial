import React, { useState } from "react";

function ReactFormSElements() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState("");

  const [message, setMessage] = useState("");
  const [city, setCity] = useState("Delhi");

  const [form, setForm] = useState({
    name: "",
    age: "",
  });

  const [agree, setAgree] = useState(false);
  const [gender, setGender] = useState("");

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

    {
      title: "2. Textarea",
      description: "Textarea is also controlled using value + onChange.",
      code: `<textarea value={message} onChange={(e) => setMessage(e.target.value)} />`,
      output: (
        <div>
          <textarea
            placeholder="Enter message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <p>Message: {message}</p>
        </div>
      ),
    },

    {
      title: "3. Select",
      description: "Select dropdown works like input.",
      code: `<select value={city} onChange={(e) => setCity(e.target.value)} />`,
      output: (
        <div>
          <select value={city} onChange={(e) => setCity(e.target.value)}>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
          </select>
          <p>Selected: {city}</p>
        </div>
      ),
    },

    {
      title: "4. Multiple Input Fields",
      description: "Store multiple fields inside one state object.",
      code: `setForm({ ...form, [e.target.name]: e.target.value });`,
      output: (
        <div>
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
          />
          <input
            name="age"
            placeholder="Age"
            value={form.age}
            onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
          />
          <p>
            Name: {form.name}, Age: {form.age}
          </p>
        </div>
      ),
    },

    {
      title: "5. Checkbox",
      description: "Checkbox uses checked instead of value.",
      code: `<input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />`,
      output: (
        <div>
          <label>
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            Accept Terms
          </label>
          <p>Status: {agree ? "Accepted" : "Not Accepted"}</p>
        </div>
      ),
    },

    {
      title: "6. Radio Buttons",
      description: "Only one option can be selected.",
      code: `setGender(e.target.value);`,
      output: (
        <div>
          <label>
            <input
              type="radio"
              value="Male"
              checked={gender === "Male"}
              onChange={(e) => setGender(e.target.value)}
            />
            Male
          </label>

          <label style={{ marginLeft: 10 }}>
            <input
              type="radio"
              value="Female"
              checked={gender === "Female"}
              onChange={(e) => setGender(e.target.value)}
            />
            Female
          </label>

          <p>Selected: {gender}</p>
        </div>
      ),
    },
  ];

  return (
    <div style={{ padding: 32, fontFamily: "Arial" }}>
      <h1>React Form Elements</h1>

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

export default ReactFormSElements;
