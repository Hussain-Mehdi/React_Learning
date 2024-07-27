import React, { useState,useEffect } from 'react'

export default function CleanUpFucntion() {
  const [counter,setCounter] = useState(1)
    useEffect(() => {
    const identifier = setInterval(() => {
        console.log("useEffect is called");
      
        setCounter((prevState)=>
prevState+1
        );
    }, 1000);
    return ()=>{
        clearInterval(identifier)
    }
    }, [])
  
    return (
    <div>
        <h1>{counter}</h1>
    </div>
  )
}
