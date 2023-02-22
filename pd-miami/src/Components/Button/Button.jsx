import React from "react";
import "./Button.scss";

const STYLES = [
  "btn--primary",
  "btn--outline",
  "btn--secondary",
  "btn--secondary--outline",
  "btn--navbar",
  "btn--donation",
];

const SIZES = ["btn--small", "btn--medium", "btn--large"];

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
