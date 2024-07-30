import React from "react";
import "./Header.css";
import Cart from "../Cart/Cart";
import bg from "./background.jpg";
import { useState } from "react";

export default function Header(props) {

  const priceModelHandler = () => {
props.onShowModel()
  };

  return (
    <div className="main-image">
      <img src={bg} alt="" />
      <div className="cart-header_container">
        <div className="cart-header__heading">
          <h1>ReactMeals</h1>
        </div>
        <div className="cart-info">
          <Cart showModel={priceModelHandler} />
        </div>
      </div>
    </div>
  );
}
