import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import PaymentForm from "../PaymentForm/PaymentForm";
import "./Loader.scss";

const PUBLIC_KEY =
  "pk_live_51MXt1XIAh3j0XzoYYiJQhFL191GQ1wzkAIkkTeHtBrKS6WA92t1cKEhLzbzD9rlYUKwDPddMJZTUHkqm2fYkjZVj00zB6JvWbo";
const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = ({ amount }) => {
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(true);
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
    // Simulate a 2-second delay before creating PaymentIntent
    const timeout = setTimeout(() => {
      fetch("https://api.pdmiami.org/create-payment-intent", {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: { amount: amount } }),
      })
        .then((res) => res.json())
        .then((data) => {
          setClientSecret(data.clientSecret);
          setLoading(false);
        });
    }, 2000); // 2-second timeout

    // Clean up the timeout if the component unmounts before the timeout finishes
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="content-wrapper">
      {loading ? (
        <div className="loader">
          <div id="load"></div>
        </div>
      ) : (
        <Elements options={options} stripe={stripeTestPromise}>
          <div className="content">
            <PaymentForm />
          </div>
        </Elements>
      )}
    </div>
  );
};

export default StripeContainer;
