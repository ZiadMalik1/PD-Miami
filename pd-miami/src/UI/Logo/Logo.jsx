import React from "react";
import LogoPD from "../../assets/Logo.png";
import classes from "./Logo.module.scss";

const Logo = () => {
  return (
    <a href="/" className={classes.logo}>
      <img src={LogoPD} alt="" />
    </a>
  );
};

export default Logo;
