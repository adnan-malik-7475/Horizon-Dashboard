import ReactECharts from "echarts-for-react";
import { EChartsOption } from "echarts";

const Pieoption = {
  title: {
    text: "Your Pie Chart",
  },
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "vertical",
    left: "left",
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: "50%",
      label: {
        show: false,
      },
      data: [{ value: 1048 }, { value: 290 }, { value: 350 }],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
};
function PieChart() {
  return <ReactECharts option={Pieoption} />;
}

export default PieChart;
