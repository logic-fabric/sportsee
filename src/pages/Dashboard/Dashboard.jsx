import { useParams } from "react-router";
import styled from "styled-components";

import { ActivitiesChart } from "../../components/ActivitiesChart/ActivitiesChart";
import { AsideNav } from "../../components/AsideNav/AsideNav";
import { AverageSessionsChart } from "../../components/AverageSessionsChart/AverageSessionsChart";
import { BarChart } from "../../components/BarChart/BarChart";
import { Header } from "../../components/Header/Header";
import { InfoCard } from "../../components/InfoCard/InfoCard";
import { ScoreChart } from "../../components/ScoreChart/ScoreChart";
import { MockedAPI } from "../../data/mockedAPI";
import { styleVar } from "../../utils/styleVariables";

export function Dashboard() {
  const api = new MockedAPI();

  let { userId } = useParams();
  userId = parseInt(userId);

  const userFirstName = api.getFirstNameById(userId);
  const userActivities = api.getActivitiesById(userId);
  const userTodayScore = api.getTodayScoreById(userId);
  const userKeyData = api.getKeyDataById(userId);

  return (
    <div>
      <Header />

      <DashboardContainer>
        <AsideNav />

        <MainContent>
          <MainTitle>
            Bonjour <FirstName>{userFirstName}</FirstName>
          </MainTitle>
          <Message>
            Félicitations ! Vous avez explosé vos objectifs hier !
          </Message>

          <ContentGrid>
            <ChartsGrid>
              <MainChart>
                <BarChart />
              </MainChart>

              <AverageSessionsChart />

              <ActivitiesChart activities={userActivities} />

              <ScoreChart score={userTodayScore} />
            </ChartsGrid>

            <CardsGrid>
              <InfoCard type="Calories" value={userKeyData.calorieCount} />

              <InfoCard type="Protéines" value={userKeyData.proteinCount} />

              <InfoCard type="Glucides" value={userKeyData.carbohydrateCount} />

              <InfoCard type="Lipides" value={userKeyData.lipidCount} />
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
    border-radius: 0.25rem;
    overflow: hidden;

    text-align: center;
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
    border-radius: 0.25rem;
    overflow: hidden;
  }
`;
