import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faMapPin } from "@fortawesome/free-solid-svg-icons";
import Filter from "./Filter";
import Chart from "./Chart";

const Main = () => {
  const [currentCard, setCard] = useState("Quality Score");
  const [gaugeData, setGaugeData] = useState([]);
  const [areaData, setAreaData] = useState({ "Quality Score": [] });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch("http://localhost:3030/"); //NOTIFICATION If you will use different PORT on server-side, don't forget to change it here
    const data = await response.json();
    setGaugeData(data.gaugeData);
    setAreaData(data.areaData);
  };

  return (
    <div>
      <div className="container">
        <h3 className="main-title">Performance management</h3>
      </div>
      <div className="bg-grey">
        <div className="container">
          <FontAwesomeIcon icon={faGlobe} size="lg" color="gray" />
          <span className="icon-separator">Diagnostic tool</span>
          <span className="icon-pin">
            <FontAwesomeIcon icon={faMapPin} size="sm" color="gray" />
          </span>
        </div>
      </div>
      <div className="container">
        <div className="main-graphs-holder">
          <Filter data={gaugeData} setCard={setCard} />
          <Chart data={areaData} currentCard={currentCard} />
        </div>
      </div>
    </div>
  );
};

export default Main;
