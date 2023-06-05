import React from "react";
import DetailsForm from "../DetailsForm/DetailsForm";
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
        <div className={classes.details__container}>
          <DetailsForm setDonationAmount={setDonationAmount} />
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
