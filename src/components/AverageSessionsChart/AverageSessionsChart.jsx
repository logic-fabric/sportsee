import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import styled from "styled-components";

import { styleVar } from "../../utils/styleVariables";

export function AverageSessionsChart({ averageSessions }) {
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
          margin={{ top: 80, right: 12, bottom: 24, left: 12 }}
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
          <Line
            dataKey="sessionLength"
            type="monotone"
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

function CustomTooltip({ active, payload }) {
  if (active && payload) {
    return <TooltipContainer>{`${payload[0].value} min`}</TooltipContainer>;
  }

  return null;
}

const AverageSessionsChartContainer = styled.div`
  position: relative;

  background: ${styleVar.primary500};
`;

const AverageSessionsChartTitle = styled.h2`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;

  margin: 0;

  color: rgba(255, 255, 255, 0.6);
  font-size: 1rem;
  font-weight: 500;
`;

const TooltipContainer = styled.p`
  padding: 0.5rem;

  font-size: 0.7rem;
  font-weight: 500;

  background: white;
`;
