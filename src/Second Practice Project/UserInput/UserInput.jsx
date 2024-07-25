import React, { useState } from 'react'
import './UserInput.css'
export default function UserInput(props) {

  return (
    <div className='group-input'>
        <label htmlFor="">{props.name}</label>
        <div className="input-control">
        <input type="text" ref={props.refer} />
        </div>
    </div>
  )
}
