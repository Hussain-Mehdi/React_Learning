import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

export default function ExpenseList(props) {
  if (props.item.length === 0) {
    return <h2 className="expenseList-filter__message">Found no expenses</h2>;
  }

  return (
    <ul className="expenseList__list">
      {props.item.map((e) => (
        <ExpenseItem
          key={e.id}
          title={e.title}
          amount={e.amount}
          date={e.date}
        />
      ))}
    </ul>
  );
}
