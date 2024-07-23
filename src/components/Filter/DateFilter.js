import React, { useState } from "react";
import "./DateFilter.css";
export default function DateFilter(props) {
 
  const[selectedYear,setSelectedYear]=useState('All');

  const selectedDateHandler=(event)=>{
    setSelectedYear(event.target.value);
    props.onDateChange(event.target.value)

  }
 
  return (
    <div className="datefilter__container">
      <h4 id="datefilter__heading">Filter by year</h4>
      <div className="datefilter__dropdown">
        <select name="" id="" onChange={selectedDateHandler} > 
          <option value="All">All</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
    </div>
  );
}
