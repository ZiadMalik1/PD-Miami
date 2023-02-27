import React from "react";
import bannerImg from "../../assets/images/Background_3.jpg";
import classes from "./Hero.module.scss";
import Button from "../../UI/Button/Button";
const HeroSection = () => {
  return (
    <>
      {/* <div className="overlay"></div>
      <div className="hero-container">
        <div className="titles-container">
          <h2>"Giving is Miami's way of living"</h2>
          <h1 className="title">Project Downtown Miami</h1>
          <p>Coming together as a community</p>
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
      </div> */}
      <div className={classes.container}>
        <img className={classes.image} id={"image"} src={bannerImg} alt="" />
        <div className={classes.hero}>
          <div className={classes.hero__content}>
            <h1 className={classes.hero__content__title}>
              Project Downtown Miami
            </h1>
            <span className={classes.hero__content__tagline}>
              Giving back to the Streets of Miami
            </span>
            <p className={classes.hero__content__description}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
              doloremque deleniti quo maiores aliquam mollitia amet.
            </p>
            <div className={classes.hero__content__cta}>
              <Button>Donate Now</Button>
              <Button outline>Sponser an Event</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
