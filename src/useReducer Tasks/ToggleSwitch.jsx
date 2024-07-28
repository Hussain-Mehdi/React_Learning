import React, { useReducer } from "react";
import { useState } from "react";
import styled from "styled-components";

const ToggleSwitchStyle = styled.div`
  width: 3%;
  margin: 20px auto;

  .toggle-button__container {
    height: 40px;
    background-color: ${({ isToggle }) => (isToggle ? '#43aa8b' : '#575757')};
    border-radius: 20px;
    position: relative;
    display: flex;
    transition: 0.3s all ease-in-out;
    align-items: center;
  }

  .toggle-button {
    width: 35px;
    height: 35px;
    background-color: white;
    // {({ isToggle }) => (isToggle ? '#43aa8b' : '#FFFFFF')};
    border-radius: 20px;
    margin: 0 0 0 3px;
    box-shadow: 0 1px 2px 3px rgba(148, 148, 148, 0.171);
    transition: 0.3s all ease-in-out;
    transform: ${({ isToggle }) => (isToggle ? 'translateX(36px)' : 'translateX(0px)')};

`;

const toggleHandler=(state,action)=>{
    switch (action.type) {
        case 'TOGGLE':
            return{...state,toggle:!state.toggle}
        default:
            break;
    }
}

const initialState={toggle:false}

export default function ToggleSwitch() {

    const [state, dispatch] = useReducer(toggleHandler,initialState);

    const toggleSwitchStateHandler=()=>{
        dispatch({type:"TOGGLE"})
    }
   
//     setIsToggle(!isToggled)
//     console.log("After: "+isToggled);
//   };

  return (
    <ToggleSwitchStyle isToggle={state.toggle}>
      <div className="toggle-button__container" onClick={toggleSwitchStateHandler}>
        <div className="toggle-button"></div>
      </div>
    </ToggleSwitchStyle>
  );
}
