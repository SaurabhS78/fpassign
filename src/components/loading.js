import React from "react";

const Loading = () => {
  return (
    <div className="mobile-section loaders flex-column center">
      <h1>
        <span role="img" aria-label="satellite">
          📡
        </span>
      </h1>
      <h3>Loading...</h3>
    </div>
  );
};

export default Loading;
