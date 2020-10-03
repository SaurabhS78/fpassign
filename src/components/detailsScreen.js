import React from "react";
import arrow from "../assets/arrowRight.svg";
import Savings from "./savingsChallenge";
import SpinWheel from "./spinWheel";

const DetailsScreen = ({ data, type, setScreen }) => {
  return (
    <>
      <div className="flex-row detail-screen-header">
        <img src={arrow} alt="back" onClick={() => setScreen("home")} />
        <p className="fs-14 fw-500">{type}</p>
      </div>
      <div className="home-section">
        {type === "Savings Challenge" ? (
          <Savings data={data !== [] ? data[0] : data} />
        ) : (
          <SpinWheel />
        )}
      </div>
    </>
  );
};

export default DetailsScreen;
