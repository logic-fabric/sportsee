import { render, screen } from "@testing-library/react";

import { Header } from "./Header";

describe("GIVEN a user on a page with a Header", () => {
  beforeEach(() => {
    render(<Header />);
  });

  test("THEN the Header contains a logo with an alt text", () => {
    const logo = screen.getByAltText(/SportSee/i);
    
    expect(logo).toBeTruthy();
  });

  test("THEN there is a navigation with a list and 4 listitems for the main links", () => {
    const navElement = screen.getByRole("navigation");
    expect(navElement).toBeTruthy();

    const listElement = screen.getByRole("list");
    expect(listElement).toBeTruthy();

    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toBeTruthy();
    expect(listItemElements.length).toBe(4);
  });

  test("THEN the Header contains 5 links", () => {
    const links = screen.getAllByRole("link");

    expect(links.length).toBe(5);
  });

  test("THEN there are links for Home, Profile, Settings and Community", () => {
    const homeLink = screen.getByText(/Accueil/);
    expect(homeLink).toBeTruthy();

    const profileLink = screen.getByText(/Profil/);
    expect(profileLink).toBeTruthy();

    const settingsLink = screen.getByText(/Réglages/);
    expect(settingsLink).toBeTruthy();

    const communityLink = screen.getByText(/Communauté/);
    expect(communityLink).toBeTruthy();
  });
});
