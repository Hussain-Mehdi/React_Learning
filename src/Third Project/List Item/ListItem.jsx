import React from "react";
import "./ListItem.css";
export default function ListItem(props) {
  return (
    <div className="list-item__container">
      <div className="list-item__content">
        <h2>{props.data.name}</h2>
        <p id="item-description">{props.data.ingredients}</p>
        <h2 id="amount">{`$${props.data.price}`}</h2>
      </div>
      <div className="list-item__operations">
        <div className="item-amount">
          <label htmlFor="">Amount</label>
          <input value={0} type="number" />
        </div>
        <div className="add-button">
          <button>+Add</button>
        </div>
      </div>

    </div>
  );
}
