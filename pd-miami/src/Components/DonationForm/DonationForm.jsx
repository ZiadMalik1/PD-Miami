import React, { useState } from "react";
import classes from "./DonationForm.module.scss";
import StripeContainer from "../StripeContainer/StripeContainer";

const DonationForm = () => {
  const [donation, setDonation] = useState({ amount: 0, setAmount: false });

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
        <div className={classes.donation__container__donation__box}>
          <div className={classes.donation__container__donation__box__fields}>
            <input type="text" id="firstName" placeholder="First Name"></input>
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
            >
              $10
            </div>
            <div
              className={
                classes.donation__container__donation__box__amount__button
              }
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
            className={classes.donation__container__donation__box__donateButton}
          >
            Donate Now
          </div>
        </div>
      ) : (
        <div className={classes.donation__container__donation__stripe__box}>
          <StripeContainer amount={donation.amount} />
        </div>
      )}
    </>
  );
};

export default DonationForm;
