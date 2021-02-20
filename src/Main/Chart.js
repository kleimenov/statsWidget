import React from "react";
import * as d3 from "d3";
import Areachart from "./Areachart";

//import Areachart from "./Areachart";

const Chart = ({ data, currentCard }) => {
  //console.log('chart')
  //console.log(data[currentCard]);
  

  

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

/*
{data[currentCard].map((item, index) => (
        //<p>{item.date} ~ {item.score}</p>
        <Areachart key={index} dataElement={item} />
      ))}
*/
