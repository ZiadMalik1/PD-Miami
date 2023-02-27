import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../../UI/Button/Button";
import classes from "./Navbar.module.scss";

const Navbar = ({ isMenu, menuToggle }) => {
  console.log(isMenu);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      {/* <nav className="navbar">
        <div className="socials-container">
          <div className="email-container">
            <i class="fa fa-envelope" aria-hidden="true"></i>
            <span>mchwihne@gmail.com</span>
          </div>
          <div className="social-links">
            <i class="fa-brands fa-instagram"></i>
            <p>|</p>
            <i class="fa-brands fa-facebook-f"></i>
            <p>|</p>
            <i class="fa-brands fa-linkedin-in"></i>
          </div>
        </div>
        <div className="navbar-container">
          <Link to={"/"} className="logo-container" onClick={closeMobileMenu}>
            <img src={Logo} className="logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Get Involved
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                The Board
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          {button && (
            <Button
              buttonSize="btn--large"
              buttonStyle="btn--navbar"
              onClick={setModalState}
            >
              Donate <i class="fa-solid fa-arrow-right"></i>
            </Button>
          )}
        </div>
      </nav> */}
      <nav className={isMenu ? classes.menu__nav : classes.nav}>
        <ul>
          <li onClick={menuToggle}>
            <a href="/">Locations</a>
          </li>
          <li onClick={menuToggle}>
            <a href="/">Donate</a>
          </li>
          <li onClick={menuToggle}>
            <a href="/">Learn More</a>
          </li>
        </ul>
        <Button className={classes.booknow} onClick={menuToggle}>
          Donate Now
        </Button>
      </nav>
    </>
  );
};

export default Navbar;
