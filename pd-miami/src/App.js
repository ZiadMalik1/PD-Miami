import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import LearnMore from "./pages/LearnMore/LearnMore";
import LocationsPage from "./pages/LocationsPage";

const App = () => {
  const [modalState, setModalState] = useState(false);
  const toggleModal = () => {
    setModalState(!modalState);
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/learn-more" exact element={<LearnMore />} />
        <Route path="/locations" exact element={<LocationsPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
