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

  it("should delete the selected items", async () => {
    renderWithProviders(<App />);

    await openAddItemModalViaUI();
    await addItemViaUI("First item");

    await openAddItemModalViaUI();
    await addItemViaUI("Second item");

    await openAddItemModalViaUI();
    await addItemViaUI("Third item");

    const list = screen.getByRole("list");
    expect(list.children).toHaveLength(3);

    await userEvent.click(within(list).getByText(/second item/i));
    await userEvent.click(within(list).getByText(/third item/i));
    await userEvent.click(screen.getByText("Delete"));

    expect(within(list).queryByText(/second item/i)).toBeNull();
    expect(within(list).queryByText(/third item/i)).toBeNull();
    expect(list.children).toHaveLength(1);
  });

  it("should delete an item by double clicking on it", async () => {
    const user = userEvent.setup();

    renderWithProviders(<App />);

    await openAddItemModalViaUI();
    await addItemViaUI("First item");

    await openAddItemModalViaUI();
    await addItemViaUI("Second item");

    const list = screen.getByRole("list");

    await user.dblClick(within(list).getByText(/second item/i));

    expect(list.children).toHaveLength(1);
    expect(within(list).queryByText(/second item/i)).toBeNull();
  });
});
