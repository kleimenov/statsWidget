import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const Legend = () => {
  return (
    <div>
      <h5 className="legend-title">Filters</h5>
      <ul className="filter-legend">
        <li className="legned-item">
          <span className="legend-text">All CQA Results</span>
          <FontAwesomeIcon icon={faExclamationCircle} color="gray" />
        </li>
        <li className="legned-item">
          <span className="legend-text">CQAs with Closed Loop</span>
          <FontAwesomeIcon icon={faExclamationCircle} color="gray" />
        </li>
      </ul>
    </div>
  );
};

export default Legend;
