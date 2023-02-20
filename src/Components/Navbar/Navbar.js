import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";
var sectionStyle = {
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};
function Navbar() {
  return (
    <section style={sectionStyle}>
      <header>
        <div className="container">
          <span className="header-title-span">
            <h1 className="header-title">
              PAGE<span className="red-text">404</span>
            </h1>
          </span>
        </div>

        <nav>
          <Link to="/signup" className="nav-link">
            Sign Up
          </Link>
          <Link to="/signup" className="nav-link">
            What is this
          </Link>
          <Link to="/signup" className="nav-link">
            Try it
          </Link>
        </nav>
      </header>
    </section>
  );
}
export default Navbar;
