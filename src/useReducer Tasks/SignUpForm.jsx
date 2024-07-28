import React, { useReducer } from "react";
import "./SignUpForm.css";

const validityHandler = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "RESET_FORM":
      return {
        initialState,
      };

    default:
      break;
  }
};

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUpForm() {
  const [state, dispatch] = useReducer(validityHandler, initialState);

  const onChangeHandler = (event) => {
    dispatch({
      type: "SET_FIELD",
      field: event.target.name,
      value: event.target.value,
    });
    console.log(state);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch({
      type: "RESET_FORM",
    });
    console.log(state);
  };

  return (
    <div className="container-card">
      <form action="" onSubmit={submitHandler}>
        <div>
          <label htmlFor="">Name</label>
          <div className="user-inputfield">
            <input type="text" name="name" onChange={onChangeHandler} value={state.value}/>
          </div>
        </div>
        <div>
          <label htmlFor="">Email</label>
          <div className="user-inputfield">
            <input type="text" name="email" onChange={onChangeHandler} value={state.value}/>
          </div>
        </div>
        <div>
          <label htmlFor="">Password</label>
          <div className="user-inputfield">
            <input type="text" name="password" onChange={onChangeHandler} value={state.value}/>
          </div>
        </div>
        <div>
          <label htmlFor="">Confirm Password</label>
          <div className="user-inputfield">
            <input
              type="text"
              name="confirmPassword"
              onChange={onChangeHandler}
              value={state.value}
            />
          </div>
        </div>
        <div className="user-inputfield">
          <button>Create</button>
        </div>
      </form>
    </div>
  );
}
