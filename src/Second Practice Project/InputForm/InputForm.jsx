import React, { useState } from "react";
import UserInput from "../UserInput/UserInput";
import "./InputForm.css";
import FormButton from "./FormButton";
import { useRef } from "react";

export default function InputForm(props) {
  const userNameInput = useRef();
  const userAgeInput = useRef();

  const userSubmissionHandler = (event) => {
    event.preventDefault();
    if (userNameInput.current.value.trim().length > 0 || userAgeInput.current.value.trim().length > 0) {
      
      const nameInput = userNameInput.current.value;
      const ageInput = userAgeInput.current.value;
      props.onSubmission({
        username: nameInput,
        age: ageInput,
      });
     
    }

    userNameInput.current.value = "";
    userAgeInput.current.value = "";
    
  };

  return (
    <div className="form-container">
      <form action="" onSubmit={userSubmissionHandler}>
        {/* <UserInput
          name="Username"
          id="userName-Input"
          refer={userNameInput}
        />
        <UserInput
          name="Age"
          id="userAge-Input"
          refer={userAgeInput}
        /> */}

        <div className="group-input">
          <label htmlFor="">Username</label>
          <div className="input-control">
            <input type="text" ref={userNameInput} />
          </div>
        </div>
        <div className="group-input">
          <label htmlFor="">Age</label>
          <div className="input-control">
            <input type="text" ref={userAgeInput} />
          </div>
        </div>
        <FormButton />
      </form>
    </div>
  );
}
