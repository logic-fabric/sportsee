import PropTypes from "prop-types";
import styled from "styled-components";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  getDefaultAverageSessions,
  useSportSeeApi,
} from "../../services/hooks/useSportSeeAPI";

import { styleVar } from "../../utils/style/styleVariables";

export function AverageSessionsChart({ userId }) {
  const { data, isLoading, error } = useSportSeeApi("average-sessions", userId);

  let averageSessions = data;

  if (error || isLoading) {
    averageSessions = getDefaultAverageSessions();
  }

  return (
    <AverageSessionsChartContainer>
      <AverageSessionsChartTitle>
        Durée moyenne des
        <br />
        sessions
      </AverageSessionsChartTitle>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={averageSessions}
          outerRadius="75%"
          margin={{ top: 0, right: 12, bottom: 24, left: 12 }}
        >
          <XAxis
            dataKey="day"
            stroke="rgba(255, 255, 255, 0.6)"
            axisLine={false}
            dy={10}
            tickLine={false}
            tick={{
              fontSize: 12,
              fontWeight: 500,
            }}
          />
          <YAxis
            dataKey="sessionLength"
            domain={[0, "dataMax + 60"]}
            hide={true}
          />
          <Line
            dataKey="sessionLength"
            type={`${userId === "18" ? "step" : "monotone"}`}
            stroke="rgba(255, 255, 255, 0.6)"
            strokeWidth={2}
            dot={false}
            activeDot={{
              stroke: "rgba(255,255,255, 0.6)",
              strokeWidth: 10,
              r: 5,
            }}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: "rgba(0, 0, 0, 0.1)",
              strokeWidth: 32,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </AverageSessionsChartContainer>
  );
}

AverageSessionsChart.propTypes = {
  userId: PropTypes.string.isRequired,
};

function CustomTooltip({ active, payload }) {
  if (active && payload) {
    return <TooltipContainer>{`${payload[0].value} min`}</TooltipContainer>;
  }

  return null;
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

const AverageSessionsChartContainer = styled.div`
  position: relative;

  background: ${styleVar.primary500};
`;

const AverageSessionsChartTitle = styled.h2`
  position: absolute;
  top: 1.5rem;
  left: 2rem;

  margin: 0;

  color: rgba(255, 255, 255, 0.6);
  font-size: 1rem;
  font-weight: 500;

  @media (max-width: 1340px) {
    top: 1rem;
    left: 1.5rem;
  }
`;

const TooltipContainer = styled.p`
  padding: 0.5rem;

  font-size: 0.7rem;
  font-weight: 500;

  background: white;
`;
