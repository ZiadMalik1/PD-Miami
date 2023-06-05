import React, { useState } from "react";
import "./DetailsForm.scss";

const DetailsForm = ({ setDonationAmount }) => {
  const [amount, setAmount] = useState(null);
  const [selected, setSelected] = useState([
    { id: 1, selected: false },
    { id: 2, selected: false },
    { id: 3, selected: false },
  ]);

  const handleChange = (changeObject) => {
    if (changeObject.id !== 3) setAmount(changeObject.amount);
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

  const handleCustomChange = (event) => {
    console.log(event.target.value);
    setAmount(event.target.value);
  };

  const handleSubmit = () => {
    setDonationAmount(amount);
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
            onClick={() => handleChange({ id: 2, amount: 10 })}
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
                className="input-field"
                onChange={handleCustomChange}
              />
            </div>
          </div>
        </div>
        <div id="details">
          <div className="contact-info">
            <form className="clearfix">
              <div className="input-group-2">
                <label>First Name</label>
                <input type="text" required />
              </div>
              <div className="input-group-2">
                <label>Last Name</label>
                <input type="text" />
              </div>
              <div className="input-group-1">
                <label>Email Address</label>
                <input type="text" />
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
          className="form__donateButton"
          onClick={() => handleSubmit()}
        >
          Next
        </div>
      </div>
    </>
  );
};

export default DetailsForm;
