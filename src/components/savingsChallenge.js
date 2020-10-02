import React from "react";
import DetailsCard from "./detailsCard";
import SavingsDetails from "./savingsChallengeText";

const Savings = ({ data }) => {
  var bgColor = "#ffffff";
  var imageUrl = "";

  if (data) {
    var { bg_color, bg_image } = data.cards[0];
    imageUrl = bg_image.image_url;
    bgColor = bg_color;
  }

  return (
    <div className="savings-challenge">
      <div
        className="hc5"
        style={{
          backgroundColor: bgColor,
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="home-section">
        <div className="flex-column">
          <div className="flex-row">
            <DetailsCard data={SavingsDetails[0]} key={0} />
            <DetailsCard data={SavingsDetails[1]} key={1} />
          </div>

          <DetailsCard data={SavingsDetails[2]} key={2} />
        </div>
        <p className="fs-14 fw-600">Remember the rules</p>
        <DetailsCard data={SavingsDetails[3]} key={3} />
      </div>
    </div>
  );
};

export default Savings;
