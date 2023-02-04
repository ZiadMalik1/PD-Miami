import React from "react";
import { TfiClose } from "react-icons/tfi";
import getStripe from "../../../lib/getStripe";
import "./Modal.scss";

const DonationModal = ({ modalState, setModalState }) => {
  async function handleCheckout() {
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],
      mode: "subscription",
      successUrl: `http://localhost:3000/success`,
      cancelUrl: `http://localhost:3000/cancel`,
      customerEmail: "customer@email.com",
    });
    console.warn(error.message);
  }

  return (
    <>
      <div
        className={
          modalState === true
            ? "services__modal active-modal"
            : "services__modal"
        }
      >
        <div className="services__modal-content">
          <div className="header-content">
            <h3 className="services__modal-title">Donate Now!</h3>
            <TfiClose className="close-button" onClick={setModalState} />
          </div>
          <div className="body-content">
            <button onClick={handleCheckout}>Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonationModal;
