
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>🎮 GameZone</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/tournaments">Tournaments</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;
