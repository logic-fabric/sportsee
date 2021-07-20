import { render, screen } from "@testing-library/react";

import { AsideNav } from "./AsideNav";

describe("GIVEN a user on a page with the vertical AsideNav", () => {
  beforeEach(() => {
    render(<AsideNav />);
  });

  test("THEN there is a navigation with a list containing 4 lisitems for the secondary links", () => {
    const navElement = screen.getByRole("navigation");
    expect(navElement).toBeTruthy();

    const listElement = screen.getByRole("list");
    expect(listElement).toBeTruthy();

    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toBeTruthy();
    expect(listItemElements.length).toBe(4);
  });

  test("THEN the AsideNav contains 4 links", () => {
    const links = screen.getAllByRole("link");

    expect(links.length).toBe(4);
  });

  test("THEN there are 4 activity pictograms with an alt Text", () => {
    const firstActivity = screen.getByAltText(/Méditation/i);
    expect(firstActivity).toBeTruthy();

    const secondActivity = screen.getByAltText(/Natation/i);
    expect(secondActivity).toBeTruthy();

    const thirdActivity = screen.getByAltText(/Cyclisme/i);
    expect(thirdActivity).toBeTruthy();

    const fourthActivity = screen.getByAltText(/Musculation/i);
    expect(fourthActivity).toBeTruthy();
  })

  test("THEN a copyright is visible", () => {
    const brandName = screen.getByText(/SportSee/);
    expect(brandName).toBeTruthy();

    const copyright = screen.getByText(/Copyright|Tous droits réservés/i);
    expect(copyright).toBeTruthy();
  });
});
