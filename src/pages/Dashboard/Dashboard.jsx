import { useParams } from "react-router";
import styled from "styled-components";

import { ActivitiesChart } from "../../components/ActivitiesChart/ActivitiesChart";
import { AsideNav } from "../../components/AsideNav/AsideNav";
import { AverageSessionsChart } from "../../components/AverageSessionsChart/AverageSessionsChart";
import { DailyActivityChart } from "../../components/DailyActivityChart/DailyActivityChart";
import { Header } from "../../components/Header/Header";
import { InfoCard } from "../../components/InfoCard/InfoCard";
import { ScoreChart } from "../../components/ScoreChart/ScoreChart";

import { MockedAPI } from "../../services/mockedAPI";
import { useSportSeeApi } from "../../services/hooks/useSportSeeAPI";

import { styleVar } from "../../utils/styleVariables";

export function Dashboard() {
  let { userId } = useParams();
  userId = parseInt(userId);

  const mockedApi = new MockedAPI();

  const { data, isLoading, error } = useSportSeeApi(
    `user/${userId}`,
    "firstName"
  );

  const userFirstName = data;

  if (error) {
    return (
      <div>
        <Header />

        <DashboardContainer>
          <AsideNav />

          <MainContent></MainContent>
        </DashboardContainer>
      </div>
    );
  }

  //const userActivities = mockedApi.getActivitiesById(userId);
  //const userAverageSessions = mockedApi.getAverageSessionsById(userId);
  const userDailyActivity = mockedApi.getDailyActivityById(userId);
  //const userFirstName = mockedApi.getFirstNameById(userId);
  const userKeyData = mockedApi.getKeyDataById(userId);
  const userTodayScore = mockedApi.getTodayScoreById(userId);

  return (
    <div>
      <Header />

      <DashboardContainer>
        <AsideNav />

        <MainContent>
          <MainTitle>
            Bonjour <FirstName>{!isLoading && userFirstName}</FirstName>
          </MainTitle>
          <Message>
            {isLoading || userFirstName === "unknown user"
              ? ""
              : "Félicitations ! Vous avez explosé vos objectifs hier !"}
          </Message>

          <ContentGrid>
            <ChartsGrid>
              <MainChart>
                <DailyActivityChart dailyActivity={userDailyActivity} />
              </MainChart>

              <AverageSessionsChart userId={userId} />

              <ActivitiesChart userId={userId} />

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

  @media (max-width: 1340px) {
    padding: 1.5rem 2rem;
  }
`;

const MainTitle = styled.h1`
  margin: 0;

  font-size: 3rem;
  font-weight: 500;

  @media (max-width: 1340px) {
    font-size: 2.5rem;
  }
`;

const FirstName = styled.span`
  color: ${styleVar.primary500};
`;

const Message = styled.p`
  margin: 2rem 0 4rem 0;

  font-size: 1.1rem;

  @media (max-width: 1340px) {
    margin: 0.5rem 0 2rem 0;

    font-size: 1.05rem;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1340px) {
    gap: 1rem;
  }
`;

const ChartsGrid = styled.div`
  grid-column: 1/4;

  display: grid;
  grid-template: 20rem 16rem / repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1340px) {
    grid-template: 18rem 14rem / repeat(3, 1fr);
    gap: 1rem;
  }

  > * {
    border-radius: 0.25rem;
    overflow: hidden;
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

  @media (max-width: 1340px) {
    gap: 1.25rem;
  }
`;
