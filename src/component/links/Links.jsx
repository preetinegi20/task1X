import React from "react";
import { NavLink } from "react-router-dom";
function Links() {
  return (
    <>
      {" "}
      <NavLink
        to="/"
        style={({ isActive }) => ({ color: isActive ? "orange" : "#fcfcfc" })}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => ({ color: isActive ? "orange" : "#fcfcfc" })}
      >
        About
      </NavLink>
      <NavLink
        to="/property"
        style={({ isActive }) => ({ color: isActive ? "orange" : "#fcfcfc" })}
      >
        Property
      </NavLink>
      <NavLink
        to="/blog"
        style={({ isActive }) => ({ color: isActive ? "orange" : "#fcfcfc" })}
      >
        Blog
      </NavLink>
      <NavLink
        to="/contact"
        style={({ isActive }) => ({
          color: isActive ? "orange" : "#fcfcfc",
        })}
      >
        Contact
      </NavLink>
    </>
  );
}

export default Links;
