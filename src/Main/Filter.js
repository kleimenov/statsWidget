import React from "react";
import Legend from "./Legend";
import Cards from "./Cards";

const Filter = ({ data }) => {
  /*
  data.gaugeData.map((currElement, index) => {
    <Cards key={index} detaElement={currElement} />;
  });
*/
  return (
    <div>
      <Legend />
      <ul>
        {data.gaugeData.map((currElement, index) => 
          <Cards key={index} detaElement={currElement} />
        )}
      </ul>
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
