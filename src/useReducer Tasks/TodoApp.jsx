import React, { useReducer, useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoApp.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todoItemList: [
          ...state.todoItemList,
          {
            id: Math.random().toLocaleString(),
            content: action.payload,
            isCompleted: false,
          },
        ],
      };

    case "REMOVE_TODO":
      return {
        ...state,
        todoItemList: state.todoItemList.filter(
          (item) => item.id !== action.payload
        ),
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        isCompleted: !state.isCompleted,
      };
    default:
      break;
  }
};

const initialState = {
  todoItemList: [],
};

export default function TodoApp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newTodo, setNewToDo] = useState("");

  const addTodoHandler = () => {
    dispatch({
      type: "ADD_TODO",
      payload: newTodo,
    });
     setNewToDo("");
  };

  const removeTodoHandler = (value) => {
    dispatch({
      type: "REMOVE_TODO",
      payload: value,
    });
  };

  const getUserInput=(event)=>{
    setNewToDo(event.target.value)
  }

  const completionToggleHandler = () => {
    dispatch({
      type: "TOGGLE_TODO",
    });
  };

  return (
    <div className="todo-container__card">
      <div className="todo-user__input">
        <input
          type="text"
          className="todo-user__inputfield"
          placeholder="Enter TODO"
          onChange={getUserInput}
        />
        <div className="todo-addButton">
          <button
            style={{
              height: "50px",
              width: "80px",
              border: "1px solid #ccc",
              borderRadius: "20px",
              margin: "auto",
            }}
            onClick={addTodoHandler}
          >
            Add Todo
          </button>
        </div>
      </div>

      {state.todoItemList.map((e) => (
        <TodoItem
          todos={e}
          onDeleteHandler={removeTodoHandler}
          completionToggleHandler={completionToggleHandler}
        />
      ))}
    </div>
  );
}
