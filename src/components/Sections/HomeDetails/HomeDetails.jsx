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
          <h2>Nourishing Downtown Miami Together</h2>
          <p>
            Project Downtown Miami is a non-profit organization dedicated to
            combating food insecurity in Downtown Miami. Through our efforts, we
            provide essential meals to the homeless and less fortunate members
            of our community. With the support of our passionate volunteers and
            generous donors, we aim to expand our services and create a lasting
            impact on those in need.
          </p>
          <Button alt>Host a Service</Button>
        </div>
      </div>
    </section>
  );
};

export default HomeDetails;
