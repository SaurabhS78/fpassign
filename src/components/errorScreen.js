import React from "react";

const ErrorScreen = ({ error }) => {
  return (
    <div className="mobile-section loaders">
      <h1>
        Oops! Something went Wrong{" "}
        <span role="img" aria-label="sad-face">
          ☹️
        </span>
      </h1>
      <h3>{error}</h3>
    </div>
  );
};

export default ErrorScreen;
