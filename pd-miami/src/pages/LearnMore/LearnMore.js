import React from "react";
import Button from "../../UI/Button/Button";
import Hero from "../../components/Hero/Hero";
import Slideshow from "../../components/Slideshow/Slideshow";
import useScrollToTop from "../../hooks/useScrollToTop";
import classes from "./LearnMore.module.scss";

const LearnMore = () => {
  useScrollToTop();
  return (
    <>
      <Hero pageName={"learn"}></Hero>
      <div className={classes.container}>
        <div className={classes.photos}>
          <div className={classes.photos__content}>
            <h2 className={classes.photos__content__title}>Who are we?</h2>
            <div className={classes.photos__content__gallery}>
              <div className={classes.photos__content__gallery__learn}>
                <div className={classes.photos__content__gallery__learn__title}>
                  <h3
                    className={
                      classes.photos__content__gallery__learn__title__subtitle
                    }
                  >
                    About Us
                  </h3>
                  <h2
                    className={classes.photos__content__gallery__learn__title}
                  >
                    Our Mission
                  </h2>
                  <p>Join the PD Miami Family!</p>
                </div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
                reprehenderit quis minus officia natus aspernatur labore quae
                earum eos harum doloribus, magnam culpa consectetur, ex dolor
                aut possimus consequatur sapiente nesciunt placeat fugiat?
                Voluptates assumenda dolorum nisi officia pariatur, veniam
                asperiores culpa eos quas praesentium quia facere dolores
                placeat error similique ea maiores? Sed doloremque ullam
                corporis natus ducimus nulla velit minus, cum mollitia rerum
                facilis eum vero ipsam non, reiciendis quas totam voluptatum
                facere quisquam soluta provident itaque. Dolorem laboriosam odio
                <span
                  className={
                    classes.photos__content__gallery__learn__title__button
                  }
                >
                  <Button
                    to="/donate"
                    alt={true}
                    outline={true}
                    className={classes.booknow}
                  >
                    Donate
                  </Button>
                </span>
              </div>
              <div className={classes.photos__content__gallery__slideshow}>
                <Slideshow />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnMore;
