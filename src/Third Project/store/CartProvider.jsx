import React, { useReducer } from "react";
import CartContext from "./cart-context";





const cartInitialValue={
    items:[], 
    totalAmount:0
}

export default function CartProvider(props) {

    const [cartState,cartDispatch] = useReducer(cartReducer,cartInitialValue)

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
