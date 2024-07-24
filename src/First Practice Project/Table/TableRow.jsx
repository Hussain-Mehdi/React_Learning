import React from "react";
import './Table.css'

const formatter = new Intl.NumberFormat('en-US',{
  style:'currency', 
  currency:'USD', 
  minimumFractionDigits:2, 
  maximumFractionDigits:2 
});

export default function TableRow(props) {
  console.log(props.initialInvestment);
  return (
    <div>
      <tr>
        <td>{props.data.year}</td>
        <td>{formatter.format(props.data.savingsEndOfYear)}</td>
        <td>{formatter.format(props.data.yearlyInterest)}</td>
        <td>
          {formatter.format(props.data.savingsEndOfYear -
            props.initialInvestment -
            props.data.yearlyContribution)}
        </td>
        <td>{formatter.format(props.initialInvestment + props.data.yearlyContribution)}</td>
      </tr>
    </div>
  );
}
