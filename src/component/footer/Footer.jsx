import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/logo";
import Links from "../links/Links";
import Services from "../services/Services";
import Contact from "../contact/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="top-Container">
          <div className="container1">
            <div className="box">
              <Logo />
              <p className="disc"> We provide varieties of facility</p>
              <div className="social-icons"></div>
            </div>
          </div>
          <div className="container2">
            <h3>Navigations</h3>
            <div className="box">
              <Links />
            </div>
          </div>
          <div className="conatiner3">
            <h3>Services</h3>
            <div className="box">
              <Services />
            </div>
          </div>
          <div className="container4">
            <h3>Contact Us</h3>
            <div className="box">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
