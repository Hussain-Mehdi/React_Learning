import React from "react";
import "./ListItem.css";
import { useContext } from "react";
import CartContext from "../store/cart-context";
export default function ListItem(props) {

  const cartContext = useContext(cartContext)

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
          <input min='1' max='5' step='1' defaultValue={'1'} type="number" />
        </div>
        <div className="add-button">
          <button onClick={cartContext.addItem}>+Add</button>
        </div>
      </div>

    </div>
  );
}
