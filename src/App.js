// import logo from "./logo.svg";
import "./App.css";
import "./Third Project/PriceModal/PriceModal.jsx";
import React from "react";
import Header from "./Third Project/Header/Header";
import FoodList from "./Third Project/List/FoodList";
import Slogan from "./Third Project/Slogan/Slogan";
import { useState } from "react";
import PriceModal from "./Third Project/PriceModal/PriceModal.jsx";
import CartProvider from "./Third Project/store/CartProvider.jsx";
// import ExpenseItem from "./components/Expenses/ExpenseItem";
// import React from 'react'
// import CounterApp from "./useReducer Tasks/CounterApp";
// import ToggleSwitch from "./useReducer Tasks/ToggleSwitch";
// import SignUpForm from "./useReducer Tasks/SignUpForm";
// import TodoApp from "./useReducer Tasks/TodoApp";
// import ThemeChanger from "./useReducer Tasks/ThemeChanger";
// import Expenses from "./components/Expenses/Expenses";
// import CardContainer from "./components/Cards/CardContainer";
// import NewExpense from "./components/New Expense/NewExpense";
// import CourseGoalList from "./component/CourseGoals/CourseGoalList/CourseGoalList";
// import CourseInput from "./component/CourseGoals/CourseInput/CourseInput";
// import Header from "./First Practice Project/Header/Header";
// import InputGroup from "./First Practice Project/InputGroup/InputGroup";
// import Card from "./components/UI/Card";
// import Button from "./First Practice Project/Button/Button";
// import ButtonGroup from "./First Practice Project/Button/ButtonGroup";
// import Table from "./First Practice Project/Table/Table";
// import InputForm from "./Second Practice Project/InputForm/InputForm";
// import UserInput from "./Second Practice Project/UserInput/UserInput";
// import UserList from "./Second Practice Project/UserList/UserList";
// import ErrorModal from "./Second Practice Project/UI/ErrorModal";
// import CircularAvatar from "./Second Practice Project/UI/CircularAvatar";
// import MainHeader from "./Side_Effect_Reference_Context_API/MainHeader/MainHeader";
// import Login from "./Side_Effect_Reference_Context_API/Login/Login";
// import Home from "./Side_Effect_Reference_Context_API/Home/Home";
// import { useContext } from "react";
// import AuthContext, { AuthContextProvider } from "./store/auth-context";
// import DataFetching from "./useEffect Tasks/DataFetching";
// import MountUnMountComponent from "./useEffect Tasks/MountUnMountComponent";
// import CounterApp from "./useEffect Tasks/CounterApp";
// import CleanUpFucntion from "./useEffect Tasks/CleanUpFucntion";
// import ConditionalEffect from "./useEffect Tasks/ConditionalEffect";
// import DependentDataFetching from "./useEffect Tasks/DependentDataFetching";
// import WebSocketDemo from "./useEffect Tasks/WebSocketDeno";

// const DUMMY_EXPENSES = [
//   { title: "Car Insurance", amount: 294.23, date: new Date(2019, 2, 28) },
//   { title: "Health Insurance", amount: 394.23, date: new Date(2024, 3, 27) },
//   { title: "Home Insurance", amount: 494.23, date: new Date(2024, 4, 26) },
//   { title: "Travel Insurance", amount: 594.23, date: new Date(2020, 4, 25) },
//   { title: "Life Insurance", amount: 694.23, date: new Date(2022, 5, 24) },
//   { title: "Pet Insurance", amount: 794.23, date: new Date(2021, 6, 23) },
//   { title: "Rental Insurance", amount: 894.23, date: new Date(2024, 7, 22) },
//   { title: "Travel Insurance", amount: 594.23, date: new Date(2024, 8, 25) },
//   { title: "Life Insurance", amount: 694.23, date: new Date(2024, 9, 24) },
//   { title: "Pet Insurance", amount: 794.23, date: new Date(2024, 10, 23) },
//   { title: "Rental Insurance", amount: 894.23, date: new Date(2024, 12, 22) },
// ];
// const userDataList = [];
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

  // const [courseGoals, setCourseGoals] = useState([
  //   { text: 'Do all exercises!', id: 'g1' },
  //   { text: 'Finish the course!', id: 'g2' }
  // ]);

  // const addGoalHandler = enteredText => {
  //   setCourseGoals(prevGoals => {
  //     const updatedGoals = [...prevGoals];
  //     updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
  //     return updatedGoals;
  //   });
  // };

  // const deleteItemHandler = goalId => {
  //   setCourseGoals(prevGoals => {
  //     const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
  //     return updatedGoals;
  //   });
  // };

  // let content = (
  //   <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  // );

  // if (courseGoals.length > 0) {
  //   content = (
  //     <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
  //   );
  // }

  // return (
  //   <div>
  //   //   <section id="goal-form">
  //   //     <CourseInput onAddGoal={addGoalHandler} />
  //   //   </section>
  //   //   <section id="goals">
  //   //     {content}
  //   //     {/* {courseGoals.length > 0 && (
  //   //       <CourseGoalList
  //   //         items={courseGoals}
  //   //         onDeleteItem={deleteItemHandler}
  //   //       />
  //   //     ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  //   //     } */}
  //   //   </section>
  //   // </div>
  // );

  //   const [userInput, setUserInput] = useState('');

  //   const calculateHandler = (userInputs) => {
  //     setUserInput(userInputs);
  //     console.log(userInputs['current-saving']);
  //   };

  //   const yearlyData = [];
  //   if (userInput) {
  //     let currentSavings = +userInput["current-saving"];
  //     const yearlyContribution = +userInput["yearly-contribution"];
  //     const expectedReturn = +userInput["expected-return"] / 100;
  //     const duration = +userInput["duration"];

  //     for (let i = 0; i < duration; i++) {
  //       const yearlyInterest = currentSavings * expectedReturn;
  //       currentSavings += yearlyInterest + yearlyContribution;
  //       yearlyData.push({
  //         year: i + 1,
  //         yearlyInterest: yearlyInterest,
  //         savingsEndOfYear: currentSavings,
  //         yearlyContribution: yearlyContribution,
  //       });
  //     }
  //   }

  //   return (
  //     <div>
  //       <Header />
  //       <InputForm onCalculate={calculateHandler} />
  //       {!userInput && <p style={{textAlign:'center'}} >No Data available</p>}
  //       {
  //         userInput && <Table
  //         yearlyData={yearlyData}
  //         initialInvestment={userInput['current-saving']}
  //       />
  //       }
  //     </div>
  //   );

  // const [userList, setUserList] = useState(userDataList);
  // const[showModal,setShowModal] = useState(false);

  // const showErrorModalHandler=(value)=>{
  //   setShowModal(value)
  // }

  // const userSubmissionHandler = (value) => {
  //   const userListObj={
  //     ...value,
  //     key:Math.random().toLocaleString()
  //   }
  //   setUserList([...userList,userListObj]);
  //   console.log(userListObj);
  //   setShowModal(true)
  // };

  // const deleteItemHandler=(key)=>{
  //   setUserList((prevState)=>{
  //     const updateUserItem=prevState.filter(item=>item.key!==key);
  //     return updateUserItem;
  //   })
  // }

  // return (
  //   <div className="App">
  //     {showModal&&<ErrorModal onModelClose={showErrorModalHandler}/>}
  //     <InputForm onSubmission={userSubmissionHandler} />
  //     {userList.length>0?<UserList userData={userList} deleteHandler={deleteItemHandler}/>:<p></p>}
  //   <CircularAvatar/>
  //   </div>
  // );

  // const ctx = useContext(AuthContext);

  // return (
  //   <>
  //     <MainHeader />
  //     <main>
  //       {!ctx.isLoggedIn && <Login />}
  //       {ctx.isLoggedIn && <Home />}
  //     </main>
  //   </>
  // );

  // return(
  //   <>
  //   {/* <DataFetching/> */}
  //   {/* <MountUnMountComponent/> */}
  //   {/* <CounterApp/> */}
  //   {/* <CleanUpFucntion/> */}
  //   {/* <ConditionalEffect/> */}
  //   {/* <DependentDataFetching/> */}
  //   {/* <WebSocketDemo/> */}
  //   {/* <CounterApp/> */}
  //   {/* <ToggleSwitch/>                                                                  */}
  //   {/* <SignUpForm/> */}
  //   {/* <TodoApp/> */}
  //   {/* <ThemeChanger/> */}
  //   </>
  // );

  const [showModel, setShowModel] = useState(false);

  const modelHandler = (value) => {
    setShowModel(value);
  };

  return (
    <CartProvider>
      {showModel && <PriceModal onClose={modelHandler} />}
      <div className="App">
        <Header onShowModel={modelHandler}  />
        <Slogan />
        <FoodList  />
      </div>
   </CartProvider>
  );
}
export default App;
