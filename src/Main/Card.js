import React from "react";

const Card = ({ dataElement, filterState, setFilterState }) => {
  const clickHandler = (item) => {
    setFilterState(true);
    console.log("Xyi " + item);
  };

  return (
    <li onClick={() => clickHandler(dataElement.name)}>
      {dataElement.name}/{dataElement.score}/{dataElement.sample}
    </li>
  );
};

export default Card;
