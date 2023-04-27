import { default as React, useState } from "react";

import Modal from "../UI/Modal/Modal";
import DonationForm from "../components/DonationForm/DonationForm";
import Hero from "../components/Hero/Hero";
import Locations from "../components/Locations/Locations";

const Home = ({ modalState, setModalState }) => {
  const [donation, setDonation] = useState({ amount: 0, setAmount: false });

  return (
    <>
      <div>
        <Modal
          onCloseRequest={() => {
            setDonation({ amount: 0, setAmount: false });
            setModalState(false);
          }}
          modalState={modalState}
        >
          <h1
            style={{
              fontFamily: "Raleway",
              fontSize: "22px",
              margin: "7px 5px 2px",
              fontWeight: "300",
            }}
          >
            Donation Form
          </h1>
          <DonationForm donation={donation} setDonation={setDonation} />
        </Modal>

        <Hero
          onClick={() => {
            setModalState(true);
          }}
        />
        <Locations />
      </div>
    </>
  );
};

export default Home;
