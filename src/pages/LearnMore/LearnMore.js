import ContactUs from "../../components/ContactUs/ContactUs";
import Hero from "../../components/Hero/Hero";
import Details from "../../components/Sections/Details/Details";
import useScrollToTop from "../../hooks/useScrollToTop";
import classes from "./LearnMore.module.scss";
import React, { useEffect } from "react";
import { Element, scroller } from "react-scroll";
import { useLocation } from "react-router-dom";

const LearnMore = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if the hash parameter exists and scroll to the target component using react-scroll
    const hash = location.hash.slice(1); // Remove the '#' character from the hash
    if (hash) {
      scroller.scrollTo(hash, {
        smooth: true,
        offset: -200, // Offset from the top when scrolling to the component (optional)
        duration: 300, // Scroll duration in milliseconds
      });
    }
  }, [location.hash]);
  useScrollToTop();
  return (
    <>
      <Hero pageName={"learn"}></Hero>
      <div className={classes.container}>
        <Details pageName={"learn"} />
        <Element name="targetComponent">
          {/* Content of the component to scroll to */}
          <ContactUs />
        </Element>
      </div>
    </>
  );
};

export default LearnMore;
