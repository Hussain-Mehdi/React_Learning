import React from "react";
import "./QuantityButton.css";
export default function QuantityButton(props) {

  const handleCounter=()=>{
    props.onClick()
  }

  return (
    <div className="amount-button__group">
      <div className="amount-button">
        <button onClick={handleCounter}>{props.icon}</button>
      </div>
    </div>
  );
}
