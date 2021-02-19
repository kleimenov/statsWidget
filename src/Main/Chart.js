import React from "react";
import * as d3 from "d3";

//import Areachart from "./Areachart";

const Chart = ({ data, currentCard }) => {
  //console.log('chart')
  console.log(data[currentCard]);
  //console.log(data)
  //data[currentCard]

  const svg = d3.select(".graphHolder");
  console.log(svg);

  

  return (
    <div>
      <h5>{currentCard}</h5>
      <div className="graphHolder"></div>
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
