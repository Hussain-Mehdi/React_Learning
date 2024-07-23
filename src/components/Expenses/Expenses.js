import React , {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import NewExpense from "../New Expense/NewExpense";
import DateFilter from "../Filter/DateFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {

  const [filterYear, setFilterYear] = useState("All");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filterExpenses = filterYear.toUpperCase()=="ALL"?props.item:props.item.filter(
    (item) => item.date.getFullYear().toString() === filterYear
  );

  return (
    <div className="expense">
      <DateFilter onDateChange={filterChangeHandler}/>
      <ExpensesChart expenses={filterExpenses}/>
      <ExpenseList item={filterExpenses}/>
    </div>
  );
}
