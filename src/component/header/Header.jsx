import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/logo";
import Links from "../links/Links";
import Contact from "../contact/Contact";
import Signin from "../signIn/Signin";
function Header() {
  const menuDisplay = () => {
    let navlist = document.getElementsByClassName("navlist")[0];
  };
  return (
    <>
      <div className="main-container">
        <div className="listItems">
          <div className="hem" onClick={menuDisplay}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <Logo />
          <nav className="nav navlist">
            <div className="links">
              <Links />
            </div>
            <div className="contact">
              <Contact />
              <Signin />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
