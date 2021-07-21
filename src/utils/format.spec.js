import { toFrenchIntegerFormat } from "./format";

describe("WHEN using formatValue()", () => {
  test("THEN a value of 3 digits or less will be unchanged", () => {
    expect(toFrenchIntegerFormat("421")).toBe("421");
    expect(toFrenchIntegerFormat(421)).toBe("421");
  });

  test("THEN a value with 4 digits or more will be formated with a dot", () => {
    expect(toFrenchIntegerFormat(1234)).toBe("1.234");

    expect(toFrenchIntegerFormat(123456)).toBe("123.456");

    expect(toFrenchIntegerFormat(1234567)).toBe("1.234.567");
  });
});
