import React from "react";
import { NavLink } from "react-router-dom";
import "./style/navigation.css"

function Navigation() {
  return (
    <div className="navigation">
      <nav>
        <div className="nav-bar">
          <ul>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
                <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/skills">
                Skills
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;