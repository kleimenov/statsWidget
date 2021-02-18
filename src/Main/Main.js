import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import Chart from "./Chart";

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch("http://localhost:8080/"); //If you will use different PORT on server-side, don't forget to change  it here
    const data = await response.json();
    console.log(data)
    setData(data);
  };

  console.log(data);

  return (
    <div className="tmpMain">
      <h3 className="tmpMainHeader">Main component</h3>
      <Filter />
      <Chart />
    </div>
  );
};

export default Main;
