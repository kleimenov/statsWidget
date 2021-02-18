import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import Chart from "./Chart";

const Main = () => {
  const [data, setData] = useState({ gaugeData: [], areaData: {} });
  //const [gaugeData, setGaugeData] = useState([]);
  //const [areaData, setAreaData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch("http://localhost:8080/"); //If you will use different PORT on server-side, don't forget to change  it here
    const data = await response.json();
    setData(data);
    //setGaugeData(data.gaugeData);
    //setAreaData(data.areaData);
  };

  return (
    <div>
      <h3 className="tmpMainHeader">Main component</h3>
      <div className="tmpMain">
        <Filter data={data} />
      </div>
    </div>
  );
};

export default Main;
