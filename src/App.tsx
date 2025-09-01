import { useState } from "react";
import { RiResetRightFill } from "react-icons/ri";

function App() {
  const [items, setItems] = useState<string[]>([]);
  const [newItemValue, setNewItemValue] = useState<string>("");
  const [itemIndexesToDelete, setItemIndexesToDelete] = useState<number[]>([]);
  const [history, setHistory] = useState<string[][]>([]);
  const [isAddNewItemModalVisible, setAddNewItemModalVisible] =
    useState<boolean>(false);

  function handleNewItemValueChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setNewItemValue(event.target.value);
  }

  function handleAddItemSubmit(event: React.FormEvent) {
    event.preventDefault();

    const nextItems = [...items, newItemValue];

    setHistory((history) => [...history, items]);
    setItems(nextItems);
    setNewItemValue("");
    setAddNewItemModalVisible(false);
  }

  function handleOpenAddNewItemModal() {
    setAddNewItemModalVisible(true);
  }

  function handleCancelProcess(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setNewItemValue("");
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
          <button className="button" onClick={handleOpenAddNewItemModal}>
            Add
          </button>
        </div>
        {isAddNewItemModalVisible ? (
          <div className="add-item">
            <h2 className="title-2">Add item to list</h2>
            <form onSubmit={handleAddItemSubmit} className="add-new-item-form">
              <input
                type="text"
                placeholder="Type the text here..."
                value={newItemValue}
                onChange={handleNewItemValueChange}
              />
              <div className="add-new-item-form__actions">
                <button type="button" onClick={handleCancelProcess}>
                  Cancel
                </button>
                <button type="submit" disabled={newItemValue === ""}>
                  Add
                </button>
              </div>
            </form>
          </div>
        ) : null}
      </div>
    </main>
  );
}

type ListProps = {
  items: string[];
  addItemToDelete: (index: number) => void;
  deleteItem: (index: number) => void;
};

function List({ items, addItemToDelete, deleteItem }: ListProps) {
  if (items.length === 0) {
    return <p>No items yet</p>;
  }

  return (
    <ul className="list">
      {items.map((item, idx) => (
        <li
          className="list__item"
          key={`${item}-${idx}`}
          onClick={() => addItemToDelete(idx)}
          onDoubleClick={() => deleteItem(idx)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default App;
