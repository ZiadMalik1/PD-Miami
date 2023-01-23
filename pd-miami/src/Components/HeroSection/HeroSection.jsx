import React from "react";
import Button from "../Button/Button";
import "./HeroSection.scss";
const HeroSection = () => {
  return (
    <>
      <div className="overlay"></div>
      <div className="hero-container">
        <div className="titles-container">
          <h2>"Giving is Miami's way of living"</h2>
          <h1 className="title">Project Downtown Miami</h1>
          <p>
            Coming together as a community
          </p>
        </div>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Get to Know us! <i className="far fa-play-circle"></i>
          </Button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
