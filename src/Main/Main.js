import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import Filter from "./Filter";
import Chart from "./Chart";

const Main = () => {
  //const [data, setData] = useState({ gaugeData: [], areaData: {} });
  const [currentCard, setCard] = useState("Quality Score");
  const [gaugeData, setGaugeData] = useState([]);
  const [areaData, setAreaData] = useState({ "Quality Score": [] });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch("http://localhost:8080/"); //If you will use different PORT on server-side, don't forget to change  it here
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
          <FontAwesomeIcon icon={faGlobe} size="lg"/> 
          <span className="icon-separator">Diagnostic tool</span>
        </div>
      </div>
      <div className="main-graphs-holder">
        <Filter data={gaugeData} setCard={setCard} />
        <Chart data={areaData} currentCard={currentCard} />
      </div>
    </div>
  );
};

export default Main;
