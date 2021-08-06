import styled from "styled-components";

import { InfoCard } from "../InfoCard/InfoCard";

import {
  getDefaultKeyData,
  useSportSeeApi,
} from "../../services/hooks/useSportSeeAPI";

export function InfoCardsGroup({ userId }) {
  const { data, isLoading, error } = useSportSeeApi(
    `user/${userId}`,
    "key-data"
  );

  let keyData = data;

  if (error || isLoading) {
    keyData = getDefaultKeyData();
  }

  return (
    <CardsGrid>
      <InfoCard type="Calories" value={keyData.calorieCount} />

      <InfoCard type="Protéines" value={keyData.proteinCount} />

      <InfoCard type="Glucides" value={keyData.carbohydrateCount} />

      <InfoCard type="Lipides" value={keyData.lipidCount} />
    </CardsGrid>
  );
}

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
