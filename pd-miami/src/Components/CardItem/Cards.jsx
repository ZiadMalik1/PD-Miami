import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../UI/Button/Button";
import "./Cards.scss";

const Cards = () => {
  const navigate = useNavigate();
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
          <Button>Sponser an Event</Button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
