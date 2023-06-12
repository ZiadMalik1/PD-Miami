import React from "react";
import Button from "../../../UI/Button/Button";
import Slideshow from "../../Slideshow/Slideshow";
import classes from "./HomeDetails.module.scss";

const HomeDetails = () => {
  return (
    <section className={classes.slideshow__section}>
      <div className={classes.slideshow__section__container}>
        <div className={classes.slideshow__section__container__slideshow}>
          <Slideshow
            className={classes.slideshow__section__container__slideshow__slide}
          />
        </div>
        <div className={classes.slideshow__section__container__content}>
          <h5>About Us</h5>
          <h2>Battling Food Insecurity</h2>
          <p>
            We are a nonprofit organization that provides necessary services to
            those who need it most in Downtown Miami, starting with providing
            food to the homeless, and eventually, with your continuous support,
            expanding to more significant and lasting services like clothing
            drives, and hygiene product distribution.
          </p>
          <Button alt>Host a Service</Button>
        </div>
      </div>
    </section>
  );
};

export default HomeDetails;
