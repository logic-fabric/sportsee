import { Cell, Pie, PieChart } from "recharts";
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
    </ScoreChartContainer>
  );
}

const ScoreChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${styleVar.neutral100};
`;
