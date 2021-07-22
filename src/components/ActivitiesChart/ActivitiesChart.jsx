import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";

import { styleVar } from "../../utils/styleVariables";

export function ActivitiesChart() {
  const data = [
    {
      activity: "Intensité",
      value: 80,
    },
    {
      activity: "Vitesse",
      value: 40,
    },
    {
      activity: "Force",
      value: 70,
    },
    {
      activity: "Endurance",
      value: 50,
    },
    {
      activity: "Energie",
      value: 60,
    },
    {
      activity: "Cardio",
      value: 30,
    },
  ];

  return (
    <ActivitiesChartContainer>
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <RadarChart data={data} outerRadius="75%">
          <PolarGrid />
          <PolarAngleAxis
            dataKey="activity"
            stroke="white"
            tickLine={false}
            tick={{
              fontSize: 12,
              fontWeight: 500,
            }}
          />
          <Radar
            dataKey="value"
            fill={`${styleVar.primary500}`}
            fillOpacity={0.7}
            stroke="transparent"
          />
        </RadarChart>
      </ResponsiveContainer>
    </ActivitiesChartContainer>
  );
}

const ActivitiesChartContainer = styled.div`
  background: ${styleVar.neutral800};
`;
