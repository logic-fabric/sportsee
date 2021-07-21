import styled from "styled-components";

import { toFrenchIntegerFormat } from "../../utils/format";
import { styleVar } from "../../utils/styleVariables";
import calorieIcon from "../../assets/icon-calorie.png";
import carbohydrateIcon from "../../assets/icon-carbohydrate.png";
import lipidIcon from "../../assets/icon-lipid.png";
import proteinIcon from "../../assets/icon-protein.png";

const ICON_BY_TYPE = {
  Calories: calorieIcon,
  Glucides: carbohydrateIcon,
  Protéines: proteinIcon,
  Lipides: lipidIcon,
};

const UNIT_BY_TYPE = {
  Calories: "kCal",
  Glucides: "g",
  Protéines: "g",
  Lipides: "g",
};

export function InfoCard({ type, value }) {
  return (
    <InfoCardContainer>
      <img src={ICON_BY_TYPE[type]} alt={type} width="60" height="60" />
      <InfoCardData>
        <InfoCardMeasure data-testid="card-measure">
          {value ? `${toFrenchIntegerFormat(value)}${UNIT_BY_TYPE[type]}` : "-"}
        </InfoCardMeasure>
        <InfoCardType data-testid="card-type">{type}</InfoCardType>
      </InfoCardData>
    </InfoCardContainer>
  );
}

const InfoCardContainer = styled.div`
  display: flex;

  padding: 2rem;

  text-align: left;

  background: ${styleVar.neutral100};
`;

const InfoCardData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 0 0 1.5rem;
`;

const InfoCardMeasure = styled.div`
  margin: 0.125rem 0;

  font-size: 1.2rem;
  font-weight: 700;
`;

const InfoCardType = styled.div`
  margin: 0.125rem 0;

  color: ${styleVar.neutral500};
`;
