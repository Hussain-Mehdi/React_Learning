import React from "react";
import CartContext from "./cart-context";

export default function CartProvider(props) {
  const addItemToCart = item => {};
  const removeItemFromCart = id => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
