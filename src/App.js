import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Modal from "./UI/Modal/Modal";
import DonationForm from "./components/DonationForm/DonationForm";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import LearnMore from "./pages/LearnMore/LearnMore";
import LocationsPage from "./pages/LocationsPage";
import PaymentSuccess from "./pages/PaymentSuccess/PaymentSuccess";

const App = () => {
  const [donationModalState, setDonationModalState] = useState(false);
  const [donation, setDonation] = useState({ amount: 0, setAmount: false });

  return (
    <>
      <Modal
        onCloseRequest={() => {
          setDonation({ amount: 0, setAmount: false });
          setDonationModalState(false);
        }}
        modalState={donationModalState}
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
      <Header
        modalState={donationModalState}
        setModalState={setDonationModalState}
      />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Home
              modalState={donationModalState}
              setModalState={setDonationModalState}
            />
          }
        />
        <Route path="/learn-more" exact element={<LearnMore />} />
        <Route path="/locations" exact element={<LocationsPage />} />
        <Route path="/success" element={<PaymentSuccess />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;