import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import Logo from "../../assets/LogoFinal.png";

function NavBar() {
  return (
    <nav className="navbar">
      <img className="nav-logo" src={Logo} alt="" />
      <div>
        <ul className="navbarLink">
          <li>
            <Link to="/" className="navbarLink">
              Home
            </Link>
          </li>
          <li>
            <Link to="/top-product" className="navbarLink">
              Meilleur Produits
            </Link>
          </li>
        </ul>
        <h1 className="main-title">Wild Beauty</h1>
      </div>
    </nav>
  );
}

export default NavBar;
