import React from "react";
import Areachart from "./Areachart";

const Chart = ({ data, currentCard }) => {
  //console.log('chart')
  //console.log(data[currentCard]);
  //console.log(data)

  //data[currentCard]

  return (
    <div>
      <h5>{currentCard}</h5>

      {data[currentCard].map((item, index) => (
        //<p>{item.date} ~ {item.score}</p>
        <Areachart key={ index } dataElement={ item } />
      ))}
    </div>
  );
};

export default Chart;
