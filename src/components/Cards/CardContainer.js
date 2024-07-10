import React from "react";
import TestimonialCard from "./TestimonialCard";
import componentLogo from "./assets/components.png";
import "./CardContainer.css";
import eventLogo from "./assets/events.png";
import stateLogo from "./assets/state.png";
import TestimonialCardHeader from "./TestimonialCardHeader";
import Card from "../UI/Card";
import "../UI/Card.css";

export default function CardContainer() {
  const data = [
    {
      image: componentLogo,
      title: "Components",
      description:
        "Components in React are reusable building blocks that help in creating specific UI elements. They can be either functional or class components. Functional components are JavaScript functions that accept props and return React elements. Class components are ES6 classes that extend from React.Component and have additional features like state and lifecycle methods. Components promote code reusability, maintainability, and separation of concerns, making React applications easier to develop and maintain.",
    },
    {
      image: stateLogo,
      title: "State",
      description:
        "State in React is an object that represents the parts of a component that can change over time. It is managed internally by the component and can be updated using the `setState` method. State allows components to create dynamic and interactive user interfaces. It helps in keeping track of changes to data and ensures that the UI is always up-to-date with the latest data. State should be used carefully to avoid unnecessary re-rendering and to maintain performance.",
    },
    {
      image: eventLogo,
      title: "Events",
      description:
        "Events in React are similar to events in HTML, but they are named using camelCase instead of lowercase. Event handlers are functions that are executed in response to an event, such as a user clicking a button or typing in an input field. In React, event handlers are passed as props to components and are defined using arrow functions or class methods. Handling events allows developers to create interactive and responsive user interfaces in React applications, making them more engaging and user-friendly.",
    },
  ];
  return (
<Card className="testimonial-card">
<TestimonialCardHeader />
      <div className="card-container">
        {data.map((item) => (
          <TestimonialCard
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
</Card>
  )
}
