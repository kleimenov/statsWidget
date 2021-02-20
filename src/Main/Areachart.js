import React from "react";
import * as d3 from "d3";
import { svg } from "d3";

const Areachart = ({ data }) => {
  //console.log(data);
  //data.map((item) => console.log(item.score))
  //const color = d3.scaleOrdinal(["#1b71b5", "#b6d4ee"]);
  let width = 500;
  let height = 500;

  function getMonthFromString(mon) {
    let monthDateFormat = new Date(Date.parse(mon + " 1, 2020"));
    //console.log(typeof monthDateFormat);
    return monthDateFormat;
  }

  let dataX = data.map((item) => getMonthFromString(item.date));
  let dataY = data.map((item) => item.score);

  //console.log(dataX);
  console.log(dataY);

  var svg = d3
    .select(".area")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .data(data);

  // // Add X axis --> it is a date format
  var x = d3
    .scaleTime()
    .domain([d3.min(dataX), d3.max(dataX)])
    .range([50, 450]);

  var xAxis = d3.axisBottom(x).ticks(4).tickFormat(d3.timeFormat("%B"));

  var y = d3
    .scaleLinear()
    .domain([d3.min(dataY), d3.max(dataY)])
    .range([10, 480]);

  var yAxis = d3.axisLeft(y);
  // .ticks(d3.min(dataY), d3.max(dataY), 5)
  // .tickValues(dataY);

  svg.append("g").attr("transform", "translate(0, 480)").call(xAxis);
  svg.append("g").attr("transform", "translate(50, 0)").call(yAxis);

  return (
    <div>
      <svg className="area"></svg>
    </div>
  );
};

export default Areachart;
/*
 {data.map((item, index) => (
        <li>
          {item.date}/ {item.score}
        </li>
      ))}
      */

/*

  let svg = d3
    .select(".area")
    .attr("width", 100)
    .attr("height", 100)
    .attr("fill", "#1b71b5");
  svg
    .append("path")
    .datum(data)
    .attr(
      "d",
      d3
        .area()
        .x((d) => {
          return xAxis(xScale.date);
        })
        .y1((d) => {
          return yAxis(d.score);
        })
    );
*/
//const xAxis = d3.svg.axis().scale(x).orient("bottom");

//const yAxis = d3.svg.axis().scale(y).orient("left");
