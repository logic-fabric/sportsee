import { useParams } from "react-router";
import styled from "styled-components";

import { ActivitiesChart } from "../../components/ActivitiesChart/ActivitiesChart";
import { AsideNav } from "../../components/AsideNav/AsideNav";
import { AverageSessionsChart } from "../../components/AverageSessionsChart/AverageSessionsChart";
import { DailyActivityChart } from "../../components/DailyActivityChart/DailyActivityChart";
import { Header } from "../../components/Header/Header";
import { InfoCardsGroup } from "../../components/InfoCardsGroup/InfoCardsGroup";
import { ScoreChart } from "../../components/ScoreChart/ScoreChart";

import { useSportSeeApi } from "../../services/hooks/useSportSeeAPI";

import { styleVar } from "../../utils/style/styleVariables";

export function Dashboard() {
  let { userId } = useParams();

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
            {isLoading || userFirstName === "unknown user" ? (
              ""
            ) : (
              <span>
                Félicitations ! Vous avez explosé vos objectifs hier
                !&nbsp;👏
              </span>
            )}
          </Message>

          <ContentGrid>
            <ChartsGrid>
              <MainChart>
                <DailyActivityChart userId={userId} />
              </MainChart>

              <AverageSessionsChart userId={userId} />

              <ActivitiesChart userId={userId} />

              <ScoreChart userId={userId} />
            </ChartsGrid>

            <InfoCardsGroup userId={userId} />
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
