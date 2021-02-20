import React from "react";
import * as d3 from "d3";
import Donutchart from "./Donutchart"

const Card = ({ dataElement, setCard }) => {
  
  const clickHandler = (cardName) => {
    setCard(cardName);
  };

  let cardClassName = 'graph-card-'+dataElement.name.split(' ').join('')
  
  return (
    <li className="graph-card" onClick={() => clickHandler(dataElement.name)}>
      <div className="graph-content">
        <span>{dataElement.name}</span>
        <Donutchart score={dataElement.score} cardClass={cardClassName}/>
        <span>{dataElement.sample}</span>
      </div>
    </li>
  );
};

export default Card;


/*
div className="graph-content">
        <span>{dataElement.name}</span>
        <span>{donut(dataElement)}</span>
        <span>{dataElement.sample}</span>
      </div>
*/