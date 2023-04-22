import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import { default as React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../UI/Button/Button";
import Hero from "../../components/Hero/Hero";
import Slideshow from "../../components/Slideshow/Slideshow";
import useScrollToTop from "../../hooks/useScrollToTop";
import classes from "../LearnMore/LearnMore.module.scss";
import "./PaymentSuccess.scss";

const PaymentSuccess = () => {
  useScrollToTop();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, []);

  const successMessage = (
    <div className="container">
      <div className="message-container">
        <div className="message">
          <h1 className="head">Thank you!</h1>
          <h6 className="description">Your donation means alot to us.</h6>
        </div>
        <CheckCircleTwoToneIcon
          sx={{ fontSize: 60, color: "green", margin: 2 }}
        />
        <p>Redirecting you now...</p>
      </div>
    </div>
  );

  return (
    <>
      <Hero pageName={"success"} children={successMessage} />
    </>
  );
};

export default PaymentSuccess;
