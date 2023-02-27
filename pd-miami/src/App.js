import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home";

const App = () => {
  const [modalState, setModalState] = useState(false);
  const toggleModal = () => {
    setModalState(!modalState);
  };

  return (
    <>

      {/* <Router>
        <div className="app--container">
          <Navbar setModalState={toggleModal} />
          <div className="modal_wrapper">
            {modalState && (
              <Modal modalState={modalState} setModalState={toggleModal} />
            )}
          </div>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/success" exact element={<PaymentSuccess />} />
            <Route
              path="/contact-us"
              exact
              element={<ContactUs className="home" />}
            />
          </Routes>
          <Footer />
        </div>
      </Router> */}
      <Header />
      <Home />
    </>
  );
};

export default App;
