import { render, screen } from "@testing-library/react";

import { InfoCard } from "./InfoCard";

describe("GIVEN a user on a page with a CardInfo of type 'Calories'", () => {
  test("THEN 'Calories' and the value with the right unit are displayed", () => {
    render(<InfoCard type="Calories" value="4242" />);

    const cardType = screen.getByTestId("card-type");
    const cardMeasure = screen.getByTestId("card-measure");

    expect(cardType.textContent).toBe("Calories");
    expect(cardMeasure.textContent).toBe("4.242kCal");
  });

  describe("WHEN the user id is unknown", () => {
    test("THEN 'Calories' and just a dash are displayed", () => {
      render(<InfoCard type="Calories" value={null} />);

      const cardType = screen.getByTestId("card-type");
      const cardMeasure = screen.getByTestId("card-measure");
  
      expect(cardType.textContent).toBe("Calories");
      expect(cardMeasure.textContent).toBe("-");
    })
  })
});

describe("GIVEN a user on a page with a CardInfo of type 'Protéines'", () => {
  test("THEN 'Protéines' and the value with the right unit are displayed", () => {
    render(<InfoCard type="Protéines" value="4242" />);

    const cardType = screen.getByTestId("card-type");
    const cardMeasure = screen.getByTestId("card-measure");

    expect(cardType.textContent).toBe("Protéines");
    expect(cardMeasure.textContent).toBe("4.242g");
  });
});

