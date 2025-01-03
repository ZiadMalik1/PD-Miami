const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.

const stripe = require("stripe")(
  "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"
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(express.json());
app.use(cors());

const getAmount = (amount) => {
  return Math.round(amount.amount * 100);
};

app.post("/create-payment-intent", cors(), async (req, res) => {
  
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: getAmount(items),
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(4242, () => console.log("Node server listening on port 4242!"));
