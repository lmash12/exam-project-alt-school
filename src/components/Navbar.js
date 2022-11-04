import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navBar">
      <div className="nav-list">
        <ul className="ul-list">
          <li>
            <NavLink aria-label="Home page"
              style={({ isActive }) =>
                isActive ? { color: "red" } : { color: "#FDF208" }
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink aria-label="Repositories"
              style={({ isActive }) =>
                isActive ? { color: "red" } : { color: "#FDF208" }
              }
              to="/repositories"
            >
              Repositories
            </NavLink>
          </li>
          <li>
            <NavLink aria-label="About Section"
              style={({ isActive }) =>
                isActive ? { color: "red" } : { color: "#FDF208" }
              }
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink aria-label="Contact Section"
              style={({ isActive }) =>
                isActive ? { color: "red" } : { color: "#FDF208" }
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
