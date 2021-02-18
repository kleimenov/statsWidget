import React from "react";
import Legend from "./Legend";
import Cards from "./Cards";

const Filter = (props) => {
  return (
    <div>
      <Legend />
      <ul>
        {props.data.map((item) => (
          <Cards detaElement={item} />
        ))}
      </ul>
    </div>
  );
};

export default Filter;

/*
<ul>
        {props.data.map(item => (
          <Cards detaElement={item}/>
        ))}
      </ul>
*/
