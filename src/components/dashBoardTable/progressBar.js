import React, { useEffect } from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

const ProgressBar = () => {
  const series = [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: "bar",
      stack: "a",
      name: "a",
    },
    {
      data: [10, 46, 64, "-", 0, "-", 0],
      type: "bar",
      stack: "a",
      name: "b",
    },
  ];

  const stackInfo = {};
  for (let i = 0; i < series[0].data.length; ++i) {
    for (let j = 0; j < series.length; ++j) {
      const stackName = series[j].stack;
      if (!stackName) {
        continue;
      }
      if (!stackInfo[stackName]) {
        stackInfo[stackName] = {
          stackStart: [],
          stackEnd: [],
        };
      }
      const info = stackInfo[stackName];
      const data = series[j].data[i];
      if (data && data !== "-") {
        if (info.stackStart[i] == null) {
          info.stackStart[i] = j;
        }
        info.stackEnd[i] = j;
      }
    }
  }

  for (let i = 0; i < series.length; ++i) {
    const data = series[i].data;
    const info = stackInfo[series[i].stack];
    for (let j = 0; j < series[i].data.length; ++j) {
      const isEnd = info.stackEnd[j] === i;
      const topBorder = isEnd ? 20 : 0;
      const bottomBorder = 0;
      data[j] = {
        value: data[j],
        itemStyle: {
          borderRadius: [topBorder, topBorder, bottomBorder, bottomBorder],
        },
      };
    }
  }

  const option = {
    tooltip: {},
    legend: {
      data: ["Your Legend"],
    },
    xAxis: {
      data: series,
    },
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: series,
  };

  return <ReactECharts option={option} style={{ height: "400px" }} />;
};

export default ProgressBar;
