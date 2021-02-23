import React from "react";
import Areachart from "./Areachart";

const Chart = ({ data, currentCard }) => {
  return (
    <div className="chart-content-holder">
      <div className="chart-legend-wrapper">
        <h5 className="chart-title">{currentCard} TREND</h5>
        <ul className="chart-terms-wrapper">
          <li>Day</li>
          <li>Week</li>
          <li>Month</li>
          <li>Quarter</li>
          <li>Half</li>
          <li>Year</li>
        </ul>
      </div>
      <Areachart data={data[currentCard]} />
    </div>
  );
};

export default Chart;

