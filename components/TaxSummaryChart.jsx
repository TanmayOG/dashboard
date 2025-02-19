"use client";
import dynamic from "next/dynamic";

// Dynamically import ECharts with SSR disabled
const ReactECharts = dynamic(() => import("echarts-for-react"), {
  ssr: false,
});

const TaxSummaryChart = () => {
  const option = {
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        name: "Tax Summary",
        type: "pie",
        radius: ["60%", "80%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
        },
        emphasis: {
          scale: true,
        },
        data: [
          {
            value: 40,
            name: "Taxable Income",
            itemStyle: { color: "#93C5FD" },
          },
          { value: 20, name: "Tax Liability", itemStyle: { color: "#C4B5FD" } },
          { value: 15, name: "TDS", itemStyle: { color: "#FCA5A5" } },
          { value: 25, name: "Due Tax", itemStyle: { color: "#F9A8D4" } },
        ],
        center: ["50%", "50%"],
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: "240px", }} />;
};

const TaxSummary = () => {
  return (
    <div className="bg-black rounded-md  p-4 h-96">
      <h3 className="text-white mb-4">Tax Summary</h3>
      <div className="relative">
        <TaxSummaryChart />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <div className="text-xl font-bold">43.8%</div>
          <div className="text-sm text-gray-400">Liability</div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-blue-400 mr-2"></div>
          <span className="text-white text-sm">Taxable Income</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-purple-400 mr-2"></div>
          <span className="text-white text-sm">Tax Liability</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
          <span className="text-white text-sm">TDS</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-pink-400 mr-2"></div>
          <span className="text-white text-sm">Due Tax</span>
        </div>
      </div>
    </div>
  );
};

export default TaxSummary;
