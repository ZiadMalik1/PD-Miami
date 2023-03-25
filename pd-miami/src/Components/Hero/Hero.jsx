import React from "react";
import Button from "../../UI/Button/Button";
import bannerImg from "../../assets/images/Background_3.jpg";
import classes from "./Hero.module.scss";

const HomePageContent = () => {
  return (
    <>
      <span className={classes.hero__content__tagline}>
        Giving back to our community
      </span>
      <h1 className={classes.hero__content__title}>Project Downtown Miami</h1>
      <p className={classes.hero__content__description}>
        Coming together to fulfill the mission to better the lives of those most
        at risk in the greater Miami area.
      </p>
      <div className={classes.hero__content__cta}>
        <Button to="/booknow">Donate Now</Button>
        <Button to="/learn-more" outline>
          Learn More
        </Button>
      </div>
    </>
  );
};

const LearnPageContent = () => {
  return (
    <>
      <span className={classes.hero__content__tagline}>Find out about us!</span>
      <h1 className={classes.hero__content__title}>Learn More</h1>
      <p className={classes.hero__content__description}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere beatae
        itaque ea ducimus, mollitia voluptate laudantium.
      </p>
    </>
  );
};

const HeroSection = ({ pageName, children }) => {
  return (
    <>
      <div className={classes.container}>
        <img className={classes.image} id={"image"} src={bannerImg} alt="" />
        <div className={classes.hero}>
          <div className={classes.hero__content}>
            {!pageName && <HomePageContent />}
            {pageName === "learn" && <LearnPageContent />}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
