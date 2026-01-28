import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Main Page</h1>

      <nav>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
