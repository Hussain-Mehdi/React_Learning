import React from "react";
import "./Cart.css";
export default function Cart(props) {
  const showModelHandler = () => {
    props.showModel()
  };

  return (
    <>
      <div className="cart-container" onClick={showModelHandler}>
        <div className="cart-icon">
          <i class="fa fa-cart-shopping"></i>
        </div>
        <div className="cart-heading">
          <p>Your Cart</p>
        </div>
        <div className="cart-item__number">
          <p>3</p>
        </div>
      </div>
    </>
  );
}
