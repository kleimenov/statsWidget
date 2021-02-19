import React from "react";

const Card = ({ dataElement, setCard }) => {
  const clickHandler = (cardName) => {
    setCard(cardName);
  };

  return (
    <li className="graph-card" onClick={() => clickHandler(dataElement.name)}>
      <div className="graph-content">
        <span>{dataElement.name}</span>
        <span>{dataElement.score}</span>
        <span>{dataElement.sample}</span>
      </div>
    </li>
  );
};

export default Card;
