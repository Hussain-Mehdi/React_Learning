import React from 'react'
import './OrderButton.css'
export default function OrderButton(props) {

  const closeHandler=()=>{
    console.log("Inside close button");
    props.onClose()
  }

  return (
    <div className="order-button" onClick={closeHandler}>
          <p id='bg' >{props.name}</p>
        </div>
  )
}
