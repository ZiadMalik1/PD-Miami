import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../UI/Button/Button";
import classes from "./Navbar.module.scss";

const Navbar = ({ isMenu, menuToggle, onClick }) => {
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
      <nav className={isMenu ? classes.menu__nav : classes.nav}>
        <ul>
          <li onClick={menuToggle}>
            <Link to="/pricing">Gallery</Link>
          </li>
          <li onClick={menuToggle}>
            <Link to="/learn-more">Learn More</Link>
          </li>
        </ul>
        <Button className={classes.booknow} onClick={onClick}>
          Donate
        </Button>
      </nav>
    </>
  );
};

export default Navbar;
