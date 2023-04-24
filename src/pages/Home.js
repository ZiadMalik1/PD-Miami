import { default as React } from "react";

import Modal from "../UI/Modal/Modal";
import DonationForm from "../components/DonationForm/DonationForm";
import Hero from "../components/Hero/Hero";
import Locations from "../components/Locations/Locations";

const Home = ({ modalState, setModalState }) => {
  return (
    <>
      <div>
        {modalState && (
          <Modal onCloseRequest={() => setModalState(false)}>
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
