import React, { useEffect, useState } from "react";

import "./DetailsForm.scss";

const DetailsForm = ({ setDonationAmount }) => {
  const [amount, setAmount] = useState(null);
  const [isFormReady, setIsFormReady] = useState(false);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [customAmountInput, setCustomAmountInput] = useState("");
  const [selected, setSelected] = useState([
    { id: 1, selected: false },
    { id: 2, selected: false },
    { id: 3, selected: false },
  ]);

  useEffect(() => {
    if (email && firstName && lastName && amount) {
      setIsFormReady(true);
    } else {
      setIsFormReady(false);
    }
  }, [email, firstName, lastName, amount]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleChange = (changeObject) => {
    if (changeObject.id !== 3) {
      setAmount(changeObject.amount);
      setCustomAmountInput("");
    }
    setSelected(
      selected.map((obj) => {
        if (obj.id === changeObject.id) {
          return {
            ...obj,
            selected: true,
          };
        } else {
          return {
            ...obj,
            selected: false,
          };
        }
      })
    );
  };

  const handleCustomClick = () => {
    setAmount(null);
  };

  const handleCustomChange = (event) => {
    const value = event.target.value;
    setCustomAmountInput(value);
    const parsedValue = parseFloat(value.replace(/[^\d.-]/g, ""));
    if (!isNaN(parsedValue)) {
      // Perform the desired action with the parsed amount
      setAmount(parsedValue);
    } else {
      setAmount(null);
    }
  };

  const handleCustomBlur = () => {
    convertToDollarAmount();
  };

  const convertToDollarAmount = () => {
    const numericValue = parseFloat(customAmountInput).toFixed(2);
    if (!isNaN(numericValue)) {
      const formattedAmount = numericValue.toLocaleString("en-US", {
        style: "decimal",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

      const amountWithoutSymbol = formattedAmount.replace(/[$,]/g, ""); // Remove currency symbol and commas
      setCustomAmountInput(amountWithoutSymbol);
      setAmount(numericValue);
    } else {
      setCustomAmountInput("");
    }
  };

  const handleSubmit = () => {
    if (isFormReady) {
      setDonationAmount(amount);
      console.log("Form submitted");
    } else {
      // Form is not ready for submission
      console.log("Form not ready");
    }
  };

  return (
    <>
      <div className="form">
        <div className="form__amount">
          <div
            className={`form__amount__button ${
              selected.find((obj) => {
                return obj.id === 1;
              }).selected
                ? "__selected"
                : ""
            }`}
            onClick={() => handleChange({ id: 1, amount: 5 })}
          >
            <span>$5.00</span>
          </div>
          <div
            className={`form__amount__button ${
              selected.find((obj) => {
                return obj.id === 2;
              }).selected
                ? "__selected"
                : ""
            }`}
            onClick={() => handleChange({ id: 2, amount: 20 })}
          >
            <span>$20.00</span>
          </div>

          <div
            className={`form__amount__button ${
              selected.find((obj) => {
                return obj.id === 3;
              }).selected
                ? "__selected"
                : ""
            }`}
            onClick={() => handleChange({ id: 3 })}
          >
            <div className="input-wrapper">
              <span className="dollar-sign">$</span>
              <input
                type="text"
                value={customAmountInput}
                className="input-field"
                onClick={handleCustomClick}
                onChange={handleCustomChange}
                onBlur={handleCustomBlur}
              />
            </div>
          </div>
        </div>
        <div id="details">
          <div className="contact-info">
            <form className="clearfix">
              <div className="input-group-2">
                <label>
                  First Name<span class="required-notation">*</span>
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={handleFirstNameChange}
                />
              </div>
              <div className="input-group-2">
                <label>
                  Last Name<span class="required-notation">*</span>
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={handleLastNameChange}
                />
              </div>
              <div className="input-group-1">
                <label>
                  Email Address<span class="required-notation">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="input-group-1">
                <label>Street Address</label>
                <input type="text" />
              </div>
              <div className="input-group-3">
                <label>City</label>
                <input type="text" />
              </div>
              <div className="input-group-3">
                <label>State</label>
                <input type="text" />
              </div>
              <div className="input-group-3">
                <label>Zip Code</label>
                <input type="text" />
              </div>
            </form>
          </div>
        </div>
        <div
          type="submit"
          className={`form__donateButton ${
            isFormReady ? "active" : "disabled"
          }`}
          onClick={() => handleSubmit()}
        >
          Next
        </div>
      </div>
    </>
  );
};

export default DetailsForm;
