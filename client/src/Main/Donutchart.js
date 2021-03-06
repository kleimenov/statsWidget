import React from "react";
import * as d3 from "d3";
import UseD3 from "./UseD3";

const Donutchart = ({ score }) => {
  const ref = UseD3(
    (svg) => {
      const color = d3.scaleOrdinal(["#1170bd", "#d7d7d7"]);
      const data = [score, 100 - score];
      const pie = d3.pie();

      svg.attr("width", 100).attr("height", 100);

      svg
        .selectAll("p")
        .data(pie(data))
        .enter()
        .append("path")

        .attr("d", d3.arc().innerRadius(17).outerRadius(22))
        .attr("fill", function (d, i) {
          return color(i);
        })
        .attr("transform", "translate(50, 50), scale(2)")
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
