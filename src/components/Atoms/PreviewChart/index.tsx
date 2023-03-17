import { useMemo } from "react";
import { Line } from "@nivo/line";
import { TPreviewChartProps } from "./types";

const PreviewChart = ({ data, name, profit }: TPreviewChartProps) => {
  const chartData = useMemo(
    () => [
      {
        id: name,
        color: "hsl(275, 70%, 50%)",
        data: data?.price.map((chart, x) => ({ x, y: chart })) || [],
      },
    ],
    [data]
  );

  const chartColor = profit === 'green' ? "#22c55e" : "#ef4444";

  if (!data || !chartData) return null;

  return (
    <Line
      height={50}
      width={200}
      data={chartData}
      colors={[chartColor]}
      enableArea={true}
      layers={["areas", "crosshair", "lines", "slices", "mesh"]}
      theme={{
        background: "transparent",
        textColor: "#FFF",
        fontSize: 15,
        axis: {
          domain: {
            line: {
              stroke: "#FFF",
              strokeWidth: 1,
            },
          },
          legend: {
            text: {
              fontSize: 15,
              fill: "#FFF",
            },
          },
          ticks: {
            line: {
              stroke: "#FFF",
              strokeWidth: 1,
            },
            text: {
              fontSize: 15,
              fill: "#FFFF",
            },
          },
        },
        grid: {
          line: {
            stroke: "#dddddd",
            strokeWidth: 1,
          },
        },
        annotations: {
          text: {
            fontSize: 15,
            fill: "#333333",
            outlineWidth: 2,
            outlineColor: "#ffffff",
            outlineOpacity: 1,
          },
          link: {
            stroke: "#000000",
            strokeWidth: 1,
            outlineWidth: 2,
            outlineColor: "#ffffff",
            outlineOpacity: 1,
          },
          outline: {
            stroke: "#000000",
            strokeWidth: 2,
            outlineWidth: 2,
            outlineColor: "#ffffff",
            outlineOpacity: 1,
          },
          symbol: {
            fill: "#000000",
            outlineWidth: 2,
            outlineColor: "#ffffff",
            outlineOpacity: 1,
          },
        },
        tooltip: {
          container: {
            background: "#5A189A",
            color: "#FFF",
            fontSize: 15,
          },
          basic: {},
          chip: {},
          table: {},
          tableCell: {},
          tableCellValue: {},
        },
      }}
    />
  );
};

export default PreviewChart;
