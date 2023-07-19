import { default as React } from "react";

import Hero from "../components/Hero/Hero";
import Locations from "../components/Locations/Locations";
import Details from "../components/Sections/Details/Details";

const Home = ({ setModalState }) => {
  return (
    <>
      <div>
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
