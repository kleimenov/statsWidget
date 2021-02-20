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
    
    var margin = { top: 50, right: 10, bottom: 30, left: 60 },
      width = 420, // Use the window's width
      height = 280; // Use the window's height
    
  
    var n = data.length;
    
    
    var xScale = d3
      .scaleTime()
      .domain([d3.min(dataX), d3.max(dataX)]) // input
      .range([0, width]); // output
    
  
    var yScale = d3
      .scaleLinear()
      .domain([
        d3.min(data.map((month) => month.score)),
        d3.max(data.map((month) => month.score)),
      ]) // input
      .range([height, 0]); // output
    
  
    var line = d3
      .line()
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
    
   
     svg
      .select(".area")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    svg.selectAll("*").remove()

    svg
      .append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xScale).tickValues(dataX)); 
    
  
    svg.append("g").attr("class", "y axis").call(d3.axisLeft(yScale));
    
    svg
      .append("path")
      .datum(dataset) 
      .attr("class", "line") 
      .attr("d", line); 
    
   
    svg
      .selectAll(".dot")
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
      .attr("r", 5)
      .on("mouseover", function (a, b, c) {
        this.attr("class", "focus");
      })
      .on("mouseout", function () {});
  })
  
  

  return (
    <div>
      <svg ref={ref} className="area"></svg>
    </div>
  );
};

export default Areachart;
