import React from "react";
import ExpenseForm from "../Expense Form/ExpenseForm";
import Card from "../UI/Card";

export default function NewExpense(props) {
  const saveExpenseDataHandler = (expneseData) => {
    const newExpense = {
      ...expneseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(newExpense);
  };

  return (
    <div>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}
