import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import { default as React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PaymentSuccess.scss";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }, []);
  return (
    <>
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
    </>
  );
};

export default PaymentSuccess;
