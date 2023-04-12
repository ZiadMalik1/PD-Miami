import React from "react";
import { BsArrowRight } from "react-icons/bs";
<<<<<<< Updated upstream
import { IoLocationOutline } from "react-icons/io5";
=======
>>>>>>> Stashed changes
import { Link } from "react-router-dom";
import classes from "./Locations.module.scss";

import BoraBoraJPG from "./../../assets/images/Background_4.jpg";
<<<<<<< Updated upstream
=======
import ASDAImg from "./../../assets/images/Photos/3.jpg";
import ChangeMakers from "./../../assets/images/Photos/ChangeMakers.jpg";
import Heal from "./../../assets/images/Photos/Heal.JPG";
import NCNW from "./../../assets/images/Photos/NCNW.png";
import PreDental from "./../../assets/images/Photos/PreDental.PNG";
import Wih from "./../../assets/images/Photos/WhoIsHussain.png";
>>>>>>> Stashed changes

const locationData = [
  {
    id: 1,
    location: "PD Miami",
    isFeatured: true,
    img: BoraBoraJPG,
  },
  {
    id: 2,
    location: "PD Miami",
    isFeatured: true,
    img: BoraBoraJPG,
  },
  {
    id: 3,
    location: "PD Miami",
    isFeatured: true,
    img: BoraBoraJPG,
  },
  {
    id: 4,
    location: "PD Miami",
    isFeatured: true,
    img: BoraBoraJPG,
  },
  {
    id: 5,
    location: "PD Miami",
    isFeatured: true,
    img: BoraBoraJPG,
  },
  {
    id: 6,
<<<<<<< Updated upstream
    location: "PD Miami",
    isFeatured: true,
    img: BoraBoraJPG,
=======
    location: "National Council of Negro Women",
    link: "https://ncnw.org",
    isFeatured: false,
    img: NCNW,
>>>>>>> Stashed changes
  },
  {
    id: 7,
    location: "PD Miami",
    isFeatured: true,
    img: BoraBoraJPG,
  },
  {
    id: 8,
    location: "PD Miami",
    isFeatured: true,
    img: BoraBoraJPG,
  },
  {
    id: 9,
    location: "PD Miami",
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
