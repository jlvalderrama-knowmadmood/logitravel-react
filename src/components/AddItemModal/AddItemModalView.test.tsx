import { render, screen } from "@testing-library/react";

import AddItemModalView from "./AddItemModalView";

describe("AddItemModalView", () => {
  it("should have 'Add' action button", () => {
    render(<AddItemModalView submit={() => {}} close={() => {}} />);
    expect(screen.getByText("Add")).toBeVisible();
  });

  it("should have 'Cancel' action button", () => {
    render(<AddItemModalView submit={() => {}} close={() => {}} />);
    expect(screen.getByText("Cancel")).toBeVisible();
  });

  it("shoud have the text input", () => {
    render(<AddItemModalView submit={() => {}} close={() => {}} />);
    expect(screen.getByPlaceholderText("Type the text here...")).toBeVisible();
  });
});
