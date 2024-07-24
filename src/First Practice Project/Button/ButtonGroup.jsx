import React from 'react'
import Button from './Button'
export default function ButtonGroup(props) {

  const resetHanlder=()=>{
      props.onReset();
  }

  return (
    <div>
       <p className="actions">
          <Button type="reset" onClick={resetHanlder} className="buttonAlt" name="Reset"/>
          <Button type="submit" className="button" name="Calculate"/>
        </p>
    </div>
  )
}
