import React from "react";
import LogoPD from "../../assets/Logo.png";
import classes from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={classes.logo}>
      <a href="/">
        <img src={LogoPD} alt="" />
      </a>
    </div>
  );
};

export default Logo;
