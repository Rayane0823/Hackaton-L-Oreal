import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import Logo from "../../assets/logonav.png";

function NavBar() {
  return (
    <nav className="navbar">
      <section className="header">
        <img className="nav-logo" src={Logo} alt="" />
        <section className="test">
          <div className="navbarLinkContainer">
            <ul className="navbarLink">
              <li className="link">
                <Link to="/" className="navbarLink">
                  Accueil
                </Link>
              </li>
              <li className="link">
                <Link to="/top-product" className="navbarLink">
                  Top Produits
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </section>
      <h1 className="main-title">Wild Beauty</h1>
    </nav>
  );
}

export default NavBar;
