import React from "react";
import CTA from "./actionCTA";

const HC4 = ({ data }) => {
  return (
    <div className="hc4 flex-column">
      <div className="flex-column">
        <img
          src={data.icon.image_url}
          className="hc4img"
          alt={data.icon.asset_type}
        />
        <span className="fs-14">{data.formatted_title.entities[0].text}</span>
      </div>
      <p className="fs-16">{data.formatted_description.text}</p>
      <div className="flex-row">
        <CTA lable={data.cta[0].text} action={data.cta[0].url} />
        <CTA lable={data.cta[1].text} action={data.cta[1].url} />
      </div>
    </div>
  );
};

export default HC4;
