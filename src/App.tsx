import { useState } from "react";
import { RiResetRightFill } from "react-icons/ri";

import List from "./components/List";

function App() {
  const [items, setItems] = useState<string[]>([]);
  const [itemIndexesToDelete, setItemIndexesToDelete] = useState<number[]>([]);
  const [history, setHistory] = useState<string[][]>([]);
  const [isAddNewItemModalVisible, setAddNewItemModalVisible] =
    useState<boolean>(false);

  function handleAddItemSubmit(event: React.FormEvent, newItem: string) {
    event.preventDefault();

    const nextItems = [...items, newItem];

    setHistory((history) => [...history, items]);
    setItems(nextItems);
    setAddNewItemModalVisible(false);
  }

  function handleOpenAddNewItemModal() {
    setAddNewItemModalVisible(true);
  }

  function handleCancelProcess(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setAddNewItemModalVisible(false);
  }

  function addItemToDelete(index: number) {
    const itemsToDelete = itemIndexesToDelete.includes(index)
      ? itemIndexesToDelete.filter((itemIndex) => itemIndex !== index)
      : [...itemIndexesToDelete, index];

    setItemIndexesToDelete(itemsToDelete);
  }

  function deleteItems() {
    const nextItems = items.filter(
      (_item, idx) => !itemIndexesToDelete.includes(idx)
    );

    setHistory((history) => [...history, items]);
    setItems(nextItems);
    setItemIndexesToDelete([]);
  }

  function deleteItem(index: number) {
    const nextItems = items.filter((_item, idx) => idx !== index);

    setHistory((history) => [...history, items]);
    setItems(nextItems);
  }

  function applyLastHistoryState() {
    if (history.length === 0) return;

    const previousState = history[history.length - 1];

    setItems(previousState);
    setHistory((history) => history.slice(0, -1));
  }

  return (
    <main>
      <ItemListPanel
        items={items}
        addItemToDelete={addItemToDelete}
        deleteItem={deleteItem}
        applyLastHistoryState={applyLastHistoryState}
        itemIndexesToDelete={itemIndexesToDelete}
        deleteItems={deleteItems}
        openAddItemModal={handleOpenAddNewItemModal}
      />
      {isAddNewItemModalVisible && (
        <AddItemModal
          submit={handleAddItemSubmit}
          close={handleCancelProcess}
        />
      )}
    </main>
  );
}

type ItemListPanelProps = {
  items: string[];
  itemIndexesToDelete: number[];
  addItemToDelete: (index: number) => void;
  deleteItem: (index: number) => void;
  applyLastHistoryState: (event: React.MouseEvent<HTMLButtonElement>) => void;
  deleteItems: (event: React.MouseEvent<HTMLButtonElement>) => void;
  openAddItemModal: () => void;
};

function ItemListPanel({
  items,
  addItemToDelete,
  deleteItem,
  applyLastHistoryState,
  itemIndexesToDelete,
  deleteItems,
  openAddItemModal,
}: ItemListPanelProps) {
  return (
    <div className="surface">
      <div className="surface__header">
        <h1 className="title-1">This is a technical proof</h1>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos in
          recusandae, corporis ullam debitis cumque cum tempora ipsa. Quasi,
          accusamus?
        </p>
      </div>
      <List
        items={items}
        addItemToDelete={addItemToDelete}
        deleteItem={deleteItem}
      />
      <div className="actions">
        <button
          className="button"
          onClick={applyLastHistoryState}
          disabled={history.length === 0}
        >
          <RiResetRightFill />
        </button>
        <button
          className="button"
          disabled={itemIndexesToDelete.length === 0}
          onClick={deleteItems}
        >
          Delete
        </button>
        <button className="button" onClick={openAddItemModal}>
          Add
        </button>
      </div>
    </div>
  );
}

type AddItemModalProps = {
  submit: (event: React.FormEvent, newItem: string) => void;
  close: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

function AddItemModal({ submit, close }: AddItemModalProps) {
  const [newItemValue, setNewItemValue] = useState<string>("");

  function handleNewItemValueChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setNewItemValue(event.target.value);
  }

  return (
    <div className="add-item">
      <h2 className="title-2">Add item to list</h2>
      <form
        onSubmit={(event) => submit(event, newItemValue)}
        className="add-new-item-form"
      >
        <input
          type="text"
          placeholder="Type the text here..."
          value={newItemValue}
          onChange={handleNewItemValueChange}
        />
        <div className="add-new-item-form__actions">
          <button type="button" onClick={close}>
            Cancel
          </button>
          <button type="submit" disabled={newItemValue === ""}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
