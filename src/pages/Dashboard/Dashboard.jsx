import styled from "styled-components";

import { AsideNav } from "../../components/AsideNav/AsideNav";
import { BarChart } from "../../components/BarChart/BarChart";
import { Histogram } from "../../components/Histogram/Histogram";
import { InfoCard } from "../../components/InfoCard/InfoCard";
import { RadarChart } from "../../components/RadarChart/RadarChart";
import { RadialBarChart } from "../../components/RadialBarChart/RadialBarChart";

export function Dashboard() {
  return (
    <DashboardContainer>
      <AsideNav />

      <section>
        <h1>Bonjour Thomas</h1>
        <p>Félicitations ! Vous avez explosé vos objectifs hier !</p>

        <div>
          <div>
            <BarChart />
            <Histogram />
            <RadarChart />
            <RadialBarChart />
          </div>

          <div>
            <InfoCard />
            <InfoCard />
            <InfoCard />
            <InfoCard />
          </div>
        </div>
      </section>
    </DashboardContainer>
  );
}

const DashboardContainer = styled.main`
  display: grid;
  grid-template-columns: 7.5rem 1fr;
`;
