import React from "react";
import "./style.css";

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <span className="boom">BOOM!</span>
      <span>Something has gone terribly wrong</span>
      <span>(but we already send droids to fix it)</span>
    </div>
  );
};

export default ErrorIndicator;
