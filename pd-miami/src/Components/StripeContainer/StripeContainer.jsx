import React, { useState, useEffect } from "react";
import PaymentForm from "../PaymentForm/PaymentForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const PUBLIC_KEY =
  "pk_test_51MXt1XIAh3j0XzoY7kp4d6ZlfhjieXigaJDHpP5FpjShpvZFn1gb0yqShCRzPATH0xvSPaNvaWRnw3H2uUDcCsJc00xk8SBLKF";
const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = ({ amount }) => {
  const [clientSecret, setClientSecret] = useState("");
  const appearance = {
    theme: "stripe",
    variables: {
      colorPrimary: "#303655",
    },
  };

  const options = {
    clientSecret,
    appearance,
  };

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://api.pdmiami.org/create-payment-intent", {
      method: "POST",
      mode: 'cors',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: { amount: amount } }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  return (
    <>
      {clientSecret && (
        <Elements options={options} stripe={stripeTestPromise}>
          <PaymentForm />
        </Elements>
      )}
    </>
  );
};

export default StripeContainer;
