import React from "react";
import Button from "../Button/Button";
import "./Amount.scss";

//Commit

const Amount = ({ setAmount }) => {
  const setDonationAmount = (amount) => {
    setAmount(amount);
  };

  return (
    <>
      <div className="payment-container">
        <div className="amount-row">
          <Button
            buttonSize={"btn--large"}
            buttonStyle={"btn--navbar"}
            onClick={() => setDonationAmount(5)}
          >
            <div className="amount">
              <p>$5.00</p>
            </div>
          </Button>
          <Button
            buttonSize={"btn--large"}
            buttonStyle={"btn--navbar"}
            onClick={() => setDonationAmount(10)}
          >
            <div className="amount">
              <p>$10.00</p>
            </div>
          </Button>
        </div>
        <div className="amount-row">
          <Button
            buttonSize={"btn--large"}
            buttonStyle={"btn--navbar"}
            onClick={() => setDonationAmount(25)}
          >
            <div className="amount">
              <p>$25.00</p>
            </div>
          </Button>
          <Button
            buttonSize={"btn--large"}
            buttonStyle={"btn--navbar"}
            onClick={() => setDonationAmount(50)}
          >
            <div className="amount">
              <p>$50.00</p>
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Amount;
