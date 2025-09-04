import { screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { renderWithProviders } from "./test/test-utils";
import App from "./App";

async function openAddItemModalViaUI() {
  const user = userEvent.setup();
  const openAddItemModalButton = screen.getByText("Add");

  await user.click(openAddItemModalButton);
}

async function addItemViaUI(itemText: string) {
  const user = userEvent.setup();
  const input = screen.getByPlaceholderText(/type the text here.../i);
  const form = input.closest("form")!;
  const addButton = within(form).getByText("Add");

  await user.type(input, itemText);
  await user.click(addButton);
}

describe("App", () => {
  it("should add a new item and render it in the list", async () => {
    renderWithProviders(<App />);

    const noItemsYet = screen.getByText(/no items yet/i);
    expect(noItemsYet).toBeVisible();

    await openAddItemModalViaUI();

    expect(screen.getByRole("dialog")).not.toBeNull();

    await addItemViaUI("First item");

    const list = screen.getByRole("list");

    expect(screen.queryByRole("dialog")).toBeNull();
    expect(within(list).getByText(/first item/i)).toBeVisible();
    expect(list.children).toHaveLength(1);
  });
});
