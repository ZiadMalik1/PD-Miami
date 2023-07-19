import React from "react";
import { Link } from "react-scroll";
import Button from "../../UI/Button/Button";
import bannerImg from "../../assets/images/Background_3.jpg";
import classes from "./Hero.module.scss";

const HomePageContent = ({ onClick }) => {
  return (
    <>
      <span className={classes.hero__content__tagline}>
        Empowering Communities Through Compassion
      </span>
      <h1 className={classes.hero__content__title}>Project Downtown Miami</h1>
      <p className={classes.hero__content__description}>
        Be the change Downtown Miami needs. Join us in the fight against food
        insecurity. Your support matters.
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

const LearnPageContent = ({ onClick }) => {
  return (
    <>
      <span className={classes.hero__content__tagline}>
        Discover the Power of Community
      </span>
      <h1 className={classes.hero__content__title}>Learn More</h1>
      <p className={classes.hero__content__description}>
        Unleashing Hope, Inspiring Change: Delve Deeper into the Remarkable
        Story of Project Downtown Miami
      </p>
      <div className={classes.hero__content__cta}>
        <Link
          activeClass="active"
          to="sectionToScrollTo"
          spy={true}
          smooth={true}
          offset={-200} // Offset from the top when scrolling to the section (optional)
          duration={200} // Scroll duration in milliseconds
        >
          <Button>Get in Touch</Button>
        </Link>
      </div>
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
