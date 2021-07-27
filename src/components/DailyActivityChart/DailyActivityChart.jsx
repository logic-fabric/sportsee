import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import styled from "styled-components";

import { styleVar } from "../../utils/styleVariables";

export function DailyActivityChart() {
  const dailyActivity = [
    {
      day: "01/07",
      kilogram: 80,
      calories: 240,
    },
    {
      day: "02/07",
      kilogram: 80,
      calories: 220,
    },
    {
      day: "03/07",
      kilogram: 81,
      calories: 280,
    },
    {
      day: "04/07",
      kilogram: 81,
      calories: 290,
    },
    {
      day: "05/07",
      kilogram: 80,
      calories: 160,
    },
    {
      day: "06/07",
      kilogram: 78,
      calories: 162,
    },
    {
      day: "07/07",
      kilogram: 76,
      calories: 390,
    },
  ];

  return (
    <DailyActivityChartContainer>
      <DailyActivityChartTitle>Activité quotidienne</DailyActivityChartTitle>

      <DailyActivityChartLegend>
        <LegendDetail>
          <ColorBullet background={`${styleVar.neutral800}`}></ColorBullet>
          Poids (kg)
        </LegendDetail>
        <LegendDetail>
          <ColorBullet background={`${styleVar.primary500}`}></ColorBullet>
          Calories brûlées (kCal)
        </LegendDetail>
      </DailyActivityChartLegend>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={dailyActivity}
          margin={{ top: 100, right: 24, bottom: 30, left: 48 }}
          barGap={8}
          barCategoryGap="35%"
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke={`${styleVar.neutral200}`}
          />
          <XAxis
            dataKey="day"
            dy={16}
            padding={{ left: -48, right: -48 }}
            stroke={`${styleVar.neutral400}`}
            tickLine={false}
            tick={{ fontSize: 14, fontWeight: 500 }}
          />
          <YAxis
            yAxisId="kg"
            dataKey="kilogram"
            domain={["dataMin - 1", "dataMax + 1"]}
            dx={24}
            orientation="right"
            stroke={`${styleVar.neutral400}`}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            yAxisId="cal"
            dataKey="calories"
            domain={[0, "dataMax + 10"]}
            hide={true}
          />
          <Bar
            yAxisId="kg"
            dataKey="kilogram"
            maxBarSize={8}
            fill={`${styleVar.neutral800}`}
            radius={[50, 50, 0, 0]}
          />
          <Bar
            yAxisId="cal"
            dataKey="calories"
            maxBarSize={8}
            fill={`${styleVar.primary500}`}
            radius={[50, 50, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </DailyActivityChartContainer>
  );
}

const DailyActivityChartContainer = styled.div`
  position: relative;

  height: 100%;

  background: ${styleVar.neutral100};
`;

const DailyActivityChartTitle = styled.h2`
  position: absolute;
  top: 1.5rem;
  left: 2rem;

  margin: 0;

  font-size: 1rem;
  font-weight: 500;
`;

const DailyActivityChartLegend = styled.div`
  display: flex;
  position: absolute;
  top: 1.5rem;
  right: 2rem;

  color: ${styleVar.neutral500};
`;

const LegendDetail = styled.p`
  margin: 0 0 0 2rem;
`;

const ColorBullet = styled.span`
  display: inline-block;

  width: 0.5rem;
  height: 0.5rem;
  margin: 0 0.5rem 0 0;
  border-radius: 50%;

  background: ${(props) => props.background};
`;
