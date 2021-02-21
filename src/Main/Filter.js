import React, {useState} from "react";
import Legend from "./Legend";
import Card from "./Card";

const Filter = ({ data, setCard }) => {
 

  return (
    <div>
      <Legend />
      <ul className="graph-cards-wrapper">
        {data.map((currElement, index) => (
          <Card key={index} dataElement={currElement} setCard={setCard} dataIndex={index}/>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
