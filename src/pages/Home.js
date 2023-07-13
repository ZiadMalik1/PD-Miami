import { default as React, useState } from "react";

import Modal from "../UI/Modal/Modal";
import DonationForm from "../components/DonationForm/DonationForm";
import Hero from "../components/Hero/Hero";
import Locations from "../components/Locations/Locations";
import Details from "../components/Sections/Details/Details";

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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h1
              style={{
                fontFamily: "Raleway",
                fontSize: "22px",
                fontWeight: "300",
              }}
            >
              Donation Form
            </h1>
            <DonationForm donation={donation} setDonation={setDonation} />
          </div>
        </Modal>

        <Hero
          onClick={() => {
            setModalState(true);
          }}
        />
        <Details />
        <Locations />
      </div>
    </>
  );
};

export default Home;
