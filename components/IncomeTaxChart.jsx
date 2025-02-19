"use client";
import dynamic from "next/dynamic";

// Dynamically import ECharts with SSR disabled
const ReactECharts = dynamic(() => import("echarts-for-react"), {
  ssr: false,
});

const IncomeTaxChart = () => {
  const option = {
    xAxis: {
      type: "category",
      data: ["Old Regime", "New Regime"],
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        color: "#fff",
      },
    },
    yAxis: {
      type: "value",
      show: false,
    },
    grid: {
      left: "10%",
      right: "10%",
      bottom: "15%",
      top: "10%",
    },
    series: [
      {
        data: [
          {
            value: 100,
            itemStyle: { color: "#FCD34D" },
          },
          {
            value: 80,
            itemStyle: { color: "#F9A8D4" },
          },
        ],
        type: "bar",
        barWidth: "40%",
      },
    ],
  };

  return (
    <ReactECharts
      option={option}
      style={{ height: "100%", width: "100%" }}
      opts={{ renderer: "svg" }}
    />
  );
};

 const IncomeTaxComparison = () => {
  return (
    <div className="bg-black rounded-lg p-4 h-full">
      <h3 className="text-white text-sm md:text-base mb-4">Income Tax</h3>
      <div className="h-[200px] md:h-[300px]">
        <IncomeTaxChart />
      </div>
    </div>
  );
};

export default IncomeTaxComparison;
