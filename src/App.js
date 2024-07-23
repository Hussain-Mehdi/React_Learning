import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import CardContainer from "./components/Cards/CardContainer";
import NewExpense from "./components/New Expense/NewExpense";
import CourseGoalList from './component/CourseGoals/CourseGoalList/CourseGoalList'
import CourseInput from './component/CourseGoals/CourseInput/CourseInput'

const DUMMY_EXPENSES = [
  { title: "Car Insurance", amount: 294.23, date: new Date(2019, 2, 28) },
  { title: "Health Insurance", amount: 394.23, date: new Date(2024, 3, 27) },
  { title: "Home Insurance", amount: 494.23, date: new Date(2024, 4, 26) },
  { title: "Travel Insurance", amount: 594.23, date: new Date(2020, 4, 25) },
  { title: "Life Insurance", amount: 694.23, date: new Date(2022, 5, 24) },
  { title: "Pet Insurance", amount: 794.23, date: new Date(2021, 6, 23) },
  { title: "Rental Insurance", amount: 894.23, date: new Date(2024, 7, 22) },
  { title: "Travel Insurance", amount: 594.23, date: new Date(2024, 8, 25) },
  { title: "Life Insurance", amount: 694.23, date: new Date(2024, 9, 24) },
  { title: "Pet Insurance", amount: 794.23, date: new Date(2024, 10, 23) },
  { title: "Rental Insurance", amount: 894.23, date: new Date(2024, 12, 22) },
];

function App() {
  // const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // const addExpenseHandler = (expense) => {
  //   setExpenses((preExpense) => {
  //     return [expense, ...preExpense];
  //   });
  // };

  // return (
  //   <div>
  //     {/* <h2>Let's get started!</h2>
  //     <NewExpense onAddExpense={addExpenseHandler} />
  //     <Expenses item={expenses} /> */}
      
  //     {/* <CardContainer/> */}
  //   </div>
  // );

  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' }
  ]);

  const addGoalHandler = enteredText => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = goalId => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
        {/* {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
}

export default App;
