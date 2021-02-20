import React, { useState, useEffect } from "react";
import * as d3 from "d3";

const UsedD3 = (renderChartFn, dependencies) => {
  const ref = React.useRef();
  React.useEffect(() => {
    renderChartFn(d3.select(ref.current));
    return () => {};
  }, dependencies);
  return ref;
};

export default UsedD3;
