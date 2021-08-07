import styled from "styled-components";

import { styleVar } from "../../utils/style/styleVariables";
import pictoBodybuilding from "../../assets/picto-bodybuilding.png";
import pictoCycling from "../../assets/picto-cycling.png";
import pictoMeditation from "../../assets/picto-meditation.png";
import pictoSwimming from "../../assets/picto-swimming.png";

export function AsideNav() {
  return (
    <AsideNavContainer>
      <nav>
        <ActivitiesList>
          <li>
            <a href="/">
              <ActivityPicto src={pictoMeditation} alt="Méditation" />
            </a>
          </li>
          <li>
            <a href="/">
              <ActivityPicto src={pictoSwimming} alt="Natation" />
            </a>
          </li>
          <li>
            <a href="/">
              <ActivityPicto src={pictoCycling} alt="Cyclisme" />
            </a>
          </li>
          <li>
            <a href="/">
              <ActivityPicto src={pictoBodybuilding} alt="Musculation" />
            </a>
          </li>
        </ActivitiesList>
      </nav>

      <Disclaimer>Copyright SportSee 2021</Disclaimer>
    </AsideNavContainer>
  );
}

const AsideNavContainer = styled.div`
  display: grid;
  grid-template-rows: 3fr 2fr;

  color: white;

  background: ${styleVar.neutral900};

  @media (max-width: 1340px) {
    max-height: 692px;
  }
`;

const ActivitiesList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;
`;

const ActivityPicto = styled.img`
  padding: 0.5rem;
`;

const Disclaimer = styled.p`
  display: flex;
  align-items: center;

  padding: 3rem 0;

  font-size: 0.8rem;
  writing-mode: vertical-lr;

  transform: rotate(180deg);

  @media (max-width: 1340px) {
    padding: 2rem;
  }
`;
