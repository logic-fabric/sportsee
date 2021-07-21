import { render, screen } from "@testing-library/react";

import { Dashboard } from "./Dashboard";

describe("GIVEN a connected user on Dashboard page", () => {
  beforeEach(() => {
    render(<Dashboard />);
  });

  test("THEN a Header is visible", () => {
    const header = screen.getByTestId("header");

    expect(header).toBeTruthy();
  });

  test("THEN there is a greeting heading", () => {
    const greetingHeading = screen.getByRole("heading", { level: 1 });

    expect(greetingHeading).toBeTruthy();
    expect(greetingHeading.textContent).toMatch(/Bonjour/i);
  });
});
