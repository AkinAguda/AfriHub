import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Afrimap from "../../assets/svgs/map.svg";
import Facebook from "../../assets/svgs/Group 96.svg";
import Twitter from "../../assets/svgs/Group 98.svg";
import YouTube from "../../assets/svgs/Group 643.svg";
import Google from "../../assets/svgs/Group 640.svg";
import LinkedIn from "../../assets/svgs/Group 641.svg";
import Feeds from "../../assets/svgs/Group 642.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__left">
          <div className="footer__logo">
            <img src={Afrimap} alt="Afrihub map" />
            <h2 className="footer__title">afrihub</h2>
          </div>
          <p>
            Aimed at allowing access to articles and reseources for research all
            over the world
          </p>
          <div className="footer__social">
            <img src={Facebook} alt="facebook" />
            <img src={Twitter} alt="twitter" />
            <img src={YouTube} alt="youtube" />
            <img src={Google} alt="google" />
            <img src={LinkedIn} alt="linkedin" />
            <img src={Feeds} alt="feeds" />
          </div>
        </div>
        <div className="footer__second">
          <h2 className="footer__secondTitle">Important Links</h2>
          <div className="links">
            <Link to="/about">
              <a href>About</a>
            </Link>
            <Link to="/register">
              <a href>Register</a>
            </Link>
            <Link to="/community">
              <a href>Communities</a>
            </Link>
            <Link to="/stat">
              <a href>Statistics</a>
            </Link>
          </div>
        </div>
        <div className="footer__third">
          <h2 className="footer__thirdTitle">Languages</h2>
          <div className="links">
            <Link to="/yoruba">
              <a href>Yoruba</a>
            </Link>
            <Link to="/igbo">
              <a href>Igbo</a>
            </Link>
            <Link to="/edo">
              <a href>Edo</a>
            </Link>
            <Link to="/english">
              <a href>English</a>
            </Link>
            <Link to="/japanese">
              <a href>Japanese</a>
            </Link>
            <Link to="/chinese">
              <a href>Chinese</a>
            </Link>
          </div>
        </div>
        <div className="footer__right">
          <h2 className="footer__rightTitle">Support</h2>
          <div className="links">
            <Link to="/faq">
              <a href>FAQs</a>
            </Link>
            <Link to="/service">
              <a href>Service Center</a>
            </Link>
            <Link to="/support">
              <a href>Talk to Support</a>
            </Link>
            <Link to="/report">
              <a href>Report a Bug</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <h2 className="footer__text">Terms and Conditions</h2>
        <h2 className="footer__text">&copy; Afrihub</h2>
        <h2 className="footer__text">Privacy Policy</h2>
      </div>
    </div>
  );
}

export default Footer;
