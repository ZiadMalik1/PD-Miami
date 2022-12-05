import React from "react";
import Button from "../Button/Button";
import "./HeroSection.scss";
import Socialbar from "../Socialbar/Socialbar";
const HeroSection = () => {
  return (
    <>
      <div className="overlay"></div>
      <div className="background"></div>
      <div className="hero-container">
        <h1 className="title">Project Downtown Miami</h1>
        <p>
          Coming together as a community to give back to the streets of Miami
        </p>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Donate Now
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--primary"
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
