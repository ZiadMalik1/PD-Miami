import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { FaTooth } from "react-icons/fa";
import { Link } from "react-router-dom";
import classes from "./Locations.module.scss";

import BoraBoraJPG from "./../../assets/images/Background_4.jpg";
import ASDAImg from "./../../assets/images/Photos/3.jpg";
import ChangeMakers from "./../../assets/images/Photos/ChangeMakers.jpg";
import Wih from "./../../assets/images/Photos/WhoIsHussain.png";
import PreDental from "./../../assets/images/Photos/PreDental.PNG";
import Heal from "./../../assets/images/Photos/Heal.JPG";
import NCNW from "./../../assets/images/Photos/NCNW.png";

const locationData = [
  {
    id: 1,
    location: "American Student Dental Association",
    isFeatured: true,
    link: "https://fiu.campuslabs.com/engage/organization/asdafiu",
    img: ASDAImg,
  },
  {
    id: 2,
    location: "Change Makers Florida",
    isFeatured: true,
    link: "https://www.instagram.com/changemakersfl/",
    img: ChangeMakers,
  },
  {
    id: 3,
    location: "Who is Hussain",
    isFeatured: true,
    link: "https://whoishussain.org",
    img: Wih,
  },
  {
    id: 4,
    location: "Pre-Dental FIU",
    isFeatured: false,
    link: "https://www.instagram.com/predentalfiu/",
    img: PreDental,
  },
  {
    id: 5,
    location: "H.E.A.L FIU",
    isFeatured: false,
    link: "https://fiuheal.wixsite.com/heal-fiu",
    img: Heal,
  },
  {
    id: 6,
    location: "National Council of Negro Women",
    isFeatured: false,
    img: NCNW,
  },
  {
    id: 7,
    location: "PD Miami",
    isFeatured: false,
    img: BoraBoraJPG,
  },
  {
    id: 8,
    location: "PD Miami",
    isFeatured: false,
    img: BoraBoraJPG,
  },
  {
    id: 9,
    location: "PD Miami",
    isFeatured: false,
    img: BoraBoraJPG,
  },
];

const Locations = ({ page }) => {
  const mapData = !page ? locationData.slice(0, 6) : locationData;
  return (
    <div className={classes.container}>
      <div className={`${classes.locations} ${page ? classes.page : ""}`}>
        <div className={classes.locations__content}>
          <h2 className={classes.locations__content__title}>Partners</h2>
          <div className={classes.locations__content__gallery}>
            {mapData.map(({ id, location, isFeatured, link, img, icon }) => (
              <div
                className={classes.gallery__item}
                key={id}
                onClick={() => window.open(link, "__blank")}
              >
                <img
                  src={img}
                  alt={location}
                  className={classes.gallery__item__img}
                />
                <div className={classes.overlay} />
                <div className={classes.gallery__item__content}>
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
