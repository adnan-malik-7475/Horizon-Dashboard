import ReactECharts from 'echarts-for-react';
import { EChartsOption } from 'echarts'










const option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar'
      }
    ]
  };

function ProgressBar() {
  return <ReactECharts option={option} />;
}

export default ProgressBar;