import React from "react";
import "./OrderItem.css";
import QuantityButton from "../UI/Quantity Button/QuantityButton";
export default function OrderItem(props) {
  return (
    <div>
      <div className="list-item__container">
        <div className="list-item__content">
          <h2>{props.data.name}</h2>

          <div className="quatity-group">
          <h2 id="amount">{`$${props.data.price}`}</h2>
          <div className="item-number">
            <p htmlFor="">x2</p>
          </div>
          </div>
        </div>
       
         
          <div className="amount-button__group">
           
          <QuantityButton icon="-"/>
          <QuantityButton icon="+"/>
        </div>
      </div>
    </div>
  );
}
