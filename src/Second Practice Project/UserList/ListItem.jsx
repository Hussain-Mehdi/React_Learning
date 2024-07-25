import React from "react";
import "./UserList.css";

export default function ListItem(props) {
  const deleteUserHandler = () => {
    props.onDelete(props.userData["key"]);
  };

  return (
    <div className="list-item">
      <p>{`${props.userData["username"]}  (${props.userData["age"]}year old)`}</p>
      <div className="list-delete__icon">
        <button onClick={deleteUserHandler}>
          <i class="fa fa-trash" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}
