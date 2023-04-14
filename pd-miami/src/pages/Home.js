import { default as React, useEffect, useState } from "react";

import Hero from "../components/Hero/Hero";
import Locations from "../components/Locations/Locations";
import DonationForm from "../components/DonationForm/DonationForm";
import Modal from "../UI/Modal/Modal";

const Home = ({ modalState, setModalState }) => {
  return (
    <>
      <div>
        {modalState && (
          <Modal onCloseRequest={() => setModalState(false)}>
            <h1
              style={{
                fontFamily: "Roboto",
                fontSize: "22px",
                margin: "2px",
                fontWeight: "300",
              }}
            >
              Donation Form
            </h1>
            <DonationForm />
          </Modal>
        )}
        <Hero onClick={() => setModalState(true)} />
        <Locations />
      </div>
    </>
  );
};

export default Home;
