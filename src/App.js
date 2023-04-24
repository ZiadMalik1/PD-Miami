import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import LearnMore from "./pages/LearnMore/LearnMore";
import LocationsPage from "./pages/LocationsPage";
import PaymentSuccess from "./pages/PaymentSuccess/PaymentSuccess";

const App = () => {
  const [modalState, setModalState] = useState(false);

  return (
    <>
      <Header modalState={modalState} setModalState={setModalState} />
      <Routes basename>
        <Route
          path="/"
          exact
          element={
            <Home modalState={modalState} setModalState={setModalState} />
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
