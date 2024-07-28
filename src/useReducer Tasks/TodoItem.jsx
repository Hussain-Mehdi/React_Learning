import React from "react";
import ToggleSwitch from "./ToggleSwitch";
import './TodoApp.css'

export default function TodoItem(props) {

    const removeItem=()=>{
        props.onDeleteHandler(props.todos.id)
    }

    const completionToggle=()=>{
        props.completionToggleHandler();
    }

  return (
    <div className="todo-item__container">
      <h4>{props.todos.id}</h4>
      <div className="todo-content">
        <p>
         {
            props.todos.content
         }
        </p>
      </div>
      <div >
        <button onClick={removeItem}>
          <i class="fa fa-trash" aria-hidden="true"></i>
        </button>
      </div>
      <div className="todo-completion__toggle">
      <ToggleSwitch isToggle={true} />

      </div>
    </div>
  );
}
