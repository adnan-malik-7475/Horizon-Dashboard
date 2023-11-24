import ReactECharts from "echarts-for-react";

const lineChartOptionsOverallRevenue = {
  title: {
    text: "Overall Revenue",
  },
  tooltip: {},
  legend: {
    data: ["Your Legend"],
  },

  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },

  series: [
    {
      data: [250, 380, 120, 350, 140, 350, 100],
      type: "line",
      smooth: true,
    },
  ],
};
// series: lineChartDataOverallRevenue.map((seriesData) => ({
//   type: 'line',
//   name: seriesData.name,
//   data: seriesData.data,
//   smooth: true,
//   lineStyle: {
//     width: 2,
//   },

// })),}

function lineChart() {
  return <ReactECharts option={lineChartOptionsOverallRevenue} />;
}

export default lineChart;
