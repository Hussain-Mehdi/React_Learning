import React from 'react'
import './TestimonialCard.css'
import mainLogo from "./assets/key-concepts.png";

export default function TestimonialCardHeader() {
  return (
    <div>
        <div className="testimonial-card__keyconcepts">
            <img src={mainLogo} alt="" />
        <h2>Key React Concepts</h2>
        <p>Selected key React concepts you should know about</p>
        </div>
    </div>
  )
}
