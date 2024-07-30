import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./PriceModal.css";
import ListItem from "../List Item/ListItem";
import OrderItem from "../Order Item/OrderItem";
import OrderButton from "../UI/Order Button/OrderButton";


const dishes = [
  {
    name: "Spaghetti Carbonara",
    ingredients: "Spaghetti, eggs, pancetta, Parmesan cheese, black pepper",
    price: 12.99
  },
  {
    name: "Chicken Tikka Masala",
    ingredients: "Chicken, tomato sauce, yogurt, spices, cream",
    price: 14.99
  },
  {
    name: "Sushi Roll",
    ingredients: "Rice, seaweed, raw fish, avocado, cucumber",
    price: 10.99
  },]

const BackDrop = () => {
  return <div className="backdrop"></div>;
};

const Overlay = () => {
  return (
    <div className="modal">
      {
        dishes.map((e)=>(<OrderItem data={e}/>))
      }
      <div className="price-calculation">
        <h2>Total Amount</h2>
        <h2>$60.60</h2>
      </div>
      <div className="checkout">
        <OrderButton name="Close" bg="fill"/>
        <OrderButton name="Order" bg="fill"/>

      </div>
      
    </div>
  );
};

const PriceModal = () => {
  return (
    <>
      {ReactDOM.createPortal(<BackDrop />, document.getElementById("backdrop"))}
      {ReactDOM.createPortal(<Overlay />, document.getElementById("overlay"))}
    </>
  );
};

export default PriceModal;
