import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import styled from "styled-components";

import { useSportSeeApi } from "../../services/hooks/useSportSeeAPI";

import { styleVar } from "../../utils/styleVariables";

export function ScoreChart({ userId }) {
  const { data, isLoading, error } = useSportSeeApi(
    `user/${userId}`,
    "today-score"
  );

  let score = data;

  if (error || isLoading) {
    score = 0;
  }

  const pieData = [
    { name: "completed", value: score, fillColor: `${styleVar.primary500}` },
    { name: "not-completed", value: 1 - score, fillColor: "transparent" },
  ];

  return (
    <ScoreChartContainer>
      <ScoreChartTitle>Score</ScoreChartTitle>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={160} height={160}>
          <Pie
            data={pieData}
            dataKey="value"
            innerRadius={70}
            outerRadius={80}
            startAngle={90}
            endAngle={450}
          >
            {pieData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.fillColor}
                cornerRadius="50%"
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <ScoreLabel>
        <ScoreValue>{`${100 * score}%`}</ScoreValue>
        <br />
        de votre
        <br />
        objectif
      </ScoreLabel>
    </ScoreChartContainer>
  );
}

const ScoreChartContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${styleVar.neutral100};
`;

const ScoreChartTitle = styled.h2`
  position: absolute;
  top: 1.5rem;
  left: 2rem;

  margin: 0;

  font-size: 1rem;
  font-weight: 500;

  @media (max-width: 1340px) {
    top: 1rem;
    left: 1rem;
  }
`;

const ScoreLabel = styled.p`
  position: absolute;

  font-size: 1rem;
  text-align: center;
`;

const ScoreValue = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
`;
