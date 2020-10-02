import React from "react";

const cta = ({ lable, action }) => {
  const handleClick = () => {
    window.open(action, "_blank");
  };
  return (
    <button className="cta" onClick={handleClick}>
      {lable}
    </button>
  );
};

export default cta;
