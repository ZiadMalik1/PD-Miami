import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Pages/Home/Home";
import Socialbar from "./Components/Socialbar/Socialbar";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Socialbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
