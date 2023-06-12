import React, { useEffect, useState } from "react";
import image1 from "../../assets/images/Slideshow/1.jpg";
import image2 from "../../assets/images/Slideshow/2.jpg";
import image3 from "../../assets/images/Slideshow/3.jpg";
import image4 from "../../assets/images/Slideshow/4.jpg";
import image5 from "../../assets/images/Slideshow/5.jpg";
import classes from "./Slideshow.module.scss";

const Slideshow = () => {
  const images = [image1, image2, image3, image4, image5];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={classes.imageContainer}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className={`${classes.image} ${
            index === currentImage ? classes.active : classes.hidden
          }`}
        />
      ))}
    </div>
  );
};

export default Slideshow;
