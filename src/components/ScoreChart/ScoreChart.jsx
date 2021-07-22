import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import styled from "styled-components";

import { styleVar } from "../../utils/styleVariables";

export function ScoreChart() {
  const score = 0.65;
  const data = [
    { name: "completed", value: score, fillColor: `${styleVar.primary500}` },
    { name: "not-completed", value: 1 - score, fillColor: "transparent" },
  ];

  return (
    <ScoreChartContainer>
      <ScoreChartTitle>Score</ScoreChartTitle>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={160} height={160}>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={70}
            outerRadius={80}
            startAngle={90}
            endAngle={450}
          >
            {data.map((entry, index) => (
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
  left: 1.5rem;

  margin: 0;

  font-size: 1rem;
  font-weight: 500;
`;

const ScoreLabel = styled.p`
  position: absolute;

  font-size: 1rem;
`;

const ScoreValue = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
`;
