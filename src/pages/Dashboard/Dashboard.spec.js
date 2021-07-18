import { render, screen } from "@testing-library/react";

import { Dashboard } from "./Dashboard";

describe("GIVEN a connected user on Dashboard page", () => {
  test("THEN a Header is visible", () => {
    render(<Dashboard/>)

    const header = screen.getByTestId("header");

    expect(header).toBeTruthy();
  });
});
