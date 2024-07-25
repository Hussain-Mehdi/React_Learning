import React, { useState } from "react";
import UserInput from "../UserInput/UserInput";
import "./InputForm.css";
import FormButton from "./FormButton";

export default function InputForm(props) {
  const [usernameInput, setUsernameInput] = useState('');
  const [ageInput, setAgeInput] = useState('');

  const usernameInputHandler = (value) => {
    setUsernameInput(value);
  };

  const ageInputHandler = (value) => {
    setAgeInput(value);
  };

  const userSubmissionHandler = (event) => {
    if (usernameInput.trim().length > 0 || ageInput.trim().length > 0) {
      event.preventDefault();
      props.onSubmission({
        username: usernameInput,
        age: ageInput,
      });
    }
   
    setUsernameInput('');
    setAgeInput('');
  

  };

  return (
    <div className="form-container">
      <form action="" onSubmit={userSubmissionHandler}>
        <UserInput
          name="Username"
          id="userName-Input"
          onChangeHandler={usernameInputHandler}
          value={usernameInput}
        />
        <UserInput
          name="Age"
          id="userAge-Input"
          onChangeHandler={ageInputHandler}
          value={ageInput}
        />
        <FormButton />
      </form>
    </div>
  );
}
