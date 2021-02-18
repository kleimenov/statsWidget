import React from "react";
import Legend from "./Legend";
import Card from "./Card";
import Chart from "./Chart";

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

/*

<Card key={index} dataElement={ currElement } />
return (
    <div>
      <Legend />
      <ul>
        {data.gaugeData.map((currElement, index) => {
          <Card key={index} dataElement={currElement} />;
        })}
      </ul>
    </div>
  );


   <ul>
      {data.areaData.map((currElement, index) => 
          <Chart key={index} dataElement={currElement} />
        )}
      </ul>
*/
