import React from "react";
import Legend from "./Legend";
import Card from "./Card";


const Filter = ({ data, setCard }) => {
  //console.log('filter')
  //console.log(data)
  
  return (
    <div>
      <Legend />
      <ul className="graph-cards-wrapper">
        {data.map((currElement, index) => (
          <Card key={index} dataElement={currElement} setCard={setCard} />
        ))}
      </ul>
    </div>
  );
};

export default Filter;

