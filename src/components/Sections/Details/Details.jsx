import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../UI/Button/Button";
import Map from "../../Map/Map";
import Slideshow from "../../Slideshow/Slideshow";
import classes from "./Details.module.scss";

const LearnDetails = () => {
  const location = {
    latitude: 25.772354,
    longitude: -80.197367,
  };

  const openInGoogleMaps = () => {
    window.open(
      `https://www.google.com/maps?q=${location.latitude},${location.longitude}`
    );
  };

  const openInAppleMaps = () => {
    window.open(
      `http://maps.apple.com/?ll=${location.latitude},${location.longitude}`
    );
  };

  return (
    <section className={classes.slideshow__section}>
      <div className={classes.slideshow__section__container}>
        <div className={classes.slideshow__section__container__learnContent}>
          <h5>Learn More</h5>
          <h2>Empowering Miami's Homeless Community</h2>
          <p>
            In its eighth verse, Surat al-Insan states “And they give food in
            spite of love for it to the needy, the orphan, and the captive.”
            Prophet Muhammad صلى الله عليه وسلم was stated to have quoted, “Feed
            the hungry, spread peace, speak kind words, and pray at night when
            people are sleeping. You will enter Paradise in peace.” A collection
            of students in Miami, Florida have taken these quotes to heart and
            began to feed the homeless weekly. Thus, Project Downtown Miami was
            formed. Going on almost 20 years, join Project Downtown Miami in its
            mission to secure weekly meals for the less fortunate, as well as
            provide necessary supplies to those that need them. Checkout the map
            to see where we're serving currently!
          </p>
        </div>
        <div className={classes.slideshow__section__container__slideshow}>
          <Map />
        </div>
      </div>
    </section>
  );
};

const HomeDetails = () => {
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
