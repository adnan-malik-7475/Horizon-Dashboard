import ReactECharts from "echarts-for-react";

const lineChartDataOverallRevenue = [
    {
      name: 'Revenue',
      data: [1000, 1200, 1500, 1800, 2100],
    },
  ];
  
  const lineChartOptionsOverallRevenue = {
    title: {
      text: 'Overall Revenue',
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: ['2018', '2019', '2020', '2021', '2022'],
    },
    yAxis: {
      type: 'value',
    },
    series: lineChartDataOverallRevenue.map((seriesData) => ({
      type: 'line',
      name: seriesData.name,
      data: seriesData.data,
      smooth: true,
      lineStyle: {
        width: 2,
      },
      markPoint: {
        symbol: 'circle',
        data: [
          {
            name: '2021 Revenue Peak',
            xAxis: 3,
            yAxis: 2100,
          },
        ],
        itemStyle: {
          color: '#f00',
        },
      },
    })),}

    function lineChart() {
        return <ReactECharts option={lineChartOptionsOverallRevenue} />;
      }
      
      export default lineChart;
      