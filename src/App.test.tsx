import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderWithProviders } from "./test/test-utils";
import App from "./App";

describe("App", () => {
  it("should add a new item and render it in the list", async () => {
    const user = userEvent.setup();

    renderWithProviders(<App />);

    const noItemsYet = screen.getByText(/no items yet/i);
    expect(noItemsYet).toBeVisible();

    await user.click(screen.getByText("Add"));

    expect(screen.getByRole("dialog")).not.toBeNull();

    const input = screen.getByPlaceholderText(/type the text here.../i);
    const form = input.closest("form")!;
    const addButton = within(form).getByText("Add");

    await user.type(input, "First item");
    await user.click(addButton);

    const list = screen.getByRole("list");

    expect(screen.queryByRole("dialog")).toBeNull();
    expect(within(list).getByText(/first item/i)).toBeVisible();
    expect(list.children).toHaveLength(1);
  });
});
