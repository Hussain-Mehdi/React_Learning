import React from "react";
import "./QuantityButton.css";
export default function QuantityButton(props) {
  return (
    <div className="amount-button__group">
      <div className="amount-button">
        <button>{props.icon}</button>
      </div>
    </div>
  );
}
