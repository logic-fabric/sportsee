import styled from "styled-components";

import { styleVar } from "../../utils/styleVariables";
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
  writing-mode: vertical-lr;

  padding: 3rem 2.5rem;

  font-size: 0.8rem;

  transform: rotate(180deg);
`;
