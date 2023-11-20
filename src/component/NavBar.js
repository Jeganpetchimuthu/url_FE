import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav">
      <ul className="flex">
        <li className="content1">
          <button className="btn">Home</button>
        </li>
        <li className="content">
          <Link to="/">
            <button className="btn">SignUp</button>
          </Link>
        </li>
        <li className="content">
          <button className="btn">Login</button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
