import React from 'react'
import './OrderButton.css'
export default function OrderButton(props) {
  return (
    <div className="order-button">
          <button>{props.name}</button>
        </div>
  )
}
