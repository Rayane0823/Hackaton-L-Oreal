import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./NavBar.scss";

function NavBar({ transparent }) {
  return (
    <nav className={`navbar ${transparent}`}>
      <ul className="navbarLink">
        <li>
          <Link to="/" className="navbarLink">
            Product
          </Link>
        </li>
        <li>
          <Link to="/" className="navbarLink">
            Top Product
          </Link>
        </li>
      </ul>
    </nav>
  );
}
NavBar.propTypes = {
  transparent: PropTypes.string.isRequired,
};

export default NavBar;
