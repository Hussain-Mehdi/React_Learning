import React from "react";
import componentLogo from "./assets/components.png";
import mainLogo from "./assets/key-concepts.png";
import "./TestimonialCard.css";

export default function TestimonialCard(props) {
  console.log("Props=======>"+props);
  return (
    <div className="testimonial-card">
      <div className="testimonial-card__image">
        <img src={props.image} alt="" />
      </div>

      <div className="testimonial-card__content">
        <h2 className="testimonial-card__h2">{props.title}</h2>
        <p className="testimonial-card__p">
         {props.description}
        </p>
      </div>
    </div>
  );
}
