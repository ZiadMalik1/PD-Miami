import React from "react";
import ContactUs from "../../components/ContactUs/ContactUs";
import Hero from "../../components/Hero/Hero";
import Details from "../../components/Sections/Details/Details";
import useScrollToTop from "../../hooks/useScrollToTop";
import classes from "./LearnMore.module.scss";

const LearnMore = () => {
  useScrollToTop();
  return (
    <>
      <Hero pageName={"learn"}></Hero>
      <div className={classes.container}>
        <Details pageName={"learn"} />
        <ContactUs />
      </div>
    </>
  );
};

export default LearnMore;
