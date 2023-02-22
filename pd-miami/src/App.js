import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Modal from "./Components/Modal/Modal";
import Navbar from "./Components/Navbar/Navbar";
import PaymentSuccess from "./Components/Pages/PaymentSuccess/PaymentSuccess";
import Home from "./Components/Pages/Home/Home";
import { ContactUs } from "./Components/Pages/ContactUs/ContactUs";

const App = () => {
  const [modalState, setModalState] = useState(false);
  const toggleModal = () => {
    console.log(modalState);
    setModalState(!modalState);
  };

  return (
    <>
      <Router>
        <Navbar setModalState={toggleModal} />
        <div className="modal_wrapper">{modalState && (
          <Modal modalState={modalState} setModalState={toggleModal} />
        )}</div>
        
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/success" exact element={<PaymentSuccess/>} />
          <Route path="/contact-us" exact element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
