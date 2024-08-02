import React, { useReducer, useState } from "react";
import ReactDOM from "react-dom";
import "./PriceModal.css";
import ListItem from "../List Item/ListItem";
import OrderItem from "../Order Item/OrderItem";
import OrderButton from "../UI/Order Button/OrderButton";
import { useContext } from "react";
import CartContext from "../store/cart-context";

const dishes = [
  {
    name: "Spaghetti Carbonara",
    ingredients: "Spaghetti, eggs, pancetta, Parmesan cheese, black pepper",
    price: 12.99,
  },
  {
    name: "Chicken Tikka Masala",
    ingredients: "Chicken, tomato sauce, yogurt, spices, cream",
    price: 14.99,
  },
  {
    name: "Sushi Roll",
    ingredients: "Rice, seaweed, raw fish, avocado, cucumber",
    price: 10.99,
  },
];

const BackDrop = (props) => {
  const hideModal = () => {
    props.onClose(false);
  };

  return <div className="backdrop" onClick={hideModal}></div>;
};

const Overlay = (props) => {
  const cartCtx =useContext(CartContext)

  const [calculatedAmount,setCalculatedAmount]=useState()

  const hideModal = () => {
    props.onClose(false);
  };

  const amountCalculationHandler=(value)=>{
      setCalculatedAmount(value);
  }

  return (
    <div className="modal">
      {cartCtx.items.map((e) => (
        <OrderItem data={e} onCalculation={amountCalculationHandler} />
      ))}
      <div className="price-calculation">
        <h2>Total Amount</h2>
        <h2>${calculatedAmount}</h2>
      </div>
      <div className="checkout">
        <OrderButton name="Close" bg="fill" onClose={hideModal} />
        <OrderButton name="Order" bg="fill" />
      </div>
    </div>
  );
};

const PriceModal = (props) => {
  const showModelHandler = () => {
    props.onClose(false);
  };

  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onClose={showModelHandler} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <Overlay onClose={showModelHandler} />,
        document.getElementById("overlay")
      )}
    </>
  );
};

export default PriceModal;
