import styled from "styled-components";

import { styleVar } from "../../utils/style/styleVariables";
import SportSeeLogo from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer data-testid="header">
      <LogoLink href="/">
        <img src={SportSeeLogo} alt="SportSee" />
      </LogoLink>

      <nav>
        <LinksList>
          <li>
            <HeaderLink href="/">Accueil</HeaderLink>
          </li>
          <li>
            <HeaderLink href="/">Profil</HeaderLink>
          </li>
          <li>
            <HeaderLink href="/">Réglages</HeaderLink>
          </li>
          <li>
            <HeaderLink href="/">Communauté</HeaderLink>
          </li>
        </LinksList>
      </nav>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: 16rem 1fr;

  color: white;
  background: ${styleVar.neutral900};
`;

const LogoLink = styled.a`
  padding: 1rem 2rem;

  @media (max-width: 1340px) {
    padding: 0.75rem 1.5rem;
  }
`;

const LinksList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  height: 100%;

  font-weight: 500;
  text-align: center;
`;

const HeaderLink = styled.a`
  padding: 0.5rem 2rem;

  color: white;
  font-size: 1.5rem;
  text-decoration: none;

  @media (max-width: 1340px) {
    font-size: 1.25rem;
  }
`;
