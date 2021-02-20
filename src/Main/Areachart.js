import React from "react";
import { svg } from "d3";

const Areachart = ({ data }) => {
  console.log(data);
  //data.map((item) => console.log(item.score))



  const color = d3.scaleOrdinal(["#1b71b5", "#b6d4ee"]);


  return (
    <div>
      {data.map((item, index) => 
        <li>{item.date}/ {item.score}</li>
      )}
    </div>
  )
    
};

export default Areachart;
