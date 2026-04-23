import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Images/Logoilparco.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar__container container">
        <Link to="/" className="navbar__logo">
          <img src={logo} alt="Il Parco Cafe Logo" className="navbar__logo" />
        </Link>

        <div className={`navbar__links ${isOpen ? "navbar__links--open" : ""}`}>
          <Link
            to="/"
            className="navbar__link"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/menu"
            className="navbar__link"
            onClick={() => setIsOpen(false)}
          >
            Menu
          </Link>
          <Link
            to="/about"
            className="navbar__link"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
        </div>

        <button
          className={`navbar__hamburger ${isOpen ? "navbar__hamburger--open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="navbar__hamburger-line"></span>
          <span className="navbar__hamburger-line"></span>
          <span className="navbar__hamburger-line"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
