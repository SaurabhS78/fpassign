import React from "react";
import arrow from "../assets/arrowRight.svg";

const HC6 = ({ data, setScreen }) => {
  return (
    <div className="hc6" onClick={() => setScreen("spinWheel")}>
      <div className="flex-row">
        <img src={data.icon.image_url} alt="" />
        <p>{/*data.formatted_title.text*/}Spin the wheel</p>
      </div>
      <img src={arrow} alt="" />
    </div>
  );
};

export default HC6;
