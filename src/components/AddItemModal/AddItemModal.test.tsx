import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { useAddItemModal } from "../../context/add-item-modal";
import { useItemsActions } from "../../context/items";
import AddItemModal from "./AddItemModal";

jest.mock("../../context/add-item-modal", () => ({
  useAddItemModal: jest.fn(),
}));

jest.mock("../../context/items", () => ({
  useItemsActions: jest.fn(),
}));

const mockedUseAddItemModal = useAddItemModal as jest.MockedFunction<
  typeof useAddItemModal
>;

const mockedUseItemsActions = useItemsActions as jest.MockedFunction<
  typeof useItemsActions
>;

function makeActionsMock() {
  const itemsActionsMock: jest.Mocked<ReturnType<typeof useItemsActions>> = {
    addItem: jest.fn(),
    deleteOne: jest.fn(),
    deleteSelected: jest.fn(),
    toggleSelect: jest.fn(),
    clearSelection: jest.fn(),
    undo: jest.fn(),
  };

  return itemsActionsMock;
}

describe("AddItemModal", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render nothing when isOpen is false", () => {
    mockedUseAddItemModal.mockReturnValue({
      isOpen: false,
      close: jest.fn(),
      open: jest.fn(),
    });

    mockedUseItemsActions.mockReturnValue(makeActionsMock());

    const { container } = render(<AddItemModal />);
    expect(container).toBeEmptyDOMElement();
  });

  it("enables the 'Add' button when typing and calls 'addItem' and 'close' on submit", async () => {
    const user = userEvent.setup();
    const actions = makeActionsMock();
    const close = jest.fn();

    mockedUseAddItemModal.mockReturnValue({
      isOpen: true,
      open: jest.fn(),
      close,
    });

    mockedUseItemsActions.mockReturnValue(actions);

    render(<AddItemModal />);

    const input = screen.getByPlaceholderText(/type the text here/i);
    const addButton = screen.getByRole("button", { name: /add/i });

    expect(addButton).toBeDisabled();

    await user.type(input, "Nuevo item");
    expect(addButton).toBeEnabled();

    await user.click(addButton);

    expect(actions.addItem).toHaveBeenCalledWith("Nuevo item");
    expect(close).toHaveBeenCalledTimes(1);
  });

  it("'close' prop is called when clicking on 'Cancel' button", async () => {
    const user = userEvent.setup();
    const actions = makeActionsMock();
    const close = jest.fn();

    mockedUseAddItemModal.mockReturnValue({
      isOpen: true,
      open: jest.fn(),
      close,
    });

    mockedUseItemsActions.mockReturnValue(actions);

    render(<AddItemModal />);

    await user.click(screen.getByRole("button", { name: /cancel/i }));
    expect(close).toHaveBeenCalledTimes(1);
  });
});
