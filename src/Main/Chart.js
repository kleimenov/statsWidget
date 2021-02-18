import React from "react";

const Chart = ({ data, currentCard }) => {
  //console.log('chart')
  //console.log(data[currentCard]);
  //console.log(currentCard)

  //data[currentCard]

  return (
    <div>
      <h5>{currentCard}</h5>

      {data[currentCard].map((item, index) => (
        <p>{item.date}</p>
      ))}
    </div>
  );
};

export default Chart;
