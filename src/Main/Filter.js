import React from "react";
import Legend from "./Legend";
import Card from "./Card";


const Filter = ({ data, setCard }) => {
  return (
    <div className="tmpMain">
      <Legend />
      <ul className="tmpFilter">
        {data.map((currElement, index) => (
          <Card key={index} dataElement={currElement} setCard={setCard} />
        ))}
      </ul>
    </div>
  );
};

export default Filter;
