import React from "react";
import Legend from "./Legend";
import Cards from "./Cards";
import Chart from './Chart'

const Filter = ({ data }) => {
  /*
  data.gaugeData.map((currElement, index) => {
    <Cards key={index} detaElement={currElement} />;
  });
*/
  return (
    <div className="tmpMain">
      <Legend />
      <ul className="tmpFilter">
        {data.gaugeData.map((currElement, index) => 
          <Cards key={index} detaElement={currElement} />
        )}
      </ul>
      <Chart />
    </div>
  );
};

export default Filter;

/*

<Cards key={index} detaElement={ currElement } />
return (
    <div>
      <Legend />
      <ul>
        {data.gaugeData.map((currElement, index) => {
          <Cards key={index} detaElement={currElement} />;
        })}
      </ul>
    </div>
  );
*/
