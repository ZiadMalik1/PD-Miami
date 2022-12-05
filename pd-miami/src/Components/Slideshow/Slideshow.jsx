import React from "react";
import "./Slideshow.scss";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";
import image1 from "../../images/Photos/1.jpg";
import image2 from "../../images/Photos/2.jpg";
import image3 from "../../images/Photos/3.jpg";
import image4 from "../../images/Photos/4.jpg";
import image5 from "../../images/Photos/5.jpg";

const photos = [image1, image2, image3, image4, image5];

const Slideshow = () => {
  return (
    <>
      <div className="carousel-container">
        <Carousel
          autoPlay={true}
          timer={400}
          animation={"fade"}
          indicators={false}
          timeout={800}
          navButtonsAlwaysVisible={false}
        >
          {photos.map((photo) => {
            return <Item img={photo}></Item>;
          })}
        </Carousel>
      </div>
    </>
  );
};

export default Slideshow;
