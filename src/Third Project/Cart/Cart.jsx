import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import CartContext from "../store/cart-context";

export default function Cart(props) {
  const cartContext=useContext(CartContext)

  const [showModel, setShowModel] = useState(false);
  const showModelHandler = () => {
    const isShown = !showModel;
    setShowModel(isShown);
    props.showModel(isShown);
  };

  const numberOfCartItems=cartContext.items.reduce((currentNo,item)=>{
    return currentNo+item.amount
  },0)

  console.log("Here is number of cart: "+cartContext.items);

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
          <p>{numberOfCartItems}</p>
        </div>
      </div>
    </>
  );
}
