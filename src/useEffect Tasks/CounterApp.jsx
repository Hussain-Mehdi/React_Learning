import React, { useEffect, useState } from 'react'

export default function CounterApp() {
  
  const [counter,setCounter] = useState(1);

  useEffect(()=>{
    console.log("Use effect called");
  },[counter])

  const counterHandler=()=>{
    const value = counter+1;
    setCounter(value); 
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={counterHandler}>Increment</button>   
    </div>
  )
}
