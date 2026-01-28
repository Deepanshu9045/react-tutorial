import { Routes, Route } from "react-router-dom";
import Layout from "./Layout"; // Import the layout we just made
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";

function App() {
  <h1>My Dashboard</h1>
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* These children will render inside the <Outlet /> */}
        <index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Services />} />
      </Route>
    </Routes>
  );
}

export default App;