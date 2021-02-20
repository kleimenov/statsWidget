import React from "react";
import { svg } from "d3";

const Areachart = ({ data }) => {
  //console.log(data);
  data.map((item) => console.log(item.score))


  return (
    <div>
      {data.map((item, index) => 
        <li>{item.date}/ {item.score}</li>
      )}
    </div>
  )
    
};

export default Areachart;
