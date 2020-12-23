import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/svgs/Vector.svg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <Link to="/" className="navbar__left">
          <img src={Logo} alt="Logo" />
          <h2 className="navbar__title">
            afri<span>hub</span>
          </h2>
        </Link>
      </div>
      <div className="navbar__right">
        <Link to="/articles">
          <a href>Articles</a>
        </Link>
        <Link to="/communities">
          <a href>Community</a>
        </Link>
        <Link to="/contact">
          <a href>Contact</a>
        </Link>
        <Link to="/register" className="navbar__btn">
          <a className="navbar__btn" href>
            Register
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
