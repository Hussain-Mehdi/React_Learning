import React, { useState } from "react";
import InputGroup from "./InputGroup";
import ButtonGroup from "../Button/ButtonGroup";
import './InputForm.css';

const INITIAL_VALUES = {
  "current-saving": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};

export default function InputForm(props) {
  const [userInput, setUserInput] = useState(INITIAL_VALUES);

  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(userInput);
  };

  const resetHandler = (event) => {
    setUserInput(INITIAL_VALUES);
  };

  const inputChangeHandler = (input, value) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [input]: value,
      };
    });
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div className="input-group">
          <InputGroup
            label="Current Saving"
            htmlFor="current-saving"
            type="number"
            onChangeHandler={inputChangeHandler}
            value={userInput["current-saving"]}
          />
          <InputGroup
            label="Yearly Saving"
            htmlFor="yearly-contribution"
            type="number"
            onChangeHandler={inputChangeHandler}
            value={userInput["yearly-contribution"]}
          />
        </div>
        <div className="input-group">
          <InputGroup
            label="Expected Interest"
            htmlFor="expected-return"
            type="number"
            onChangeHandler={inputChangeHandler}
            value={userInput["expected-return"]}
          />
          <InputGroup
            label="Investment Duration"
            htmlFor="duration"
            type="number"
            onChangeHandler={inputChangeHandler}
            value={userInput["duration"]}
          />
        </div>
        <ButtonGroup onReset={resetHandler} />
      </form>
    </div>
  );
}
