import { render, screen } from "@testing-library/react";

import { Header } from "./Header";

describe("GIVEN a connected user on a page with a Header", () => {
  beforeEach(() => {
    render(<Header />);
  });

  test("THEN the Header contains 5 links", () => {
    const links = screen.getAllByRole("link");

    expect(links.length).toBe(5);
  });

  test("THEN The Header contains an accessible logo", () => {
    const logo = screen.getAllByAltText(/SportSee/i);

    expect(logo).toBeTruthy();
  });

  test("THEN there are links for Home, Profile, Settings and Community", () => {
    const homeLink = screen.getByText(/Accueil/);
    const profileLink = screen.getByText(/Profil/);
    const settingsLink = screen.getByText(/Réglages/);
    const communityLink = screen.getByText(/Communauté/);

    expect(homeLink).toBeTruthy();
    expect(profileLink).toBeTruthy();
    expect(settingsLink).toBeTruthy();
    expect(communityLink).toBeTruthy();
  });

  test("THEN there is a <nav> containing a <ul> and some <li> for the main links", () => {
    const navElement = screen.getByRole("navigation");
    const listElement = screen.getByRole("list");
    const listItemElement = screen.getAllByRole("listitem");

    expect(navElement).toBeTruthy();
    expect(listElement).toBeTruthy();
    expect(listItemElement).toBeTruthy();
  });
});
