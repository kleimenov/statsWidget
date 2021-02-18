import React from "react";

const Card = ({ dataElement, setCard }) => {
  const clickHandler = (item) => {
    setCard(item);
    //console.log(item);
  };

  return (
    <li onClick={() => clickHandler(dataElement.name)}>
      {dataElement.name}/{dataElement.score}/{dataElement.sample}
    </li>
  );
};

export default Card;
