import calculateListItemExtraClass from "./calculate-list-item-extra-class";

describe("calculateListItemExtraClass", () => {
  it("should return empty string when selected has no items", () => {
    const result = calculateListItemExtraClass([], 0);
    const expected = "";
    expect(result).toBe(expected);
  });

  it("should return 'list__item--selected' when the index is selected", () => {
    const selected = [0, 1, 2];
    const result = calculateListItemExtraClass(selected, 1);
    const expected = "list__item--selected";
    expect(result).toBe(expected);
  });
});
