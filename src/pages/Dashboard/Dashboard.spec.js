import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";

import { Dashboard } from "./Dashboard";

function renderDashboard({ userId }) {
  render(
    <MemoryRouter initialEntries={[`/dashboard/${userId}`]}>
      <Route path="/dashboard/:userId">
        <Dashboard />
      </Route>
    </MemoryRouter>
  );
}

describe("GIVEN a user on Dashboard page", () => {
  beforeEach(() => {
    renderDashboard(1);
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
