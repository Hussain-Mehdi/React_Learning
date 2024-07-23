import React, { useState } from "react";
import "./ExpenseForm.css";
import Card from "../UI/Card";

export default function ExpenseForm(props) {
  /*
  ======================
      Multiple States
  ======================
  */

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => setEnteredTitle(event.target.value);
  const amountChangeHandler = (event) => setEnteredAmount(event.target.value);
  const dateChangeHandler = (event) => setEnteredDate(event.target.value);

  /*
  ======================
      Single States
  ======================
  */

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   entertedDate: "",
  // });

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      id:Math.random().toLocaleString,
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <Card className="expense-form__controls">
      <form onSubmit={submitHandler}>
        <div className="expense-form__controls">
          <div className="expense-form__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="expense-form__control">
            <label>Amount</label>
            <input
              type="numbers"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="expense-form__control">
            <label>Date</label>
            <input
              type="date"
              min="2020-12-31"
              step="2024-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
          <div className="expense-form__action">
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </form>
    </Card>
  );
}
