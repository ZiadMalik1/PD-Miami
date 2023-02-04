import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Pages/Home/Home";
import Modal from "./Components/Modal/Modal"

const App = () => {
  const [modalState, setModalState] = useState(false);

  const toggleModal = () => {
    setModalState(!modalState);
    console.log('HELLO')
  };

  return (
    <>
      <Router>
        <Navbar setModalState={toggleModal}/>
        <Modal modalState={modalState} setModalState={toggleModal} />
        <Routes>
          <Route
            path="/"
            exact
            element={<Home/>}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
