import React from "react";
import * as d3 from "d3";
import UseD3 from "./UseD3";

const Areachart = ({ data }) => {
  
  const ref = UseD3((svg) => {
    let dataX = data.map((item) => getMonthFromString(item.date));
    function getMonthFromString(mon) {
      let monthDateFormat = new Date(Date.parse(mon + " 1, 2020"));
      return monthDateFormat;
    }

    var margin = { top: 120, right: 25, bottom: 30, left: 35 },
      width = 410,
      height = 150;

    var n = data.length;

    var xScale = d3
      .scaleTime()
      .domain([d3.min(dataX), d3.max(dataX)])
      .range([0, width])

      

    var yScale = d3
      .scaleLinear()
      .domain([
        d3.min(data.map((month) => month.score)),
        d3.max(data.map((month) => month.score)),
      ])
      .range([height, 0]);

    var area = d3
      .area()
      .x(function (d, i) {
        return xScale(dataX[i]);
      })
      .y0(height)
      .y1(function (d) {
        return yScale(d.y);
      })
      .curve(d3.curveMonotoneX);

    var line = d3
      .area()
      .x(function (d, i) {
        return xScale(dataX[i]);
      })
      .y(function (d) {
        return yScale(d.y);
      })
      .curve(d3.curveMonotoneX);

    var dataset = d3.range(n).map(function (d, i) {
      return { y: data[i].score };
    });

    svg.selectAll("*").remove();

    let g = svg
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    g.append("g")
      .attr("class", "x axis")
      .attr("class", "xLegend")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xScale)
      .tickValues(dataX)
      );


    g.append("path")
      .datum(dataset)
      .attr("class", "area")
      .attr("d", area);

    g.append("linearGradient")				
      .attr("id", "area-gradient")			
      .attr("gradientUnits", "userSpaceOnUse")
      .attr("gradientTransform", "rotate(90)")		
      .selectAll("stop")						
      .data([								
        {offset: "0%", color: "#1b71b5"},		
        {offset: "30%", color: "#b6d4ee"},	
      ])					
    .enter().append("stop")			
      .attr("offset", function(d) { return d.offset; })	
      .attr("stop-color", function(d) { return d.color; });

    g.append("path")
      .datum(dataset)
      .attr("class", "line")
      .attr("d", line);

    g.selectAll(".dot")
      .data(dataset)
      .enter()
      .append("text")
      .attr("text-anchor", "top")
      .attr("fill", "black")
      .attr("font-size", "12px")
      .attr("x", function (d, i) {
        return xScale(dataX[i]);
      })
      .attr("y", function (d) {
        return yScale(d.y + 3);
      })
      .text((d, i) => {
        return data[i].score + "%";
      });

    g.selectAll(".dot")
      .data(dataset)
      .enter()
      .append("circle")
      .attr("class", "dot")
      .attr("cx", function (d, i) {
        return xScale(dataX[i]);
      })
      .attr("cy", function (d) {
        return yScale(d.y);
      })
      .attr("r", 6);
  });

  return (
    <div>
      <svg ref={ref} className="area"></svg>
    </div>
  );
};

export default Areachart;
