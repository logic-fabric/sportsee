import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";

import { styleVar } from "../../utils/styleVariables";

const ACTIVITIES_ORDER_ON_CHART = [
  "Intensité",
  "Vitesse",
  "Force",
  "Endurance",
  "Energie",
  "Cardio",
];

export function ActivitiesChart({ activities }) {
  const orderedActivities = [];

  for (let activity of ACTIVITIES_ORDER_ON_CHART) {
    for (let item of activities) {
      if (item.activity === activity) {
        orderedActivities.push({
          activity: activity,
          value: item.value,
        });
      }
    }
  }

  return (
    <ActivitiesChartContainer>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={orderedActivities} outerRadius="75%">
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
