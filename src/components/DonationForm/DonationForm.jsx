import React from "react";
import StripeContainer from "../StripeContainer/StripeContainer";
import classes from "./DonationForm.module.scss";

const DonationForm = ({ donation, setDonation }) => {
  const setDonationAmount = (amount) => {
    const donationAmount = Number(amount);
    if (donationAmount > 0) {
      setDonation({
        amount: donationAmount,
        setAmount: true,
      });
    }
  };

  return (
    <>
      {!donation.setAmount ? (
        <div className={classes.donation__container}>
          <div className={classes.donation__container__donation__box}>
            <div className={classes.donation__container__donation__box__fields}>
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
              ></input>
              <input type="text" id="lastName" placeholder="Last Name"></input>
              <input type="text" id="email" placeholder="Email"></input>
            </div>
            <div className={classes.donation__container__donation__box__amount}>
              <div
                className={
                  classes.donation__container__donation__box__amount__button
                }
                onClick={() => setDonationAmount(5)}
              >
                $5
              </div>
              <div
                className={
                  classes.donation__container__donation__box__amount__button
                }
                onClick={() => setDonationAmount(10)}
              >
                $10
              </div>
              <div
                className={
                  classes.donation__container__donation__box__amount__button
                }
                onClick={() => setDonationAmount(20)}
              >
                $20
              </div>
              <div
                className={
                  classes.donation__container__donation__box__amount__button
                }
              >
                $
                <input
                  type="number"
                  min="0.01"
                  step="0.01"
                  className={
                    classes.donation__container__donation__box__amount__setAmount
                  }
                  placeholder=""
                ></input>
              </div>
            </div>
            <div
              className={classes.donation__container__donation__box__confirm}
            ></div>
            <div
              className={
                classes.donation__container__donation__box__donateButton
              }
            >
              Next
            </div>
          </div>
        </div>
      ) : (
        <div className={classes.donation__container}>
          <StripeContainer amount={donation.amount} />
        </div>
      )}
    </>
  );
};

export default DonationForm;
