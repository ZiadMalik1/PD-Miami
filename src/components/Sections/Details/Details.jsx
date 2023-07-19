import React from "react";
import { useHistory } from "react-router-dom";
import * as Scroll from "react-scroll";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import Button from "../../../UI/Button/Button";
import Slideshow from "../../Slideshow/Slideshow";
import classes from "./Details.module.scss";

const LearnDetails = () => {
  return (
    <section className={classes.slideshow__section}>
      <div className={classes.slideshow__section__container}>
        <div className={classes.slideshow__section__container__learnContent}>
          <h5>Learn More</h5>
          <h2>Empowering Miami's Homeless Community</h2>
          <p>
            At Project Downtown Miami, we are a compassionate non-profit
            organization. Our mission is to provide essential resources like
            food, clothing, and hygiene supplies to the homeless community in
            downtown Miami. With the help of our dedicated team and volunteers,
            we strive to bring comfort and support to those in need. Join us in
            making a positive impact and creating a brighter future for the
            homeless population in our city.
          </p>
        </div>
        <div className={classes.slideshow__section__container__slideshow}>
          <Slideshow
            className={classes.slideshow__section__container__slideshow__slide}
          />
        </div>
      </div>
    </section>
  );
};

const HomeDetails = () => {
  const handleLinkClick = (event) => {
    // Perform smooth scroll after navigating to the target page
    scroll.scrollTo("targetComponent", {
      smooth: true,
      offset: -200, // Offset from the top when scrolling to the component (optional)
      duration: 500, // Scroll duration in milliseconds
    });
  };

  return (
    <section className={classes.slideshow__section}>
      <div className={classes.slideshow__section__container}>
        <div className={classes.slideshow__section__container__slideshow}>
          <Slideshow
            className={classes.slideshow__section__container__slideshow__slide}
          />
        </div>
        <div className={classes.slideshow__section__container__homeContent}>
          <h5>About Us</h5>
          <h2>Nourishing Downtown Miami Together</h2>
          <p>
            Project Downtown Miami is a non-profit organization dedicated to
            combating food insecurity in Downtown Miami. Through our efforts, we
            provide essential meals to the homeless and less fortunate members
            of our community. With the support of our passionate volunteers and
            generous donors, we aim to expand our services and create a lasting
            impact on those in need.
          </p>
          <Link to="/learn-more#targetComponent">
            <Button alt>Host a Service</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const Details = ({ pageName }) => {
  return (
    <>
      {!pageName && <HomeDetails />}
      {pageName === "learn" && <LearnDetails />}
    </>
  );
};

export default Details;
