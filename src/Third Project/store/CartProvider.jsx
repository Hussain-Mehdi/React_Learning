import React, { useReducer } from "react";
import CartContext from "./cart-context";



const cartReducer=(state,action)=>{
    switch (action.type) {
        case 'ADD':
            {
              const updatedItem=state.items.concat(action.item);
              const newTotalAmount = state.totalAmount+ action.item.price *action.item.amount
              
              return {
                items:updatedItem, 
                totalAmount:newTotalAmount
              }
            }
           
    
        default:
            break;
    }
}

const cartInitialValue={
    items:[], 
    totalAmount:0
}

export default function CartProvider(props) {

    const [cartState,cartDispatch] = useReducer(cartReducer,cartInitialValue)

  const addItemToCart = item => {
    cartDispatch({
        type:'ADD', 
        item:item
    })
  };
  const removeItemFromCart = id => {
    cartDispatch({
        type:'REMOVE', 
        id:id
    })
  };

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
