import checkIsItemSelected from "./check-is-item-selected";

describe("checkIsItemSelected", () => {
  it("should return false when selected list is empty", () => {
    const result = checkIsItemSelected([], 0);
    expect(result).toBe(false);
  });

  it("should return true when the given index is in the selected list", () => {
    const result = checkIsItemSelected([0, 1, 2], 1);
    expect(result).toBe(true);
  });

  it("should return false is the given index is not in the selected list", () => {
    const result = checkIsItemSelected([0, 1, 2], 3);
    expect(result).toBe(false);
  });
});
