import React from "react";
import ReactECharts from "echarts-for-react";
import echarts from "echarts";
import "echarts/lib/chart/bar";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";

export const barChartData = {
  labels: ["Category 1", "Category 2", "Category 3", "Category 4"],
  datasets: [
    {
      label: "Your Legend",
      data: [10, 20, 15, 25], // Replace these values with your actual data points
    },
  ],
};

const barChartOption = {
  title: {
    text: "Title",
  },
  tooltip: {},
  legend: {
    data: ["Your Legend"],
  },
  xAxis: {
    data: barChartData.labels,
  },
  yAxis: {},
  series: [
    {
      name: "Your Legend",
      type: "bar",
      data: barChartData.datasets[0].data,
    },
  ],
};
function BarChart() {
  return <ReactECharts option={barChartOption} style={{ height: "400px" }} />;
}
export default BarChart;
