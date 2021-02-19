import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faChartLine, faCubes, faFileExport, faMapPin } from "@fortawesome/free-solid-svg-icons";
const Toolbar = () => {
  return (
    <div className="toolbar-container">
      <ul className="tools-list">
        <li>
          <FontAwesomeIcon icon={faMapPin} color="white"/>
        </li>
        <li>
          <FontAwesomeIcon icon={faChartLine} color="white" />
        </li>
        <li>
          <FontAwesomeIcon icon={faFileExport} color="white" />
        </li>
        <li>
          <FontAwesomeIcon icon={faCubes} color="white" />
        </li>
        <li>
          <FontAwesomeIcon icon={faFile} color="white" />
        </li>
      </ul>
    </div>
  );
};

export default Toolbar;
