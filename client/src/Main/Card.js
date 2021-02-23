import React from "react";
import Donutchart from "./Donutchart";

const Card = ({ dataIndex, dataElement, setCard }) => {
  const clickHandler = (e, cardName) => {
    setCard(cardName);

    let currentActive = document.querySelector(".graph-card-checked");

    if (currentActive) {
      currentActive.classList.remove("graph-card-checked");
      currentActive
        .querySelector(".graph-content path")
        .setAttribute("fill", "#1170bd");
    }

    e.currentTarget.classList.add("graph-card-checked");
  };

  let active = !dataIndex;

  return (
    <li
      className={`graph-card ${active ? "graph-card-checked" : ""}`}
      onClick={(e) => clickHandler(e, dataElement.name)}
    >
      <div className="graph-content">
        <span>{dataElement.name}</span>
        <Donutchart score={dataElement.score} active={active} />
        <div className="graph-score">
          <span>{dataElement.score}</span>
          <span>NA</span>
        </div>
        <span className="graph-sample">Sample: {dataElement.sample}</span>
      </div>
    </li>
  );
};

export default Card;
