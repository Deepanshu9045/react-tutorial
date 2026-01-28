import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "sans-serif" }}>
      {/* SIDEBAR */}
      <nav style={{
        width: "260px",
        backgroundColor: "#1a1a1a",
        color: "white",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px"
      }}>
        <h2 style={{ marginBottom: "30px", fontSize: "1.5rem" }}>My Dashboard</h2>
        <Link to="/" style={navLinkStyle}>Home</Link>
        <Link to="/services" style={navLinkStyle}>Services</Link>
        <Link to="/about" style={navLinkStyle}>About</Link>
        <Link to="/contact" style={navLinkStyle}>Contact</Link>
      </nav>

      {/* RIGHT SIDE CONTENT */}
      <main style={{ flex: 1, padding: "40px", backgroundColor: "#f4f7f6", overflowY: "auto" }}>
        <div style={{ 
          backgroundColor: "white", 
          padding: "30px", 
          borderRadius: "12px", 
          boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
          minHeight: "80vh" 
        }}>
          <Outlet /> 
        </div>
      </main>
    </div>
  );
};

const navLinkStyle = {
  color: "#ccc",
  textDecoration: "none",
  padding: "12px 15px",
  borderRadius: "8px",
  transition: "0.3s",
  fontSize: "1rem",
  fontWeight: "500"
};

export default Layout;