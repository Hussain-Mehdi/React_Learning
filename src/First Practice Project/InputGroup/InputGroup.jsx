import React from "react";
import './InputForm.css';
export default function InputGroup(props) {

  const onChangeHandler = (input,value)=>{
    props.onChangeHandler(input,value);
  }

  return (
    <div>
      <p>
        <label htmlFor={props.htmlFor}>{props.label} ($)</label>
        <input type={props.type} id={props.htmlFor} value={props.value} onChange={(event)=>onChangeHandler(props.htmlFor,event.target.value)} />
      </p>
    </div>
  );
}
