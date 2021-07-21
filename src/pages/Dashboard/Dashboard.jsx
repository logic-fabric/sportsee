import { useParams } from "react-router";
import styled from "styled-components";

import { AsideNav } from "../../components/AsideNav/AsideNav";
import { BarChart } from "../../components/BarChart/BarChart";
import { Header } from "../../components/Header/Header";
import { Histogram } from "../../components/Histogram/Histogram";
import { InfoCard } from "../../components/InfoCard/InfoCard";
import { RadarChart } from "../../components/RadarChart/RadarChart";
import { RadialBarChart } from "../../components/RadialBarChart/RadialBarChart";
import { styleVar } from "../../utils/styleVariables";

export function Dashboard() {
  const { userId } = useParams();

  return (
    <div>
      <Header />

      <DashboardContainer>
        <AsideNav />

        <MainContent>
          <MainTitle>
            Bonjour <FirstName>{userId}</FirstName>
          </MainTitle>
          <Message>
            Félicitations ! Vous avez explosé vos objectifs hier !
          </Message>

          <ContentGrid>
            <ChartsGrid>
              <MainChart>
                <BarChart />
              </MainChart>

              <Histogram />

              <RadarChart />

              <RadialBarChart />
            </ChartsGrid>

            <CardsGrid>
              <InfoCard />

              <InfoCard />

              <InfoCard />

              <InfoCard />
            </CardsGrid>
          </ContentGrid>
        </MainContent>
      </DashboardContainer>
    </div>
  );
}

const DashboardContainer = styled.main`
  display: grid;
  grid-template-columns: 7.5rem 1fr;
`;

const MainContent = styled.section`
  padding: 3rem 5rem;
`;

const MainTitle = styled.h1`
  margin: 0;

  font-size: 3rem;
  font-weight: 500;
`;

const FirstName = styled.span`
  color: ${styleVar.primary500};
`;

const Message = styled.p`
  margin: 2rem 0 4rem 0;

  font-size: 1.1rem;
  font-weight: 400;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;

const ChartsGrid = styled.div`
  grid-column: 1/4;

  display: grid;
  grid-template: 20rem 16rem / repeat(3, 1fr);
  gap: 2rem;

  > * {
    padding: 2rem;
    text-align: center;
    background: ${styleVar.neutral100};
  }
`;

const MainChart = styled.div`
  grid-column: 1/4;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  gap: 2rem;

  > * {
    padding: 2rem;
    text-align: center;
    background: ${styleVar.neutral100};
  }
`;
