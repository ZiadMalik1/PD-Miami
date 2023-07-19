import React, { useEffect, useState } from "react";
import image1 from "../../assets/images/Slideshow/1.jpg";
import image2 from "../../assets/images/Slideshow/2.jpg";
import image3 from "../../assets/images/Slideshow/3.jpg";
import image4 from "../../assets/images/Slideshow/4.jpg";
import image5 from "../../assets/images/Slideshow/5.jpg";
import image6 from "../../assets/images/PD-MIA-12.31.22/10.jpg";
import image7 from "../../assets/images/PD-MIA-12.31.22/11.jpg";
import image8 from "../../assets/images/PD-MIA-12.31.22/12.jpg";
import image9 from "../../assets/images/PD-MIA-12.31.22/13.jpg";
import image10 from "../../assets/images/PD-MIA-12.31.22/14.jpg";
import classes from "./Slideshow.module.scss";

const Slideshow = ({ learn }) => {
  const images = [image1, image2, image3, image4, image5];
  const images1 = [image6, image7, image8, image9, image10];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={classes.imageContainer}>
      {learn
        ? images1.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className={`${classes.image} ${
                index === currentImage ? classes.active : classes.hidden
              }`}
            />
          ))
        : images.map((image, index) => (
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
