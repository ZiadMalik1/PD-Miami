import React from "react";
import classes from "./Button.module.scss";

const STYLES = [
  "btn--primary",
  "btn--outline",
  "btn--secondary",
  "btn--secondary--outline",
  "btn--navbar",
  "btn--donation",
];

const SIZES = ["btn--small", "btn--medium", "btn--large"];

const Button = ({ outline, children, onClick }) => {
  // const checkButtonStyle = STYLES.includes(buttonStyle)
  //   ? buttonStyle
  //   : STYLES[0];

  // const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <>
      <button onClick={onClick} className={`${classes.button} ${outline ? classes.outline : ""}`}>
        {children}
      </button>
    </>
  );
};

export default Button;
