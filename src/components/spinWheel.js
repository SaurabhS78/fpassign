import React, { useEffect } from "react";
import spinner from "../assets/spinWheel.svg";
import pin from "../assets/spinnerPin.svg";
import { handleSpin, dragRotate } from "./spinnerHelper";

const SpinWheel = () => {
  useEffect(() => {
    dragRotate();
  }, []);

  const data = {
    title: "Spin the wheel now to get rewarded",
    desc:
      "Tap on Spin or rotate the wheel anti-clockwise and release to start spinning",
  };

  return (
    <div className="flex-column">
      <div className="flex-column spinner-main">
        <img src={pin} alt="pin" className="pin" />
        <div id="draggable" onMouseUp={() => handleSpin()}>
          <div id="rotate">
            <img src={spinner} alt="spinner" className="spinner" />
          </div>
        </div>
        <div className="spin-button" onClick={() => handleSpin()} />
      </div>
      <div className="flex-column rewards-dialog">
        <p>{data.title}</p>
        <p>{data.desc}</p>
      </div>
      <p className="fs-14 fw-500 faq">
        Have a question? <span className="">Get Help</span>
      </p>
    </div>
  );
};

export default SpinWheel;
