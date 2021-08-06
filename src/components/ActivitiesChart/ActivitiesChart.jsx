import PropTypes from "prop-types";
import styled from "styled-components";
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

import {
  getDefaultActivities,
  useSportSeeApi,
} from "../../services/hooks/useSportSeeAPI";

import { styleVar } from "../../utils/styleVariables";

const ACTIVITIES_ORDER_IN_CHART = [
  "Intensité",
  "Vitesse",
  "Force",
  "Endurance",
  "Energie",
  "Cardio",
];

export function ActivitiesChart({ userId }) {
  const { data, isLoading, error } = useSportSeeApi(
    `user/${userId}/performance`,
    "activities"
  );

  let activities = data;

  if (error || isLoading) {
    activities = getDefaultActivities();
  }

  const orderedActivities = [];

  for (let activity of ACTIVITIES_ORDER_IN_CHART) {
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
        <RadarChart
          data={orderedActivities}
          outerRadius={window.innerWidth > 1340 ? "70%" : "60%"}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="activity"
            stroke="white"
            dy={4}
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

ActivitiesChart.propTypes = {
  userId: PropTypes.string.isRequired,
};

const ActivitiesChartContainer = styled.div`
  background: ${styleVar.neutral800};
`;
