import React from "react";

const Cards = ( {detaElement} ) => {
  
  console.log(detaElement)

  return (
    <li>
     {detaElement.name}/{detaElement.score}/{detaElement.sample}
    </li>
  );
};

export default Cards;
