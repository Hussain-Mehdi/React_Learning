import React, { useEffect, useReducer, useState } from "react";
import "./OrderItem.css";
import QuantityButton from "../UI/Quantity Button/QuantityButton";

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return{
        ...state,
        count:state.count+1
      }
      case 'DECREMENT':
        return{
          ...state,
          count:state.count-1
        }

    default:
      break;
  }
};

const initialState = {
  count: 0,
};
export default function OrderItem(props) {

  const [state, dispatch] = useReducer(reducer, initialState);
  const [calculatedAmount,setCalculatedAmount]=useState(1)

  useEffect(()=>{
    amountCalculation()
    console.log(calculatedAmount);
  }
  ,[state.count])

  const amountCalculation=()=>{
      const amount=state.count*props.data.price;
      setCalculatedAmount(amount)
      props.onCalculation(calculatedAmount)
  }

  const incrementHandler = () => {
    console.log("State increment"+state);
    dispatch({
      type: "INCREMENT",
    });
  };

  const decrementHandler = () => {
    dispatch({
      type: "DECREMENT",
    });
  };

  return (
    <div>
      <div className="list-item__container">
        <div className="list-item__content">
          <h2>{props.data.name}</h2>

          <div className="quatity-group">
            <h2 id="amount">{`$${props.data.price}`}</h2>
            <div className="item-number">
              <p htmlFor="">x{state.count}</p>
            </div>
          </div>
        </div>

        <div className="amount-button__group">
          <QuantityButton icon="-" onClick={decrementHandler}/>
          <QuantityButton icon="+" onClick={incrementHandler}/>
        </div>
      </div>
    </div>
  );
}
