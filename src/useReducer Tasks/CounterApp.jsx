import React, { useReducer } from "react";

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
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button
        style={{ fontSize: "20px", width: "60px", margin: "10px" }}
        onClick={decrementHandler}
      >
        -
      </button>
      <h3 style={{ fontSize: "20px" }}>{state.count}</h3>
      <button
        style={{ fontSize: "20px", width: "60px", margin: "10px" }}
        onClick={incrementHandler}
      >
        +
      </button>
    </div>
  );
}
