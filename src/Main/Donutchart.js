import React, { useState, useEffect } from "react";
import * as d3 from "d3";
//import { svg } from "d3";
import UseD3 from "./UseD3";

const Donutchart = ({ score }) => {

  const ref = UseD3(
    (svg) => {
      //console.log(score)
      //Donut(score, cardClass)
      const color = d3.scaleOrdinal(["#1dafec", "#d7d7d7"]);
      const data = [score, 100 - score];
      const pie = d3.pie();

      svg.attr("width", 100).attr("height", 100);

      svg
        .selectAll("p")
        .data(pie(data))
        .enter()
        .append("path")

        .attr(
          "d",
          d3
            .arc()
            .innerRadius(10) 
            .outerRadius(17)
        )
        .attr("fill", function (d, i) {
          return color(i);
        })
        .attr("transform", "translate(50, 50), scale(2)")
        //.attr("stroke", "white")
        .style("opacity", 0.7);
    },
    [1]
  );

  return (
    <svg ref={ref}>
      <g className="plotArea" />
    </svg>
  );
};

export default Donutchart;
