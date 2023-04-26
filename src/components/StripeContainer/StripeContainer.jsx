import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import PaymentForm from "../PaymentForm/PaymentForm";

const PUBLIC_KEY =
  "pk_live_51MXt1XIAh3j0XzoYYiJQhFL191GQ1wzkAIkkTeHtBrKS6WA92t1cKEhLzbzD9rlYUKwDPddMJZTUHkqm2fYkjZVj00zB6JvWbo";
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
    loader: "always",
  };

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://api.pdmiami.org/create-payment-intent", {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: { amount: amount } }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  return (
    <>
      {clientSecret && (
        <Elements
          options={options}
          stripe={stripeTestPromise}
          aggresiveRendering
        >
          <PaymentForm />
        </Elements>
      )}
    </>
  );
};

export default StripeContainer;
