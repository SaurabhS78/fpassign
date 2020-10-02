import React from "react";

const IconButton = ({ label, icon, action }) => {
  return (
    <div className="flex-column icon-btn" onClick={action}>
      <img src={icon} alt={label} />
      <p>{label}</p>
    </div>
  );
};

export default IconButton;
