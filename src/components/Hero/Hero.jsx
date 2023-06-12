import React from "react";
import Button from "../../UI/Button/Button";
import bannerImg from "../../assets/images/Background_3.jpg";
import classes from "./Hero.module.scss";

const HomePageContent = ({ onClick }) => {
  return (
    <>
      <span className={classes.hero__content__tagline}>
        Giving back to our community
      </span>
      <h1 className={classes.hero__content__title}>Project Downtown Miami</h1>
      <p className={classes.hero__content__description}>
        Coming together to provide services for the betterment of the
        underserved community in Miami, FL
      </p>
      <div className={classes.hero__content__cta}>
        <Button onClick={onClick}>Donate</Button>
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
const Content = ({ children }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

const HeroSection = ({ pageName, onClick, children }) => {
  return (
    <>
      <div className={classes.container}>
        <img className={classes.image} id={"image"} src={bannerImg} alt="" />
        <div className={classes.hero}>
          <div className={classes.hero__content}>
            {!pageName && <HomePageContent onClick={onClick} />}
            {pageName === "learn" && <LearnPageContent />}
            {children && <Content children={children} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
