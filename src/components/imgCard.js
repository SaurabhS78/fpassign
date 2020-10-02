import React from "react";

const HC5 = ({ data, setScreen }) => {
  return (
    <div
      className="hc5 flex-row"
      style={{
        backgroundImage: `url(${data.bg_image.image_url})`,
        backgroundColor: data.bg_color,
      }}
      onClick={() => setScreen("challenge")}
    ></div>
  );
};

export default HC5;
