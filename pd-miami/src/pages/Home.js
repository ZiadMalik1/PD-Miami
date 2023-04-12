import { default as React, useEffect, useState } from "react";

import Hero from "../components/Hero/Hero";
import Locations from "../components/Locations/Locations";
import Modal from "../components/Modal/DonationModal";

const Home = () => {
  const [modalState, setModalState] = useState(false);

  useEffect(() => {
    console.log(modalState);
  }, [modalState]);

  return (
    <>
      <div>
        <Modal modalState={modalState} onClose={() => setModalState(false)} />
        <Hero onClick={() => setModalState(true)} />
        <Locations />
      </div>
    </>
  );
};

export default Home;
