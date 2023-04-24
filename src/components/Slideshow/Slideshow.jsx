import React from "react";
import image1 from "../../assets/images/Slideshow/1.jpg";
import image2 from "../../assets/images/Slideshow/2.jpg";
import image3 from "../../assets/images/Slideshow/3.jpg";
import image4 from "../../assets/images/Slideshow/4.jpg";
import image5 from "../../assets/images/Slideshow/5.jpg";
import "./Slideshow.scss";

const photos = [image1, image2, image3, image4, image5];

const Slideshow = () => {
  return (
    <>
      <div id="slider">
        <figure>
          <img src={image1} alt />
          <img src={image2} alt />
          <img src={image3} alt />
          <img src={image4} alt />
          <img src={image5} alt />
        </figure>
      </div>
    </>
  );
};

export default Slideshow;
