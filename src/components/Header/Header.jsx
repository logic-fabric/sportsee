import styled from "styled-components";

import { styleVar } from "../../utils/styleVariables";
import SportSeeLogo from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer data-testid="header">
      <LogoLink href="/">
        <img src={SportSeeLogo} alt="SportSee" />
      </LogoLink>

      <HeaderNav>
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
      </HeaderNav>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: white;
  background: ${styleVar.neutral900};
`;

const LogoLink = styled.a`
  padding: 1rem 2rem;
`;

const HeaderNav = styled.nav`
  width: -webkit-fill-available;
`;

const LinksList = styled.ul`
  justify-content: space-around;
`;

const HeaderLink = styled.a`
  padding: 0.5rem 2rem;

  color: white;
  font-size: 1.5rem;
  text-decoration: none;
`;
