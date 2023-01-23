import React from "react";
import CardItem from "./CardItem";
import Image from "../../images/background.jpg";
import Slideshow from "../Slideshow/Slideshow";
import image4 from "../../images/Photos/4.jpg";
import "./Cards.scss";
import Button from "../Button/Button";

const Cards = () => {
  return (
    <div className="cards">
      <div className="about__container">
        <div className="about__description">
          <p className="title">About Us</p>
          <h1>Join the PD Miami Family</h1>
          <p>
            We are a nonprofit organization that provides necessary services to
            those who need it most in Downtown Miami, starting with providing
            food to the homeless, and eventually, with your continuous support,
            expanding to more significant and lasting services like clothing
            drives, and hygiene product distribution.
          </p>
          <Button buttonStyle="btn--navbar" buttonSize="btn--large">
            SPONSER AN EVENT
          </Button>
        </div>
        <div className="slide__container">
          <Slideshow className="slides" />
        </div>
      </div>
    </div>
  );
};

export default Cards;
