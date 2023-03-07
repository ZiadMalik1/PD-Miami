import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import classes from "./Locations.module.scss";

import BoraBoraJPG from "./../../assets/images/Background_4.jpg";

const locationData = [
  {
    id: 1,
    location: "Bora Bora",
    isFeatured: true,
    img: BoraBoraJPG,
  },
  {
    id: 2,
    location: "Bora Bora",
    isFeatured: true,
    img: BoraBoraJPG,
  },
  {
    id: 3,
    location: "Bora Bora",
    isFeatured: true,
    img: BoraBoraJPG,
  },
  {
    id: 4,
    location: "Bora Bora",
    isFeatured: true,
    img: BoraBoraJPG,
  },
  {
    id: 5,
    location: "Bora Bora",
    isFeatured: true,
    img: BoraBoraJPG,
  },
  {
    id: 6,
    location: "Bora Bora",
    isFeatured: true,
    img: BoraBoraJPG,
  },
  {
    id: 7,
    location: "Bora Bora",
    isFeatured: true,
    img: BoraBoraJPG,
  },
  {
    id: 8,
    location: "Bora Bora",
    isFeatured: true,
    img: BoraBoraJPG,
  },
  {
    id: 9,
    location: "Bora Bora",
    isFeatured: true,
    img: BoraBoraJPG,
  },
];

const Locations = ({ page }) => {
  const mapData = !page ? locationData.slice(0, 6) : locationData;
  return (
    <div className={classes.container}>
      <div className={`${classes.locations} ${page ? classes.page : ""}`}>
        <div className={classes.locations__content}>
          <h2 className={classes.locations__content__title}>
            Discover a Tropic
          </h2>
          <div className={classes.locations__content__gallery}>
            {mapData.map(({ id, location, isFeatured, img }) => (
              <div className={classes.gallery__item} key={id}>
                <img
                  src={img}
                  alt={location}
                  className={classes.gallery__item__img}
                />
                <div className={classes.overlay} />
                <div className={classes.gallery__item__content}>
                  <IoLocationOutline />
                  <h2 className={classes.gallery__item__content__location}>
                    {location}
                  </h2>
                </div>
                {isFeatured && (
                  <div className={classes.gallery__item__tag}>Featured</div>
                )}
              </div>
            ))}
          </div>
          {!page && (
            <div className={classes.locations__content__viewmore}>
              <Link to="/locations">
                view more <BsArrowRight />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Locations;
