import React, { useRef, useState } from "react";
import "./ListItem.css";
import { useContext } from "react";
import CartContext from "../store/cart-context";
import { isValidElement } from "react";

export default function ListItem(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const cartCtx = useContext(CartContext);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enterAmountNumber = +enteredAmount;
    console.log("Entered amount Number " + enterAmountNumber);
    if (
      enterAmountNumber.length === 0 ||
      enterAmountNumber < 1 ||
      enterAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    console.log("Entered Amount: "+enterAmountNumber);
     props.addToCart(enterAmountNumber);
  };
 
  return (
    <form action="" onSubmit={submitHandler}>
      <div className="list-item__container">
        <div className="list-item__content">
          <h2>{props.data.name}</h2>
          <p id="item-description">{props.data.ingredients}</p>
          <h2 id="amount">{`$${props.data.price}`}</h2>
        </div>
        <div className="list-item__operations">
          <div className="item-amount">
            <label htmlFor="">Amount</label>
            <input
              ref={amountInputRef}
              min="1"
              max="5"
              step="1"
              defaultValue={"1"}
              type="number"
            />
          </div>
          <div className="add-button">
            <button>+Add</button>
          </div>
          {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
        </div>
      </div>
    </form>
  );
}
