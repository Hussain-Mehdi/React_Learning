import React, { useState } from 'react'
import './UserInput.css'
export default function UserInput(props) {

  const userInputHandler= (event)=>{
    props.onChangeHandler(event.target.value);
  }

  return (
    <div className='group-input'>
        <label htmlFor="">{props.name}</label>
        <div className="input-control">
        <input type="text" onChange={userInputHandler} />
        </div>
    </div>
  )
}
