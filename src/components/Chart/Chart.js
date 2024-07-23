import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

export default function Chart(props) {

  const dataPointsValues=props.dataPoints.map(expense=> expense.value);

  const totalMaximum = Math.max(...dataPointsValues);

  return (
    <div className="chart__container">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar 
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
