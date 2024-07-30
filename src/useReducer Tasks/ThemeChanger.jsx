import React, { useEffect, useReducer } from "react";
import "./ThemeChanger.css";
const reducer = (state, action) => {
  switch (action.type) {
    case "SWITCH_THEME":
      return {
        ...state,
        theme: !state.theme,
      };

    default:
      break;
  }
};

const initialState = {
  theme: false,
};

export default function ThemeChanger() {
  const [state, dispatch] = useReducer(reducer, initialState);


  useEffect(()=>{
    if(state.theme)
    {
        document.body.style.backgroundColor='black'; 
        document.body.style.color='white'; 

    }
    else{
        document.body.style.backgroundColor='white'; 
        document.body.style.color='black'; 
        document.body.style.height='100rem'
        document.body.style.width='100%'
    }
  },[state.theme])

  const themeHandler = () => {
    dispatch({
      type: "SWITCH_THEME",
    });
    console.log(state);
  };

  return (
    <div>
      
      <button onClick={themeHandler}>Change Theme</button>
    </div>
  );
}
