import React from 'react'
import TableRow from './TableRow'
import './Table.css'

export default function Table(props) {
  return (
    <div>
      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {
props.yearlyData.map((e)=>(<TableRow data={e} initialInvestment={props.initialInvestment}/>))
          }
        </tbody>
      </table>
    </div>
  )
}
