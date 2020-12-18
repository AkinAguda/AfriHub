import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/svgs/Vector.svg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <img src={Logo} alt="Logo" />
        <h2 className="navbar__title">
          afri<span>hub</span>
        </h2>
      </div>
      <div className="navbar__right">
        <a>Publications</a>
        <a>Contact</a>
        <a className="navbar__btn">Register</a>
      </div>
    </div>
  );
}

export default Navbar;
