import React, { useState, useEffect } from "react";

import * as d3 from "d3";


const Donutchart = ({score, cardClass}) => {



    const donut = (score, cardClass) => {

        //const radius = Math.min(30, 30) / 2 - 10;
        
        const color = d3.scaleOrdinal(["#1dafec", "#d7d7d7"]);
        console.log('hell ' +d3.select(`.${cardClass}`))
        const svg = d3
          .select(`.${cardClass}`)
          .append("svg")
          .attr("width", 100)
          .attr("height", 100)
          .append("g")
          .attr("transform", "translate(" + 100 / 2 + "," + 100 / 2 + "), scale(2)");

        //console.log(svg)
      
        const data = [score, 100-score];
        const pie = d3.pie();
        //console.log(pie(data))
      
        svg
        .selectAll('whatever')
        .data(pie(data))
        .enter()
        .append('path')
        .attr('d', d3.arc()
          .innerRadius(10)         // This is the size of the donut hole
          .outerRadius(17)
        )
        .attr('fill', function(d, i){ return(color(i)) })
        //.attr("stroke", "white")
        .style("opacity", 0.7)
    
      }
    return (
        <div className={cardClass}>
            hello
            {donut(score, cardClass)}
        </div>
    )
}

export default Donutchart; 