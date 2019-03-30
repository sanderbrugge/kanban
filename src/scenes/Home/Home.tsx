import * as React from "react";
import Header from "../../components/Header";
import SwimmingLane from "../../components/SwimmingLane";
import './Home.scss';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div className="home_container">
        <SwimmingLane />
        <SwimmingLane />
        <SwimmingLane />
        <SwimmingLane />
        <SwimmingLane />
      </div>
    </>
  );
};

export default Home;
