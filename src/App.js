import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import { useState } from "react";

function App() {
  const expense = [
    { title: "Car Insurance", amount: 294.23, date: new Date(2024, 2, 28) },
    { title: "Health Insurance", amount: 394.23, date: new Date(2024, 2, 27) },
    { title: "Home Insurance", amount: 494.23, date: new Date(2024, 2, 26) },
    { title: "Travel Insurance", amount: 594.23, date: new Date(2024, 2, 25) },
    { title: "Life Insurance", amount: 694.23, date: new Date(2024, 2, 24) },
    { title: "Pet Insurance", amount: 794.23, date: new Date(2024, 2, 23) },
    { title: "Rental Insurance", amount: 894.23, date: new Date(2024, 2, 22) },
  ];

  return (
    <div>

     <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      ></ExpenseItem>
      

    </div>
  );
}

export default App;
