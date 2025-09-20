import { NavLink, useNavigate } from "react-router-dom";
import react from "../assets/react.svg";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <img src={react} alt="React Logo" width="40px" />
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/products">
          <li>Product</li>
        </NavLink>
        <NavLink to="/jobs">
          <li>Jobs</li>
        </NavLink>
        <NavLink to="/about">
          <li>About</li>
        </NavLink>
        <NavLink to="/contact">
          <li>Contact</li>
        </NavLink>
      </ul>
      <button
        onClick={() =>
          navigate("/about", {
            replace: true,
          })
        }
      >
        Get Started
      </button>
    </div>
  );
};

export default Navbar;
