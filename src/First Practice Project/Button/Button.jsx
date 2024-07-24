import React from 'react'
import './Button.css'

export default function Button(props) {
  return (
    <div>
      <button type={props.type} onClick={props.onClick} className={props.className}>
            {props.name}
          </button>
    </div>
  )
}
