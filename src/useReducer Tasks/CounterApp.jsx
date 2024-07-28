import React, { useReducer } from "react";
import "./CounterApp.css";

const counterHandler = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
      break;
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
      break;
    default:
      break;
  }
};

const initialState = { count: 0 };

export default function CounterApp() {
  const [state, dispatch] = useReducer(counterHandler, initialState);

  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div className="quantity-card">
      <div className="item-quantity__container">
        <button
          className="item-quantity__button right-rounded__corner ripple-button"
          onClick={decrementHandler}
        >
          -
        </button>
        <div>
          <h3 className="item-quantity">{state.count}</h3>
        </div>
        <button
          className="item-quantity__button left-rounded__corner"
          onClick={incrementHandler}
        >
          +
        </button>
      </div>
    </div>
  );
}
