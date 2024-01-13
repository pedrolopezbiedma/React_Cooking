import { Link } from "react-router-dom";

// Styles
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking Site</h1>
        </Link>
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
};

export default Navbar;
