import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import { default as React } from "react";
import Hero from "../../components/Hero/Hero";
import useScrollToTop from "../../hooks/useScrollToTop";
import "./PaymentSuccess.scss";

const PaymentSuccess = () => {
  useScrollToTop();

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
