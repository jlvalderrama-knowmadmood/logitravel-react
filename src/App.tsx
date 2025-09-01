import { useState } from "react";
import { RiResetRightFill } from "react-icons/ri";

function App() {
  const [items, setItems] = useState<string[]>([]);
  const [newItemValue, setNewItemValue] = useState<string>("");
  const [itemIndexesToDelete, setItemIndexesToDelete] = useState<number[]>([]);
  const [isAddNewItemModalVisible, setAddNewItemModalVisible] =
    useState<boolean>(false);

  function handleNewItemValueChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setNewItemValue(event.target.value);
  }

  function handleAddItemSubmit(event: React.FormEvent) {
    event.preventDefault();

    setItems((items) => [...items, newItemValue]);
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
    setItemIndexesToDelete((itemIndexesToDelete) => [
      ...itemIndexesToDelete,
      index,
    ]);
  }

  function deleteItems() {
    setItems((items) =>
      items.filter((_item, idx) => !itemIndexesToDelete.includes(idx))
    );
  }

  function deleteItem(index: number) {
    setItems((items) => items.filter((_item, idx) => idx !== index));
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
        {items.length === 0 ? (
          <p>No items yet</p>
        ) : (
          <ul className="list">
            {items.map((item, idx) => (
              <li
                className="list__item"
                key={item}
                onClick={() => addItemToDelete(idx)}
                onDoubleClick={() => deleteItem(idx)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
        <div className="actions">
          <button className="button">
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
                <button onClick={handleCancelProcess}>Cancel</button>
                <button
                  type="submit"
                  onClick={handleAddItemSubmit}
                  disabled={newItemValue === ""}
                >
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

export default App;
